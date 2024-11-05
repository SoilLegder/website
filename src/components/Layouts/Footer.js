import Image from 'next/image';
import Link from 'next/link';
import Subscribe from '@/components/Subscribe';

const Footer = () => {
    return (
        <footer className="footer-wrapper bg-black text-white footer-layout2 pb-50 pt-140">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-auto col-lg-6 order-xl-1">
                        <div className="widget footer-widget">
                            <div className="widget-about">
                                <div className="footer-logo">
                                    <Link href="/"><Image src="/3.png" width={500} height={500} style={{height: "65px", width: "70%"}} alt="Soil Ledger" /></Link>
                                </div>
                                <p className="about-text text-title">Our blockchain-powered platform integrates IoT sensors and real-time data analytics to transform traditional farming into precision agriculture, enabling data-driven decisions and sustainable practices.</p>
                                <div className="social-btn style2">
                                    <a href="https://instagram.com/soilledger"><i className="fab fa-instagram"></i></a>
                                    <a href="https://t.me/soilledger"><i className="fab fa-telegram"></i></a>
                                    <a href="https://x.com/soilledger"><i className="fa fa-twitter"></i></a>
                                    {/* <a href="#"><i className="fab fa-linkedin"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-auto col-lg-6 order-xl-3">
                        <div className="footer-widget widget-newsletter">
                            <h3 className="fw-title text-white">SIGN UP FOR EMAIL UPDATES</h3>
                            <p className="newsletter-text text-title">Join the Soil Ledger community and be part of the future of precision agriculture. Sign up to receive news and updates.</p>
                            <Subscribe />
                        </div>
                    </div>

                    <div className="col-xl-auto col-lg-6 order-xl-2">
                        <div className="footer-widget widget-contact">
                            <h3 className="fw-title text-white">CONTACT US</h3>
                            <p className="contact-info-text text-white text-muted">Contact us at <a href="mailto:info@soilledger.com" className='contact-info-link text-white'>info@soilledger.com</a></p>
                            {/* <div className="contact-info-link">Call Us: <a href="tel:8005551234">800.555.1234</a></div> */}
                            {/* <div className=""><a href="mailto:info@soilledger.com">info@soilledger.com</a></div> */}
                            <p className="copyright-text">Copyright © {new Date().getFullYear()} <Link href="/">Soil Ledger.</Link> All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;