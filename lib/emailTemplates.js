import { ESTIMATOR_CONFIG, getLabel } from "@/lib/estimatorData";

// Theme Configuration
const THEME = {
    bg: "#050507",        // Very dark background
    cardBg: "#111116",    // Slightly lighter card background
    text: "#b6bccc",      // Light gray text
    heading: "#ffffff",   // White headings
    border: "1px solid #22222a",
    accent: "#0ea5e9",    // Malibu Blue (Neon-ish)
    accentGlow: "0 0 10px rgba(14, 165, 233, 0.3)",
};

const STYLES = {
    container: `max-width: 600px; margin: 0 auto; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: transparent; border-radius: 12px; overflow: hidden; border: none;`,
    header: `background: transparent; padding: 40px 20px 20px 20px; text-align: center; border-bottom: none;`,
    headerTitle: `color: ${THEME.heading}; margin: 20px 0 5px 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;`,
    headerSubtitle: `color: #94a3b8; font-size: 15px; margin: 0;`,
    content: `padding: 20px 30px 40px 30px; background-color: transparent;`,
    sectionTitle: `color: ${THEME.heading}; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px;`,
    row: "margin-bottom: 15px;",
    label: "color: #94a3b8; font-size: 13px; font-weight: 600; width: 140px; text-transform: uppercase; letter-spacing: 0.5px;",
    value: `color: ${THEME.heading}; font-size: 15px; font-weight: 400;`,
    highlightBox: `background-color: #0a0a0c; border: 1px solid #333; border-left: 4px solid ${THEME.accent}; padding: 25px; border-radius: 12px; margin: 25px 0; box-shadow: ${THEME.accentGlow};`,
    footer: `background-color: transparent; padding: 30px; text-align: center; color: #ffffff; font-size: 12px; border-top: 1px solid #333;`,
    button: `display: inline-block; background-color: ${THEME.accent}; color: #000000; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 16px; margin-top: 10px; transition: all 0.2s;`,
    link: `color: ${THEME.accent}; text-decoration: none;`
};

// Logo URL (Assuming deployed or reachable)
const LOGO_URL = `${process.env.NEXT_PUBLIC_APP_URL || "https://itnnovator.com"}/webImages/logo.png`;

// Helper: Format Step 3 Answers
const formatStep3 = (step3) => {
    if (!step3 || Object.keys(step3).length === 0) return "";

    let rows = "";
    for (const [key, val] of Object.entries(step3)) {
        const label = getLabel(key); // Convert question ID to human string if possible, or fallback

        let valueDisplay = val;
        // If it's a known key (like '1-5'), try to get a label
        if (typeof val === 'string') {
            valueDisplay = getLabel(val) || val;
        } else if (typeof val === 'boolean') {
            valueDisplay = val ? "Yes" : "No";
        }

        rows += `
            <tr>
                <td style="padding: 8px 0; width: 160px; vertical-align: top; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${label}</td>
                <td style="padding: 8px 0; color: ${THEME.heading}; font-size: 15px;">${valueDisplay}</td>
            </tr>
        `;
    }
    return `<table width="100%" cellpadding="0" cellspacing="0">${rows}</table>`;
};

// ADMIN EMAIL TEMPLATE
export const generateAdminEmail = (data) => {
    const { contact, projectDetails, estimate, currency } = data;
    const typeLabel = getLabel(projectDetails.type);

    const featuresList = projectDetails.features?.map(fId => getLabel(fId)).join(", ") || "None";
    const timelineLabel = getLabel(projectDetails.timeline);
    const budgetLabel = getLabel(projectDetails.budget);
    const costDisplay = estimate.costRange; // Already localized

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            a:hover { opacity: 0.8; }
        </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <br>
        <div style="${STYLES.container}">
            
            <div style="${STYLES.header}">
                <img src="${LOGO_URL}" alt="Itnnovator" width="120" style="display: block; margin: 0 auto;">
                <h1 style="${STYLES.headerTitle}">New Lead Received</h1>
                <p style="${STYLES.headerSubtitle}">A new project estimate has been submitted</p>
            </div>

            <div style="${STYLES.content}">
                
                <div style="margin-bottom: 35px;">
                    <h3 style="${STYLES.sectionTitle}">Contact Information</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 12px;">Full Name</td>
                            <td style="padding: 8px 0; color: ${THEME.heading}; font-weight: 600; font-size: 16px;">${contact.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 12px;">Email</td>
                            <td style="padding: 8px 0;"><a href="mailto:${contact.email}" style="${STYLES.link}">${contact.email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 12px;">Phone</td>
                            <td style="padding: 8px 0;"><a href="tel:${contact.phone}" style="${STYLES.link}">${contact.phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; width: 140px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 12px;">Company</td>
                            <td style="padding: 8px 0; color: ${THEME.text};">${contact.company || "N/A"}</td>
                        </tr>
                    </table>
                </div>

                <div style="${STYLES.highlightBox}">
                    <h2 style="margin: 0 0 20px 0; color: ${THEME.heading}; font-size: 18px; border-bottom: 1px solid #333; padding-bottom: 15px;">Quick Estimate</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                         <tr>
                            <td style="padding: 6px 0; color: #64748b;">Project Type</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.heading}; font-weight: 700;">${typeLabel}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;">Est. Cost Range</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.accent}; font-weight: 700; font-size: 18px;">${costDisplay}</td>
                        </tr>
                         <tr>
                            <td style="padding: 6px 0; color: #64748b;">Est. Timeline</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.heading}; font-weight: 600;">${estimate.timelineRange}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;">complexity</td>
                            <td style="padding: 6px 0; text-align: right; color: #94a3b8;">${estimate.complexity} (${estimate.score} pts)</td>
                        </tr>
                    </table>
                </div>

                <div style="margin-bottom: 35px;">
                    <h3 style="${STYLES.sectionTitle}">Detailed Requirements</h3>
                    
                    <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Selected Features</p>
                    <p style="margin: 0 0 20px 0; color: ${THEME.heading}; line-height: 1.6;">${featuresList}</p>
                    
                    ${projectDetails.otherFeatures ? `
                        <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Other Custom Features</p>
                        <p style="margin: 0 0 20px 0; color: ${THEME.text}; padding: 15px; background: #0a0a0c; border: 1px solid #333; border-radius: 6px;">${projectDetails.otherFeatures}</p>
                    ` : ""}

                    <div style="margin-bottom: 20px;">
                        ${formatStep3(projectDetails.step3)}
                    </div>

                    ${projectDetails.additionalNotes ? `
                        <p style="margin: 20px 0 8px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Additional Notes</p>
                        <p style="margin: 0 0 15px 0; color: ${THEME.text}; padding: 15px; background: #0a0a0c; border: 1px solid #333; border-radius: 6px; border-left: 2px solid #edf2f7;">${projectDetails.additionalNotes}</p>
                    ` : ""}
                    
                    ${contact.note ? `
                        <p style="margin: 20px 0 8px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">User Message (Contact Form)</p>
                        <p style="margin: 0 0 15px 0; color: ${THEME.heading}; padding: 15px; background: #0a0a0c; border: 1px solid #333; border-radius: 6px;">"${contact.note}"</p>
                    ` : ""}
                </div>

                 <div>
                    <h3 style="${STYLES.sectionTitle}">Timeline & Budget</h3>
                     <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding: 8px 0; width: 140px; vertical-align: top; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase;">Timeline:</td>
                             <td style="padding: 8px 0; color: ${THEME.heading}; font-size: 15px;">${timelineLabel}</td>
                        </tr>
                         <tr>
                            <td style="padding: 8px 0; width: 140px; vertical-align: top; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase;">Budget:</td>
                             <td style="padding: 8px 0; color: ${THEME.heading}; font-size: 15px;">${budgetLabel}</td>
                        </tr>
                    </table>
                 </div>

                 <div style="text-align: center; margin-top: 50px;">
                    <a href="https://itnnovator.com/admin/leads" style="${STYLES.button}">View In Admin Panel</a>
                 </div>

            </div>

            <div style="${STYLES.footer}">
                <p style="margin-bottom: 10px;">Itnnovator — Transform. Build. Grow.</p>
                <div style="opacity: 0.8;">
                    <a href="mailto:info@itnnovator.com" style="color: #ffffff; text-decoration: none; margin: 0 10px;">info@itnnovator.com</a>
                    <a href="https://itnnovator.com" style="color: #ffffff; text-decoration: none; margin: 0 10px;">www.itnnovator.com</a>
                </div>
            </div>
        </div>
        <br>
    </body>
    </html>
    `;
};

// USER CONFIRMATION EMAIL TEMPLATE
export const generateUserConfirmationEmail = (data) => {
    const { contact, projectDetails, estimate } = data;
    const typeLabel = getLabel(projectDetails.type);
    const costDisplay = estimate.costRange;

    const featuresList = projectDetails.features?.map(fId => getLabel(fId)).join("<br>• ") || "None";

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <br>
        <div style="${STYLES.container}">
            
            <!-- Header -->
            <div style="${STYLES.header}">
                 <img src="${LOGO_URL}" alt="Itnnovator" width="120" style="display: block; margin: 0 auto 20px auto;">
                <h1 style="${STYLES.headerTitle}">Estimate Received!</h1>
                <p style="${STYLES.headerSubtitle}">Thank you for sharing your project details.</p>
            </div>

            <div style="${STYLES.content}">
                <p style="color: ${THEME.heading}; font-size: 18px; line-height: 1.6; margin-bottom: 10px;">Hi <strong style="color: ${THEME.accent};">${contact.name.split(" ")[0]}</strong>,</p>
                <p style="color: ${THEME.text}; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
                    We have successfully received your project requirements. Our team is already reviewing the details to provide you with a consultation.
                </p>

                <div style="${STYLES.highlightBox}">
                    <h2 style="margin: 0 0 20px 0; color: ${THEME.heading}; font-size: 18px; border-bottom: 1px solid #333; padding-bottom: 10px;">Your Estimate</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                         <tr>
                            <td style="padding: 6px 0; color: #64748b;">Service Type</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.heading}; font-weight: 700;">${typeLabel}</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 0; color: #64748b;">Est. Cost Range</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.accent}; font-weight: 700; font-size: 18px;">${costDisplay}</td>
                        </tr>
                         <tr>
                            <td style="padding: 6px 0; color: #64748b;">Est. Timeline</td>
                            <td style="padding: 6px 0; text-align: right; color: ${THEME.heading}; font-weight: 600;">${estimate.timelineRange}</td>
                        </tr>
                    </table>
                </div>

                <div style="background-color: #0a0a0c; padding: 25px; border-radius: 8px; border: 1px solid #333; margin-bottom: 30px;">
                    <h3 style="margin-top: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Summary of Requirements</h3>
                    
                    <p style="font-weight: 600; color: ${THEME.heading}; margin-bottom: 8px; font-size: 14px;">Selected Features</p>
                    <p style="color: ${THEME.text}; font-size: 14px; line-height: 1.6; margin-top: 0; padding-left: 10px; border-left: 2px solid #333;">• ${featuresList}</p>
                    
                    ${projectDetails.otherFeatures ? `
                        <p style="color: ${THEME.heading}; font-size: 14px; margin-top: 15px; font-weight: 600;">Custom Features</p>
                        <p style="color: ${THEME.text}; font-size: 14px; padding-left: 10px; border-left: 2px solid #333;">${projectDetails.otherFeatures}</p>
                    ` : ""}
                    
                     <div style="margin-top: 20px;">
                        <p style="font-weight: 600; color: ${THEME.heading}; margin-bottom: 8px; font-size: 14px;">Specific Details</p>
                         ${formatStep3(projectDetails.step3)}
                     </div>

                     ${projectDetails.additionalNotes ? `
                        <div style="margin-top: 20px;">
                            <p style="font-weight: 600; color: ${THEME.heading}; margin-bottom: 5px; font-size: 14px;">Your Notes</p>
                            <p style="color: ${THEME.text}; font-size: 14px; font-style: italic;">"${projectDetails.additionalNotes}"</p>
                        </div>
                     ` : ""}

                     ${contact.note ? `
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px dashed #333;">
                            <p style="font-weight: 600; color: ${THEME.heading}; margin-bottom: 5px; font-size: 14px;">Your Message</p>
                            <p style="color: ${THEME.text}; font-size: 14px; font-style: italic;">"${contact.note}"</p>
                        </div>
                     ` : ""}
                </div>

                <p style="color: ${THEME.text}; font-size: 15px; line-height: 1.6; margin-top: 30px; text-align: center;">
                    <strong>What happens next?</strong><br>
                    A dedicated project manager will review your submission and contact you via your preferred method (${contact.method || "phone/email"}) within 24 hours.
                </p>

                 <div style="text-align: center; margin-top: 30px;">
                    <a href="https://itnnovator.com/contact" style="${STYLES.button}">Book a Discovery Call</a>
                 </div>

                 <div style="text-align: center; margin-top: 20px;">
                     <a href="https://itnnovator.com" style="${STYLES.link}; font-size: 14px;">Visit Website</a>
                 </div>

            </div>

            <div style="${STYLES.footer}">
                <p style="margin-bottom: 10px;">Itnnovator — Transform. Build. Grow.</p>
                <div style="opacity: 0.8;">
                    <a href="mailto:info@itnnovator.com" style="color: #ffffff; text-decoration: none; margin: 0 10px;">info@itnnovator.com</a>
                    <a href="https://itnnovator.com" style="color: #ffffff; text-decoration: none; margin: 0 10px;">www.itnnovator.com</a>
                </div>
            </div>
        </div>
        <br>
    </body>
    </html>
    `;
};
