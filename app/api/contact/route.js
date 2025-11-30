import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();
    const { input_1, input_3, input_4, input_5, input_6 } = formData;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }); 
console.log("Receiver email:", process.env.CONTACT_RECEIVER_EMAIL);

    // Send email to admin
    await transporter.sendMail({
      from: `"${input_1} ${input_3}" <${input_4}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>First Name:</b> ${input_1}</p>
        <p><b>Last Name:</b> ${input_3}</p>
        <p><b>Email:</b> ${input_4}</p>
        <p><b>Phone:</b> ${input_5}</p>
        <p><b>Message:</b> ${input_6}</p>
      `,
    });

    // Send thank you email to user
    await transporter.sendMail({
      from: `"Itnnovator" <${process.env.SMTP_RECEIVER}>`,
      to: input_4,
      subject: "Thank you for contacting Itnnovator!",
      html: `
        <h3>Hi ${input_1},</h3>
        <p>Thanks for reaching out to Itnnovator! We’ll get back to you soon.</p>
        <p>Best Regards,<br>Itnnovator Team</p>
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
