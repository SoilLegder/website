/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';

const RealTimeData = () => {
    return (
        <Layout pageTitle="Real-Time Data Collection - Soil Ledger">
            <div className="service-details-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="service-details-wrapper">
                                <div className="service-details-thumb">
                                    <img src="/assets/img/services/real-time-data.jpg" alt="Real-time data collection" />
                                </div>
                                <h3 className="mb-4">Real-Time Data Collection</h3>
                                <p>
                                    Transform your agricultural operations with our comprehensive real-time data collection services. 
                                    Using cutting-edge technology, we provide accurate, timely insights into your farm&apos;s conditions.
                                </p>

                                <div className="service-features mt-5">
                                    <h4>Key Features</h4>
                                    <div className="row g-4 mt-2">
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>IoT Sensors</h5>
                                                <p>Monitor critical soil health parameters:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Soil moisture levels</li>
                                                    <li>• Temperature monitoring</li>
                                                    <li>• pH level tracking</li>
                                                    <li>• Nutrient content analysis</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Drone Technology</h5>
                                                <p>Advanced aerial monitoring capabilities:</p>
                                                <ul className="list-unstyled">
                                                    <li>• High-resolution imagery</li>
                                                    <li>• Comprehensive crop monitoring</li>
                                                    <li>• Field mapping</li>
                                                    <li>• Growth pattern analysis</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Secure Data Transmission</h5>
                                                <p>Enterprise-grade security for your agricultural data:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Encrypted data transfer</li>
                                                    <li>• Reliable telecom network integration</li>
                                                    <li>• Secure cloud storage</li>
                                                    <li>• Real-time synchronization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cta-section mt-5">
                                    <h4>Ready to Transform Your Farm?</h4>
                                    <p>
                                        Get started with our real-time data collection services and make informed decisions 
                                        based on accurate, timely data.
                                    </p>
                                    <Link href="/contact" className="btn btn-primary mt-3">
                                        Contact Us Today
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="widget">
                                    <h4 className="widget-title">All Services</h4>
                                    <ul className="service-list">
                                        <li className="active">
                                            <Link href="/services/real-time-data">Real-Time Data Collection</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/ai-analytics">AI-Driven Analytics</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/blockchain-security">Blockchain Security</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/dashboard-integration">Dashboard & API</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/agritokens">AgriTokens</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget mt-4">
                                    <div className="download-area">
                                        <h4>Resources</h4>
                                        <ul>
                                            <li>
                                                <Link href="/documents/product-brief.pdf">
                                                    <i className="far fa-file-pdf"></i> Product Brief
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/documents/technical-specs.pdf">
                                                    <i className="far fa-file-alt"></i> Technical Specifications
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RealTimeData;