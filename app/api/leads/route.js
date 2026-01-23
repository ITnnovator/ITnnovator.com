import nodemailer from "nodemailer";
import dbConnect from "@/lib/db";
import Lead from "@/models/Lead";
import { ESTIMATOR_CONFIG, getLabel } from "@/lib/estimatorData";
import { generateAdminEmail, generateUserConfirmationEmail } from "@/lib/emailTemplates";

export async function POST(req) {
    try {
        const data = await req.json();
        const { contact, projectDetails, estimate } = data;

        // Server-side Validation
        if (!contact?.name || !contact?.email || !contact?.phone) {
            return new Response(JSON.stringify({ error: "Missing required contact fields" }), { status: 400 });
        }
        if (!projectDetails?.type) {
            return new Response(JSON.stringify({ error: "Missing project type" }), { status: 400 });
        }


        // Connect & Save
        await dbConnect();

        let newLead;
        try {
            newLead = await Lead.create(data);
        } catch (dbError) {
            // Handle Deduplication
            if (dbError.code === 11000) {
                console.warn("Duplicate submission detected:", data.submissionId);
                // Return success mostly to not confuse client, or just return existing
                return new Response(JSON.stringify({ success: true, message: "Already submitted" }), { status: 200 });
            }
            throw dbError; // Rethrow other errors
        }

        // Send Email to Admin
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const leadData = newLead.toObject(); // Convert Mongoose Doc to Plain Object for templates

        const adminHtml = generateAdminEmail(leadData);

        await transporter.sendMail({
            from: `"${contact.name}" <${contact.email}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || "info@itnnovator.com",
            subject: `🚀 New Lead: ${getLabel(projectDetails.type)} - ${contact.name}`,
            html: adminHtml,
        });

        // Send Confirmation to User
        const userHtml = generateUserConfirmationEmail(leadData);

        await transporter.sendMail({
            from: `"Itnnovator" <${process.env.SMTP_RECEIVER || process.env.SMTP_USER}>`,
            to: contact.email,
            subject: "We received your project estimate!",
            html: userHtml,
        });

        return new Response(JSON.stringify({ success: true, id: newLead._id }), { status: 201 });

    } catch (error) {
        console.error("Lead submission error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET(req) {
    // Admin check should ideally go here (middleware handles it mostly in Next.js structure usually, or check session)
    // For now, returning list
    try {
        await dbConnect();
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        return new Response(JSON.stringify(leads), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
