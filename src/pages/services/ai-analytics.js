/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';

const AIAnalytics = () => {
    return (
        <Layout pageTitle="AI-Driven Analytics - Soil Ledger">
            <div className="service-details-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="service-details-wrapper">
                                <div className="service-details-thumb">
                                    <img src="/assets/img/services/ai-analytics.jpg" alt="AI-Driven Analytics" />
                                </div>
                                <h3 className="mb-4">AI-Driven Analytics</h3>
                                <p>
                                    Leverage the power of artificial intelligence to gain deeper insights into your agricultural operations. 
                                    Our AI-driven analytics platform transforms raw data into actionable intelligence for optimized farming.
                                </p>

                                <div className="service-features mt-5">
                                    <h4>Key Features</h4>
                                    <div className="row g-4 mt-2">
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Soil Quality Mapping</h5>
                                                <p>Comprehensive soil analysis:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Nutrient distribution maps</li>
                                                    <li>• Soil composition analysis</li>
                                                    <li>• Fertility zone identification</li>
                                                    <li>• Historical trend analysis</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Crop Health Monitoring</h5>
                                                <p>Advanced crop analysis:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Early stress detection</li>
                                                    <li>• Growth stage monitoring</li>
                                                    <li>• Yield prediction</li>
                                                    <li>• Disease identification</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Pest Detection</h5>
                                                <p>Proactive pest management:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Early warning system</li>
                                                    <li>• Pest pattern analysis</li>
                                                    <li>• Risk assessment</li>
                                                    <li>• Treatment recommendations</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item p-4 rounded-3 bg-light">
                                                <h5>Resource Optimization</h5>
                                                <p>Efficient resource management:</p>
                                                <ul className="list-unstyled">
                                                    <li>• Water usage optimization</li>
                                                    <li>• Fertilizer planning</li>
                                                    <li>• Cost reduction analysis</li>
                                                    <li>• Sustainability metrics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cta-section mt-5">
                                    <h4>Optimize Your Farm with AI</h4>
                                    <p>
                                        Start using our AI-driven analytics to make data-backed decisions and improve your farm&apos;s 
                                        productivity while reducing operational costs.
                                    </p>
                                    <Link href="/contact" className="btn btn-primary mt-3">
                                        Get Started Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                <div className="widget">
                                    <h4 className="widget-title">All Services</h4>
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/services/real-time-data">Real-Time Data Collection</Link>
                                        </li>
                                        <li className="active">
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

export default AIAnalytics; 