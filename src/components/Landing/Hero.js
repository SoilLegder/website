/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Hero = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [windowHeight, setWindowHeight] = useState('100vh');
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const updateHeight = () => {
            setWindowHeight(`${window.innerHeight}px`);
        };
        
        // Set initial height
        updateHeight();
        
        // Update height on resize
        window.addEventListener('resize', updateHeight);
        
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const handleVideoClose = () => setShowVideoModal(false);
    const handleVideoShow = () => setShowVideoModal(true);

    return (
        <div 
            className="hero-wrapper hero-1 pt-lg-6 p-lg-5" 
            style={{ 
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background video for large screens */}
            <div className="hero-bg-video m-0 p-0 d-none d-lg-block" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                {!isVideoLoaded && (
                    <img 
                        src="/SLCircuit.jpg" 
                        alt="Loading video..." 
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            zIndex: -1
                        }}
                    />
                )}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="video-background m-0 p-0"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: -1
                    }}
                    onLoadedData={() => setIsVideoLoaded(true)}
                >
                    <source src="/videos/soilledger6.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="container-fluid m-0 p-0 d-lg-none">
                <div className="hero-style1 py-0 px-0">
                    <div className="row flex-row-reverse py-2">
                        {/* Video thumbnail for small screens */}
                        <div className="col-lg-3 d-lg-none">
                            <div className="hero-thumb1 alltouchtopdown mb-5 justify-content-center">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="img-fluid rounded shadow-lg "
                                    style={{
                                        maxWidth: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        // transform: 'perspective(1000px) rotateY(-5deg)',
                                        transition: 'transform 0.3s ease-in-out'
                                    }}
                                >
                                    <source src="https://res.cloudinary.com/dagq1id2g/video/upload/v1739104262/d18l3hkswvbzpr5i68gu.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-9 d-flex flex-column justify-content-center">
                            <h1 className="hero-title fs-4">Empowering Sustainable Agriculture Through Blockchain Technology</h1>
                            <p className="hero-description text-light text-muted">
                                Soil Ledger is a blockchain-based platform dedicated to revolutionizing agricultural practices through decentralized technology and real-time data tracking.
                            </p>
                            <div className="d-flex flex-column gap-3">
                                <Button 
                                    variant="secondary"
                                    onClick={handleVideoShow}
                                    className="btn btn2 text-center"
                                >
                                    Learn More ...
                                </Button>
                                <Link href="/contact" className="btn btn2 text-center">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal 
                show={showVideoModal} 
                onHide={handleVideoClose} 
                size="xl" 
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>How Soil Ledger Transforms Agriculture</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="ratio ratio-16x9">
                        <video
                            src="/videos/soilledger5.mp4"
                            title="Soil Ledger"
                            autoPlay
                            playsInline
                            controlsList="nodownload"
                            controls
                            disablePictureInPicture
                            disableRemotePlayback
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Hero;
