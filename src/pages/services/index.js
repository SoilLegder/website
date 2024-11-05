/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <Layout pageTitle="Soil Ledger - Agricultural Solutions">
            <div className="service-details-area pt-140 pb-100">
                <div className="container">
                    {/* Real-Time Data Collection Section */}
                    <div className="row align-items-center mb-100" id="real-time-data">
                        <div className="col-lg-6">
                            <div className="container-fluid">
                                <h3 className="title">Real-Time Data Collection</h3>
                                <p className="mb-4">
                                    Transform your agricultural operations with our comprehensive real-time data collection services.
                                </p>
                                <ul className="features-list">
                                    <li><i className="fas fa-check"></i> Advanced IoT sensors for soil monitoring</li>
                                    <li><i className="fas fa-check"></i> Drone-based aerial imagery and mapping</li>
                                    <li><i className="fas fa-check"></i> Real-time environmental data tracking</li>
                                    <li><i className="fas fa-check"></i> Secure data transmission and storage</li>
                                    <li><i className="fas fa-check"></i> pH level tracking</li>
                                    <li><i className="fas fa-check"></i> Nutrient content analysis</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features-img">
                                <div className="video-wrapper">
                                    <video
                                        src="/videos/SLDataCollection.mp4"
                                        className="rounded-3 w-100"
                                        autoPlay
                                        loop
                                        playsInline
                                        muted
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Analytics Section */}
                    <div className="row align-items-center mb-100" id="ai-analytics">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="features-img">
                                <img src="/SLCircuit.jpg" alt="AI-Driven Analytics" className="rounded-3 w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="container-fluid">
                                <h3 className="title">AI-Driven Analytics</h3>
                                <p className="mb-4">
                                    Leverage the power of artificial intelligence to gain deeper insights into your agricultural operations.
                                </p>
                                <ul className="features-list">
                                    <li><i className="fas fa-check"></i> Advanced soil quality mapping</li>
                                    <li><i className="fas fa-check"></i> Predictive crop health monitoring</li>
                                    <li><i className="fas fa-check"></i> Early pest detection systems</li>
                                    <li><i className="fas fa-check"></i> Resource optimization algorithms</li>
                                    <li><i className="fas fa-check"></i> Yield prediction</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Blockchain Security Section */}
                    <div className="row align-items-center mb-100" id="blockchain-security">
                        <div className="col-lg-6">
                            <div className="container-fluid">
                                <h3 className="title">Blockchain-Powered Security</h3>
                                <p className="mb-4">
                                    Ensure the integrity and security of your agricultural data with our blockchain technology.
                                </p>
                                <ul className="features-list">
                                    <li><i className="fas fa-check"></i> Immutable data records</li>
                                    <li><i className="fas fa-check"></i> Smart contract automation</li>
                                    <li><i className="fas fa-check"></i> Automated compliance</li>
                                    <li><i className="fas fa-check"></i> Secure access control</li>
                                    <li><i className="fas fa-check"></i> Supply chain tracking</li>
                                    <li><i className="fas fa-check"></i> Payment automation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features-img">
                                <div className="video-wrapper">
                                    <video
                                        src="/videos/SLblockhaincloud.mp4"
                                        className="rounded-3 w-100"
                                        autoPlay
                                        loop
                                        playsInline
                                        muted
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AgriTokens Section */}
                    <div className="row align-items-center mb-100 d-none" id="agritokens">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="features-img">
                                <div className="video-wrapper">
                                    <video
                                        src="/videos/SLToken.mp4"
                                        className="rounded-3 w-100"
                                        autoPlay
                                        loop
                                        playsInline
                                        muted
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="container-fluid">
                                <h3 className="title">AgriTokens Ecosystem</h3>
                                <p className="mb-4">
                                    Participate in the future of agricultural finance with our AgriTokens system.
                                </p>
                                <h5 className="mb-3">Token Economics</h5>
                                <ul className="features-list">
                                    <li><i className="fas fa-check"></i> Equipment marketplace access</li>
                                    <li><i className="fas fa-check"></i> Premium service benefits</li>
                                    <li><i className="fas fa-check"></i> Service discounts</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <div className="cta-content">
                                <h3 className="mb-4">Ready to Transform Your Farm?</h3>
                                <p className="mb-4">Join the agricultural revolution with Soil Ledger&apos;s innovative solutions</p>
                                <a href="mailto:info@soilledger.com" className="btn btn-primary">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ServicesPage;