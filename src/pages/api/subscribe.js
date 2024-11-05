import { createTransport } from 'nodemailer';
import rateLimit from 'express-rate-limit';
import { verify } from 'hcaptcha';

// Create rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 5 requests per windowMs
});

// Configure nodemailer
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function verifyRecaptcha(token) {
    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Apply rate limiting
        await new Promise((resolve, reject) => {
            limiter(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                resolve(result);
            });
        });

        const { email, recaptchaToken } = req.body;

        // Verify reCAPTCHA
        const isValid = await verifyRecaptcha(recaptchaToken);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid reCAPTCHA verification' });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Send email
        try {
            await transporter.sendMail({
                from: process.env.SMTP_FROM,
                to: 'support@soilledger.com',
                subject: '🌱 Welcome New SoiLedger Newsletter Subscriber!',
                text: `Wonderful news! ${email} has joined our growing community of soil health enthusiasts.`,
                html: `
                    <h2>🌱 Welcome New SoiLedger Community Member!</h2>
                    <p>We're thrilled to share that a new member has joined our community of people passionate about soil health and sustainable agriculture.</p>
                    <p><strong>New Member Email:</strong> ${email}</p>
                    <p><strong>Joined:</strong> ${new Date().toLocaleString()}</p>
                    <p><strong>Location:</strong> IP ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
                    <p><strong>Verification:</strong> Successfully verified through reCAPTCHA ✅</p>
                    <p>Let's welcome them warmly to our growing SoiLedger family!</p>
                `
            });
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            return res.status(500).json({ message: 'Failed to send subscription email' });
        }

        return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error('Subscription error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
} 