import React from 'react';
import Layout from '@/components/Layouts/Layout';

const PrecisionAgriculturePage = () => {
    return (
        <Layout pageTitle="Precision Agriculture - Soil Ledger">
            <div className="feature-area-2 pt-110 pb-140  position-relative overflow-hidden" style={{backgroundImage: 'url(/assets/img/update/bg/feature-area-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}} id="precision-ag">
                <div className="feature-area-shape">
                    <img className="feature-shape2-1 alltuchtopdown" src="../../../assets/img/update/feature/feature-shape-2-1.png" alt="shape" />
                    <img className="feature-shape2-2 alltuchtopdown" src="../../../assets/img/update/feature/feature-shape-2-2.png" alt="shape" />
                    <img className="feature-shape2-3 leftToRight" src="../../../assets/img/update/feature/feature-shape-2-3.png" alt="shape" />
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-8">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">PRECISION AGRICULTURE</span>
                                <h2 className="title style2">Smart Farming Solutions</h2>
                                <p className="sec-text">Leveraging blockchain and IoT technology to revolutionize agricultural data management and decision-making.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-grid-wrap">
                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Soil Health Monitoring</h3>
                                <p className="feature-card-text">Real-time blockchain-verified soil data analysis for optimal crop management.</p>
                                <div className="checklist">
                                    <ul>
                                        <li><i className="fas fa-circle"></i> Nutrient level tracking</li>
                                        <li><i className="fas fa-circle"></i> Moisture content monitoring</li>
                                        <li><i className="fas fa-circle"></i> pH balance optimization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-seedling fa-4x"></i>
                            </div>
                        </div>
                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Weather Tracking</h3>
                                <p className="feature-card-text">Decentralized weather monitoring network providing accurate local forecasts.</p>
                                <p className="feature-card-text">Advanced algorithms for weather pattern prediction and risk assessment.</p>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-cloud-sun fa-4x"></i>
                            </div>
                        </div>
                        <div className="feature-card-grid">
                            <div className="feature-card-details">
                                <h3 className="feature-card-title">Data Transparency</h3>
                                <p className="feature-card-text">100% transparent and immutable agricultural data stored on blockchain.</p>
                                <p className="feature-card-text">Real-time access to critical farming metrics and analytics.</p>
                            </div>
                            <div className="feature-card-img">
                                <i className="fas fa-database fa-4x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrecisionAgriculturePage;