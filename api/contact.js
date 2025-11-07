// Vercel Serverless Function for Contact Form
// Handles form submission, reCAPTCHA verification, and email sending

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, company, inquiry, message, recaptcha_token } = req.body;

        // Validate required fields
        if (!name || !email || !inquiry || !message || !recaptcha_token) {
            return res.status(400).json({ 
                error: 'Missing required fields',
                details: 'Please fill in all required fields'
            });
        }

        // Verify reCAPTCHA token
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (!recaptchaSecret) {
            console.error('RECAPTCHA_SECRET_KEY not configured');
            return res.status(500).json({ 
                error: 'Server configuration error',
                details: 'reCAPTCHA verification not configured'
            });
        }

        // Verify reCAPTCHA with Google
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha_token}`,
            { method: 'POST' }
        );
        
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return res.status(400).json({ 
                error: 'reCAPTCHA verification failed',
                details: 'Please try again'
            });
        }

        // Check score (0.0 = bot, 1.0 = human)
        // Accept scores above 0.5
        if (recaptchaData.score < 0.5) {
            return res.status(400).json({ 
                error: 'reCAPTCHA score too low',
                details: 'Please try again'
            });
        }

        // Send email using Resend
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('RESEND_API_KEY not configured');
            return res.status(500).json({ 
                error: 'Email service not configured',
                details: 'Please contact support'
            });
        }

        // Format inquiry type for display
        const inquiryTypes = {
            'seller': 'Seller Mandate',
            'buyer': 'Buyer Mandate',
            'midstream': 'Midstream Venture',
            'acquisition': 'Acquisition & Exploration',
            'other': 'Other'
        };
        const inquiryDisplay = inquiryTypes[inquiry] || inquiry;

        // Email content
        const emailSubject = `New Contact Form Submission: ${inquiryDisplay}`;
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #000; color: #fff; padding: 20px; text-align: center; }
                    .content { background-color: #f9f9f9; padding: 20px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #000; }
                    .value { margin-top: 5px; padding: 10px; background-color: #fff; border-left: 3px solid #000; }
                    .footer { margin-top: 20px; padding: 10px; text-align: center; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Name:</div>
                            <div class="value">${escapeHtml(name)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">${escapeHtml(email)}</div>
                        </div>
                        ${company ? `
                        <div class="field">
                            <div class="label">Company:</div>
                            <div class="value">${escapeHtml(company)}</div>
                        </div>
                        ` : ''}
                        <div class="field">
                            <div class="label">Inquiry Type:</div>
                            <div class="value">${escapeHtml(inquiryDisplay)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message:</div>
                            <div class="value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from the URSOD website contact form.</p>
                        <p>Timestamp: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}Inquiry Type: ${inquiryDisplay}
Message:
${message}

---
This email was sent from the URSOD website contact form.
Timestamp: ${new Date().toLocaleString()}
        `.trim();

        // Send email using Resend API
        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`
            },
            body: JSON.stringify({
                from: 'URSOD Contact Form <noreply@ursod.co>',
                to: ['info@ursod.co'],
                reply_to: email,
                subject: emailSubject,
                html: emailHtml,
                text: emailText
            })
        });

        if (!emailResponse.ok) {
            const errorData = await emailResponse.json().catch(() => ({}));
            console.error('Resend API error:', errorData);
            return res.status(500).json({ 
                error: 'Failed to send email',
                details: 'Please try again later'
            });
        }

        const emailResult = await emailResponse.json();

        // Success response
        return res.status(200).json({ 
            success: true,
            message: 'Thank you for your inquiry. We will get back to you soon!',
            emailId: emailResult.id
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: 'Please try again later'
        });
    }
}

// Helper function to escape HTML (for Node.js/Vercel environment)
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

