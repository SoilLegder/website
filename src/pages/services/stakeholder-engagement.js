import React from 'react';
import Layout from '@/components/Layouts/Layout';

const StakeholderEngagementPage = () => {
    return (
        <Layout pageTitle="Stakeholder Engagement - Soil Ledger">
            <div className="feature-area-2 pt-110 pb-140 position-relative overflow-hidden" style={{backgroundImage: 'url(/assets/img/update/bg/feature-area-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="feature-area-shape">
                    <img className="feature-shape2-1 alltuchtopdown" src="../../../assets/img/update/feature/feature-shape-2-1.png" alt="shape" />
                    <img className="feature-shape2-2 alltuchtopdown" src="../../../assets/img/update/feature/feature-shape-2-2.png" alt="shape" />
                    <img className="feature-shape2-3 leftToRight" src="../../../assets/img/update/feature/feature-shape-2-3.png" alt="shape" />
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center mb-70">
                                <span className="sub-title">STAKEHOLDER ENGAGEMENT</span>
                                <h2 className="title style2">Collaborative Agriculture Platform</h2>
                                <p className="sec-text">Connect and collaborate with all stakeholders in your agricultural ecosystem through our blockchain-powered integrated platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-grid-wrap">
                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Supply Chain Transparency</h3>
                                <p className="feature-card-text">End-to-end visibility across your agricultural supply chain with immutable blockchain records.</p>
                                <div className="checklist">
                                    <ul>
                                        <li><i className="fas fa-circle"></i> Real-time tracking</li>
                                        <li><i className="fas fa-circle"></i> Product traceability</li>
                                        <li><i className="fas fa-circle"></i> Quality assurance</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-link fa-4x"></i>
                            </div>
                        </div>

                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Stakeholder Communication</h3>
                                <p className="feature-card-text">Seamless collaboration between farmers, suppliers, buyers and other stakeholders.</p>
                                <div className="checklist">
                                    <ul>
                                        <li><i className="fas fa-circle"></i> Instant messaging</li>
                                        <li><i className="fas fa-circle"></i> Document sharing</li>
                                        <li><i className="fas fa-circle"></i> Smart contracts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-comments fa-4x"></i>
                            </div>
                        </div>

                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Performance Analytics</h3>
                                <p className="feature-card-text">Comprehensive tracking and reporting of key agricultural metrics.</p>
                                <div className="checklist">
                                    <ul>
                                        <li><i className="fas fa-circle"></i> Yield monitoring</li>
                                        <li><i className="fas fa-circle"></i> Resource optimization</li>
                                        <li><i className="fas fa-circle"></i> ROI tracking</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-chart-line fa-4x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default StakeholderEngagementPage;