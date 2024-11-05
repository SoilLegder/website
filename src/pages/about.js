/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Soil Ledger - Transforming Agriculture">
            <div className="about-area pt-140 pb-100">
                <div className="container">
                    {/* Section 1: Introduction */}
                    <div className="row justify-content-center mb-80">
                        <div className="col-xl-8 text-center">
                            <h2 className="title mb-4">Transforming Agriculture Through Technology</h2>
                            <p className="lead mb-5">
                                Soil Ledger combines blockchain technology, IoT sensors, and artificial intelligence 
                                to revolutionize agricultural practices and create a more sustainable future for farming.
                            </p>
                            <div className="video-wrapper mb-4">
                                <video
                                    src="/videos/soilledger6.mp4"
                                    className="rounded-3"
                                    autoPlay
                                    loop
                                    // muted
                                    playsInline
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Impact on Agriculture */}
                    <div className="row mb-80">
                        <div className="col-12">
                            <h3 className="title mb-4">How Soil Ledger Affects Agriculture</h3>
                            <div className="impact-content">
                                <p>
                                    Soil Ledger is revolutionizing agriculture by creating a transparent, efficient, 
                                    and sustainable ecosystem. Our platform enables:
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <strong>Data-Driven Decision Making:</strong> By collecting and analyzing real-time data 
                                        from IoT sensors and drones, farmers can make informed decisions about crop management, 
                                        resource allocation, and harvest timing.
                                    </li>
                                    <li className="mb-4">
                                        <strong>Supply Chain Transparency:</strong> Our blockchain technology creates an immutable 
                                        record of agricultural products from farm to table, ensuring quality and authenticity 
                                        throughout the supply chain.
                                    </li>
                                    <li className="mb-4">
                                        <strong>Sustainable Practices:</strong> Through incentivization and monitoring, we encourage 
                                        and validate sustainable farming practices, contributing to environmental conservation.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Mission, Vision, Values & Innovation */}
                    <div className="row mb-80">
                        <div className="col-lg-6 mb-4">
                            <div className="value-card p-4 rounded-3 bg-light h-100 text-center">
                                <i className="fas fa-bullseye fa-2x mb-3 text-black"></i>
                                <h4>Mission</h4>
                                <p>
                                    To empower farmers with cutting-edge technology and data-driven insights, 
                                    enabling sustainable and profitable agricultural practices. Through our innovative 
                                    platform, we aim to transform traditional farming into a precise, efficient, and 
                                    environmentally conscious operation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="value-card p-4 rounded-3 bg-light h-100 text-center">
                                <i className="fas fa-eye fa-2x mb-3 text-black"></i>
                                <h4>Vision</h4>
                                <p>
                                    A world where agriculture is efficient, transparent, and environmentally sustainable, 
                                    powered by blockchain technology and IoT innovation. We envision a future where every 
                                    farmer has access to advanced tools and data analytics, creating a more resilient and 
                                    productive global food system.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="value-card p-4 rounded-3 bg-light h-100 text-center">
                                <i className="fas fa-heart fa-2x mb-3 text-black"></i>
                                <h4>Values</h4>
                                <p>
                                    Integrity, innovation, sustainability, and collaboration drive everything we do 
                                    at Soil Ledger. We believe in transparent operations, continuous improvement, 
                                    environmental stewardship, and building strong partnerships with farmers, 
                                    agricultural experts, and technology pioneers.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="value-card p-4 rounded-3 bg-light h-100 text-center">
                                <i className="fas fa-lightbulb fa-2x mb-3 text-black"></i>
                                <h4>Innovation</h4>
                                <p>
                                    Continuously pushing boundaries to develop solutions that address real-world 
                                    agricultural challenges. Our team combines expertise in blockchain, IoT, AI, 
                                    and agricultural science to create groundbreaking solutions that revolutionize 
                                    farming practices and improve crop yields.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Journey */}
                    <div className="row mb-80 d-none">
                        <div className="col-12">
                            <h3 className="title mb-4">How We Got Here</h3>
                            <div className="timeline">
                                <div className="timeline-item mb-4">
                                    <h5>2021: The Beginning</h5>
                                    <p>Founded with a vision to transform agriculture through technology</p>
                                </div>
                                <div className="timeline-item mb-4">
                                    <h5>2022: Technology Development</h5>
                                    <p>Launch of IoT sensor network and blockchain infrastructure</p>
                                </div>
                                <div className="timeline-item mb-4">
                                    <h5>2023: Market Expansion</h5>
                                    <p>Partnership with major agricultural organizations and expansion of services</p>
                                </div>
                                <div className="timeline-item">
                                    <h5>2024: Global Impact</h5>
                                    <p>Reaching farmers across continents and revolutionizing agricultural practices</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Team & CTA */}
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="team-section mb-5">
                                <h3 className="title mb-4">Our Team</h3>
                                <p className="mb-5">
                                    Led by agricultural experts, technologists, and industry veterans, 
                                    our team is committed to transforming agriculture through innovation.
                                </p>
                                <div className="row g-4 justify-content-center">
                                    {/* Add team member cards here if needed */}
                                </div>
                            </div>
                            <div className="cta-section bg-light p-5 rounded-3">
                                <h3 className="mb-4">Join the Agricultural Revolution</h3>
                                <p className="mb-4">
                                    Be part of the future of farming with Soil Ledger&apos;s innovative solutions
                                </p>
                                <Link href="/contact" className="btn btn-primary">
                                    Get Started Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;