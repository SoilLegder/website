import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!recaptchaToken) {
            setStatus('Please complete the reCAPTCHA');
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, recaptchaToken }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setRecaptchaToken(null);
            } else {
                setStatus(data.message || 'Subscription failed');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mb-25">
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={setRecaptchaToken}
                    className="mb-3"
                />

                <button 
                    type="submit" 
                    className="btn btn3"
                    disabled={loading || !recaptchaToken}
                >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </button>

                {status === 'success' && (
                    <div className="alert alert-success mt-3">
                        Thank you for subscribing!
                    </div>
                )}
                {status && status !== 'success' && (
                    <div className="alert alert-danger mt-3">
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Subscribe;