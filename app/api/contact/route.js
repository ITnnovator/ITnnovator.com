import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();
    const { name, email, phone, subject, message } = formData;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "itnnovator@gmail.com",
      subject: `💬 ${subject || "New Contact Form Submission"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
                      <p style="margin: 8px 0 0 0; color: #f0f0f0; font-size: 14px;">You have received a new inquiry</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 15px 20px; border-radius: 4px;">
                              <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</p>
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                              <tr>
                                <td width="120" style="vertical-align: top; padding: 8px 0;">
                                  <strong style="color: #333; font-size: 14px;">👤 Name:</strong>
                                </td>
                                <td style="vertical-align: top; padding: 8px 0;">
                                  <span style="color: #555; font-size: 14px;">${name}</span>
                                </td>
                              </tr>
                              <tr>
                                <td width="120" style="vertical-align: top; padding: 8px 0;">
                                  <strong style="color: #333; font-size: 14px;">📧 Email:</strong>
                                </td>
                                <td style="vertical-align: top; padding: 8px 0;">
                                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 14px;">${email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td width="120" style="vertical-align: top; padding: 8px 0;">
                                  <strong style="color: #333; font-size: 14px;">📱 Phone:</strong>
                                </td>
                                <td style="vertical-align: top; padding: 8px 0;">
                                  <a href="tel:${phone}" style="color: #667eea; text-decoration: none; font-size: 14px;">${phone}</a>
                                </td>
                              </tr>
                              <tr>
                                <td width="120" style="vertical-align: top; padding: 8px 0;">
                                  <strong style="color: #333; font-size: 14px;">📝 Subject:</strong>
                                </td>
                                <td style="vertical-align: top; padding: 8px 0;">
                                  <span style="color: #555; font-size: 14px;">${subject || "General Inquiry"}</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-top: 20px; padding-bottom: 10px;">
                            <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 15px 20px; border-radius: 4px;">
                              <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                            </div>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding: 15px 0;">
                            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        This email was sent from the Itnnovator contact form<br>
                        <span style="color: #ccc;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Send thank you email to user
    await transporter.sendMail({
      from: `"Itnnovator" <${process.env.SMTP_RECEIVER}>`,
      to: email,
      subject: "✅ Thank you for contacting Itnnovator!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                      <div style="background-color: rgba(255,255,255,0.2); width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 48px;">✓</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Message Received!</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #333; font-size: 20px; font-weight: 600;">Hi ${name.split(' ')[0]},</h2>
                      <p style="margin: 0 0 20px 0; color: #555; font-size: 16px; line-height: 1.6;">
                        Thank you for reaching out to <strong style="color: #667eea;">Itnnovator</strong>! We've received your message and appreciate you taking the time to contact us.
                      </p>
                      <p style="margin: 0 0 30px 0; color: #555; font-size: 16px; line-height: 1.6;">
                        Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.
                      </p>
                      
                      <!-- Summary Box -->
                      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; margin-bottom: 30px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Summary</p>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 5px 0; color: #333; font-size: 14px;"><strong>Subject:</strong> ${subject || "General Inquiry"}</td>
                          </tr>
                          <tr>
                            <td style="padding: 5px 0; color: #333; font-size: 14px;"><strong>Email:</strong> ${email}</td>
                          </tr>
                          <tr>
                            <td style="padding: 5px 0; color: #333; font-size: 14px;"><strong>Phone:</strong> ${phone}</td>
                          </tr>
                        </table>
                      </div>
                      
                      <p style="margin: 0 0 10px 0; color: #555; font-size: 16px; line-height: 1.6;">
                        Best Regards,
                      </p>
                      <p style="margin: 0; color: #667eea; font-size: 16px; font-weight: 600;">
                        The Itnnovator Team
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
                        Need immediate assistance?
                      </p>
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        Email: <a href="mailto:info@itnnovator.com" style="color: #667eea; text-decoration: none;">info@itnnovator.com</a><br>
                        <span style="color: #ccc; font-size: 11px; margin-top: 10px; display: block;">© ${new Date().getFullYear()} Itnnovator. All rights reserved.</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
