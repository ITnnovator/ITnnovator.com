import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, subject, phone, message } = await req.json();

    // Setup your SMTP transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Or your SMTP service
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER, // your email
            pass: process.env.SMTP_PASS, // your password or app password
        },
    });

    try {
        // Send email to YOU (admin)
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL, // your email to receive leads
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        });

        // Send "Thank You" email to customer
        await transporter.sendMail({
            from: `"ITnnovator" <${process.env.SMTP_RECEIVER}>`,
            to: email,
            subject: "Thank you for contacting ITnnovator!",
            html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for reaching out to us! We will get back to you shortly.</p>
        <p>Best Regards,<br>ITnnovator Team</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
