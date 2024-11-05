/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const IntroAndRoadmap = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    const handleVideoClose = () => setShowVideoModal(false);
    const handleVideoShow = () => setShowVideoModal(true);

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="intro-wrapper">
            {/* Intro Section */}
            <div id="intro" className="pt-25 pb-140 overflow-hidden">
                <div className="container-fluid p-5">
                    <div className="mb-25 p-5 rounded-3 shadow-sm">

                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 pt-5">
                                <div className="section-title mb-45">
                                    <h4 className="title style1 text-primary display-4">Empowering Sustainable Agriculture Through Blockchain Technology</h4>
                                    <p className="sec-text fs-16">Soil Ledger is a blockchain-based platform dedicated to revolutionizing agricultural practices through decentralized technology and real-time data tracking.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="intro-thumb1 alltuchtopdown pb-3 pt-5 mt-2">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="img-fluid"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: '8px'
                                        }}
                                    >
                                        <source src="/videos/SLblockhaincloud.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center py-5">
                        <div className="col-xl-12 mx-auto">
                            <div id="vision-mission" className="row feature-wrap-4 bg-body rounded-4 py-5 shadow-sm">
                                <div className="text-center">
                                    <h2 className="intro-wrap-title display-5  mb-4">Our Vision & Mission</h2>
                                    <p className="intro-wrap-text mb-3">
                                        We aim to enable farmers to make data-driven decisions, optimize resource usage, and participate in carbon credit markets while ensuring transparency and traceability in the agricultural supply chain.
                                    </p>
                                    <p className="intro-wrap-text">
                                        By integrating IoT sensors, AI-driven analytics, and blockchain technology, we&apos;re setting a new standard for sustainable farming practices and environmental stewardship. Through these innovations, we empower farmers with the tools and insights needed to maximize yields while minimizing environmental impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="feature" className="row justify-content-between align-items-center">
                        <div className="col-xl-12">
                            <div className="section-title mb-5 pt-5 w-100 text-center">
                                <h4 className="title text-primary fs-1">Features</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="38" stroke="#344E41" strokeWidth="4"/>
                                        <path d="M25 40C25 31.7157 31.7157 25 40 25" stroke="#344E41" strokeWidth="4" strokeLinecap="round">
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 40 40"
                                                to="360 40 40"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </path>
                                        <circle cx="40" cy="40" r="4" fill="#344E41"/>
                                        <path d="M40 20L40 30M60 40L50 40M40 60L40 50M20 40L30 40" stroke="#344E41" strokeWidth="4" strokeLinecap="round"/>
                                        <path d="M45 35L55 25M55 55L45 45M25 55L35 45M35 35L25 25" stroke="#344E41" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h4>Real-Time Data Collection</h4>
                                <div className="feature-content text-start">
                                    <p><strong>IoT Sensors:</strong> Monitor soil moisture, pH levels, nutrient content, and temperature in real-time</p>
                                    <p><strong>Drones:</strong> Capture high-resolution field imagery for crop health assessment and 3D terrain mapping</p>
                                    <p><strong>Secure Data:</strong> End-to-end encrypted data transmission with blockchain verification</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Neural Network Grid */}
                                        <g id="neural-grid">
                                            {/* Layer 1 Nodes */}
                                            <circle cx="20" cy="25" r="3" fill="#344E41"/>
                                            <circle cx="20" cy="40" r="3" fill="#344E41"/>
                                            <circle cx="20" cy="55" r="3" fill="#344E41"/>
                                            
                                            {/* Layer 2 Nodes */}
                                            <circle cx="40" cy="32" r="3" fill="#344E41"/>
                                            <circle cx="40" cy="48" r="3" fill="#344E41"/>
                                            
                                            {/* Layer 3 Nodes */}
                                            <circle cx="60" cy="40" r="3" fill="#344E41"/>
                                            
                                            {/* Animated Connections */}
                                            <path d="M23 25L37 32M23 40L37 32M23 55L37 48M23 40L37 48M23 25L37 48M23 55L37 32" 
                                                stroke="#344E41" 
                                                strokeWidth="1" 
                                                strokeDasharray="4,4">
                                                <animate 
                                                    attributeName="stroke-dashoffset"
                                                    values="8;0"
                                                    dur="1.5s"
                                                    repeatCount="indefinite"
                                                />
                                            </path>
                                            <path d="M43 32L57 40M43 48L57 40" 
                                                stroke="#344E41" 
                                                strokeWidth="1"
                                                strokeDasharray="4,4">
                                                <animate 
                                                    attributeName="stroke-dashoffset"
                                                    values="8;0"
                                                    dur="1.5s"
                                                    repeatCount="indefinite"
                                                />
                                            </path>
                                        </g>

                                        {/* Data Visualization Elements */}
                                        <g id="data-viz" transform="translate(0,0)">
                                            {/* Bar Chart */}
                                            <rect x="15" y="65" width="4" height="10" fill="#344E41" opacity="0.7">
                                                <animate attributeName="height" values="0;10" dur="1s" repeatCount="indefinite"/>
                                            </rect>
                                            <rect x="22" y="65" width="4" height="7" fill="#344E41" opacity="0.7">
                                                <animate attributeName="height" values="0;7" dur="1s" repeatCount="indefinite"/>
                                            </rect>
                                            <rect x="29" y="65" width="4" height="12" fill="#344E41" opacity="0.7">
                                                <animate attributeName="height" values="0;12" dur="1s" repeatCount="indefinite"/>
                                            </rect>
                                        </g>

                                        {/* Rectangular Progress */}
                                        <rect x="2" y="2" width="76" height="76"
                                            stroke="#344E41"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray="308"
                                            strokeDashoffset="308">
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                from="308"
                                                to="0"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </rect>

                                        {/* Binary Data Flow */}
                                        <text className="binary-data" x="55" y="15" fill="#344E41" fontSize="6">
                                            <tspan>01</tspan>
                                            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
                                        </text>
                                        <text className="binary-data" x="65" y="25" fill="#344E41" fontSize="6">
                                            <tspan>10</tspan>
                                            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
                                        </text>
                                    </svg>
                                </div>
                                <h4>AI-Driven Analytics</h4>
                                <div className="feature-content">
                                    <p><strong>Soil Mapping:</strong> Nutrient distribution analysis</p>
                                    <p><strong>Health Monitoring:</strong> Early stress detection</p>
                                    <p><strong>Resource Planning:</strong> Optimization insights</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                        <div className="feature-box">
                            <div className="feature-icon">
                                <svg width="80" height="80" viewBox="0 0 80 80">
                                    {/* Background circle */}
                                    <circle cx="40" cy="40" r="35" fill="#f5eee9" />
                                    
                                    {/* Ecosystem nodes */}
                                    <circle cx="40" cy="25" r="8" fill="#344E41" opacity="0.8" />
                                    <circle cx="25" cy="50" r="8" fill="#344E41" opacity="0.8" />
                                    <circle cx="55" cy="50" r="8" fill="#344E41" opacity="0.8" />
                                    
                                    {/* Connecting lines */}
                                    <line x1="40" y1="25" x2="25" y2="50" 
                                        stroke="#344E41" strokeWidth="2" opacity="0.6" />
                                    <line x1="40" y1="25" x2="55" y2="50" 
                                        stroke="#344E41" strokeWidth="2" opacity="0.6" />
                                    <line x1="25" y1="50" x2="55" y2="50" 
                                        stroke="#344E41" strokeWidth="2" opacity="0.6" />
                                    
                                    {/* Animated particles */}
                                    <circle cx="40" cy="25" r="2" fill="#212529">
                                        <animate attributeName="opacity"
                                            values="0;1;0" dur="2s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="25" cy="50" r="2" fill="#212529">
                                        <animate attributeName="opacity"
                                            values="1;0;1" dur="2s"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="55" cy="50" r="2" fill="#212529">
                                        <animate attributeName="opacity"
                                            values="0;1;0" dur="2s"
                                            repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>
                            <h4>AgriTokens Ecosystem</h4>
                            <div className="feature-content">
                                <p><strong>Earn:</strong> Rewards for data sharing</p>
                                <p><strong>Trade:</strong> Equipment and resources</p>
                                <p><strong>Invest:</strong> Fund agricultural initiatives</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* Roadmap Section */}
            <div className="pt-130 pb-140 overflow-hidden bg-white position-relative z-index-common" id="roadMap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-sm-8">
                            <div className="section-title mb-50">
                                <h2 className="title style1">Our Roadmap</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-4">
                    <Slider {...sliderSettings}>
                        {/* Roadmap Items */}
                        {[
                            {
                                date: 'Q1 2025',
                                title: 'Platform Launch',
                                description: 'Initial release of the Soil Ledger platform with core tracking and monitoring features'
                            },
                            {
                                date: 'Q2 2025',
                                title: 'IoT Integration',
                                description: 'Integration of IoT sensors and real-time data collection capabilities'
                            },
                            {
                                date: 'Q3 2025',
                                title: 'Marketplace',
                                description: 'Launch of carbon credit marketplace and sustainable farming incentives'
                            },
                            {
                                date: 'Q4 2025',
                                title: 'Global Expansion',
                                description: 'International rollout and partnership development with major agricultural organizations'
                            },
                            {
                                date: 'Q1 2026',
                                title: 'Advanced Analytics',
                                description: 'Implementation of AI-powered predictive analytics and yield optimization tools'
                            }
                        ].map((item, index) => (
                            <div className="px-3" key={index}>
                                <div className="roadmap-item">
                                    <span className="roadmap-title">{item.date}</span>
                                    <div className="roadmap-content">
                                        <h4 className="title"><span className="dot"></span>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="pt-140 pb-140 overflow-hidden position-relative z-index-common">
                <div className="container">
                    <div className="row justify-content-between align-items-center py-5">
                        <div className="col-xl-5">
                            <div className="section-title mb-50">
                                <span className="sub-title">POSSIBILITIES</span>
                                <h2 className="title style1">What will it mean for agriculture?</h2>
                                <p className="mt-25">Our blockchain-powered platform integrates IoT sensors and real-time data analytics to transform traditional farming into precision agriculture, enabling data-driven decisions and sustainable practices.</p>
                            </div>
                        </div>
                         <div className="col-xl-6">
                            <div className="feature-image-wrap text-center">
                                <video
                                    src="/videos/soilledger1.mp4"
                                    className="img-fluid rounded shadow-lg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '500px'
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div id="features1" className="pt-140 pb-140 overflow-hidden position-relative z-index-common bg-light   ">
                <div className="container">
                <div className="row feature-wrap-4 bg-body">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-6">
                                <div className="feature-wrap4-thumb text-center alltuchtopdown">
                                    <video
                                        src="/videos/soilledger1.mp4"
                                        className="img-fluid rounded"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: '100%', height: 'auto' }}
                                        controls={false}
                                    />
                                </div>
                            </div> */}
                            <div className="col-lg-12">
                                <div className="section-title mb-0 d-flex flex-column justify-content-center text-center py-5">
                                    {/* <span className="sub-title text-black">FEATURES</span> */}
                                    <h2 className="title style1 text-black">Transform Your Farm Operations</h2>
                                    <p className="mt-20 mb-55 text-black">Our platform revolutionizes agricultural operations through advanced blockchain technology. We enable real-time monitoring of soil conditions, automated smart contracts for supply chain management, and tokenized carbon credit trading. With Soil Ledger, farmers can access detailed analytics, optimize resource usage, and participate in the growing digital agricultural economy.</p>
                                    <div className="d-flex justify-content-center">
                                        <Link href="/contact" className="btn btn btn3 w-50">
                                            Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Modal show={showVideoModal} onHide={handleVideoClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>How Soil Ledger Will Transform Agriculture</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="ratio ratio-16x9">
                        <video
                            src="/videos/soilledger6.mp4"
                            title="Soil Ledger"
                            controls
                            autoPlay
                            playsInline
                            controlsList="nodownload noremoteplayback nopictureinpicture"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default IntroAndRoadmap;