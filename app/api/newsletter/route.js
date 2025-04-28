import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send the email to your own email (newsletter database collection)
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_RECEIVER_EMAIL, // you receive
            subject: 'New Newsletter Subscription',
            html: `<p><strong>New subscriber:</strong> ${email}</p>`,
        });

        // Also send a thank-you email to the subscriber
        await transporter.sendMail({
            from: `"ITnnovator" <${process.env.SMTP_RECEIVER}>`,
            to: email, // to customer
            subject: 'Thank you for subscribing!',
            html: `<p>Hi there,</p><p>Thanks for subscribing to ITnnovator! We’re excited to have you.</p><p>Stay tuned for updates!</p><p>- ITnnovator Team</p>`,
        });

        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });

    } catch (error) {
        console.error('Error sending newsletter email:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
