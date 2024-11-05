import React from 'react';
import Layout from '@/components/Layouts/Layout';

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Us - Soil Ledger">
            <section className="contact-area pt-140 pb-140">
                <div className="container">
                    <div className="contact-info-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Location</h6>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Contact</h6>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Email</h6>
                                        <p><a href="mailto:info@soilledger.com">info@soilledger.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <i className="fas fa-business-time"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Operating Hours</h6>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap">
                        <div className="row g-0">
                            <div className="col-57 order-0 order-lg-2">
                                <div className="contact-form">
                                    <h4 className="title">Send a message</h4>
                                    <form id="contact-form" action="#" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="Enter your name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="email" name="email" placeholder="Enter your email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="tel" name="phone" placeholder="Phone number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="company" placeholder="Company name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Enter your message....." required></textarea>
                                        </div>
                                        <button type="submit" className="btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-43">
                                <div className="contact-map">
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#f5f5f5'
                                    }}>
                                        <p>Location Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="document-area">
                <div className="container">
                    <div className="document-inner-wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-60">
                                    <h2 className="title">Have Any Questions?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="document-form-wrap">
                                    <h4 className="title">Get In Touch Now</h4>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Enter your message....."></textarea>
                                        </div>
                                        <button type="submit" className="btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="document-wrap">
                                    <h4 className="title">Read Documents</h4>
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="#" className="disabled" style={{opacity: 0.6}}>
                                                <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                Whitepaper (Coming Soon)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="disabled" style={{opacity: 0.6}}>
                                                <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                Technical Documentation (Coming Soon)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="disabled" style={{opacity: 0.6}}>
                                                <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                Business Overview (Coming Soon)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="disabled" style={{opacity: 0.6}}>
                                                <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                One Pager (Coming Soon)
                                            </a>
                                        </li>
                                    </ul>
                                    <button className="btn" disabled style={{opacity: 0.6}}>Documents Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="document-shape">
                    <img src="/images/document_shape.png" alt="" className="alltuchtopdown" />
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;