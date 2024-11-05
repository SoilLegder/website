/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Layout from '../components/Layouts/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  return (
    <Layout pageTitle="Soil Ledger - Web3 Powered Agriculture">
      <Navbar />
      
      <motion.section 
        className="main-slider mt-5" 
        style={{ position: 'relative !important' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="video-background vh-100">
          <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="../../../../videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
      </motion.section>
      
      <section className="about-two">
            <motion.img 
              src="../../images/loader.png" 
              alt="" 
              className="about-two__bg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <motion.div 
                          className="about-two__images"
                          whileHover={hoverScale}
                        >
                            <img src="../../images/smartAgric.webp" style={{objectFit: 'cover', width: '100%', height: '550px'}} alt="" />
                            <motion.img 
                              src="../../images/farmdrone2.jpeg"  
                              style={{objectFit: 'cover', width: '120px', height: '120px'}}   
                              alt=""
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                        </motion.div>
                    </div>
                    <motion.div 
                      className="col-lg-6"
                      {...fadeIn}
                    >
                        <div className="about-two__content">
                            <motion.div 
                              className="block-title"
                              whileHover={{ scale: 1.02 }}
                            >
                                <div className="block-title__image" style={{width: '100px', height: '100px'}}></div>
                                <p>About Us</p>
                                <h3>Innovative Solutions for Sustainable Agriculture</h3>
                            </motion.div>
                            <motion.div 
                              className="about-two__summery"
                              whileHover={{ x: 10 }}
                            >
                                <p className="mt-3 text-justify text-light">At Soil Ledger, we leverage cutting-edge technology to provide farmers with real-time data and insights, enhancing productivity and sustainability in agriculture.</p>
                            </motion.div>
                            <div className="row">
                                <div className="col-md-6">
                                    <motion.ul 
                                      className="list-unstyled about-two__list"
                                      variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                          opacity: 1,
                                          transition: {
                                            staggerChildren: 0.2
                                          }
                                        }
                                      }}
                                      initial="hidden"
                                      animate="show"
                                    >
                                        <motion.li
                                          whileHover={{ x: 10, color: "#49a760" }}
                                        >
                                            <i className="fa fa-check-circle"></i>
                                            Advanced IoT Integration
                                        </motion.li>
                                        <motion.li
                                          whileHover={{ x: 10, color: "#49a760" }}
                                        >
                                            <i className="fa fa-check-circle"></i>
                                            Data-Driven Decision Making
                                        </motion.li>
                                        <motion.li
                                          whileHover={{ x: 10, color: "#49a760" }}
                                        >
                                            <i className="fa fa-check-circle"></i>
                                            Commitment to Sustainability
                                        </motion.li>
                                    </motion.ul>
                                    <motion.button 
                                      onClick={() => setShowModal(true)} 
                                      className="thm-btn btn btn-primary mt-3"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                                <div className="col-md-6">
                                    <motion.div 
                                      className="about-two__progress"
                                      whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="about-two__progress-box">
                                            <div className="circle-progress" data-options='{ "value": 0.90,"thickness": 2,"emptyFill": "#f6f5f2","lineCap": "square", "size": 118, "fill": { "color": "#49a760" } }'>
                                                <span>90%</span>
                                            </div>
                                        </div>
                                        <div className="about-two__progress-content">
                                            <h3>Customer Satisfaction</h3>
                                        </div>
                                    </motion.div>
                                    <motion.div 
                                      className="about-two__progress"
                                      whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="about-two__progress-box">
                                            <div className="circle-progress" data-options='{ "value": 0.75,"thickness": 2,"emptyFill": "#f6f5f2","lineCap": "square", "size": 118, "fill": { "color": "#49a760" } }'>
                                                <span>75%</span>
                                            </div>
                                        </div>
                                        <div className="about-two__progress-content">
                                            <h3>Innovation in Agriculture</h3>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {showModal && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal show d-block" 
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  zIndex: 9999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.div 
                  className="modal-dialog"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  style={{width: '100%', height: '100%', margin: 0, maxWidth: 'none'}}
                >
                  <div className="modal-content" style={{height: '100vh', border: 'none', borderRadius: 0}}>
                    <div className="modal-header pe-5" style={{padding: '1rem'}}>
                      <h5 className="modal-title">Soil Ledger Presentation</h5>
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        type="button" 
                        className="btn-close" 
                        onClick={() => setShowModal(false)}
                      >
                        <i className="fa fa-times"></i>
                      </motion.button>
                    </div>
                    <div className="modal-body p-0" style={{height: 'calc(100vh - 60px)'}}>
                      <iframe 
                        src="https://docs.google.com/presentation/d/1ZecQoGgGl0oGSPEjFOje-pZBVa2jTmsAJZNU1xpbIsQ/embed?start=false&loop=false&delayms=3000"
                        frameBorder="0"
                        style={{width: '100%', height: '100%'}}
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
        </section>

        <motion.section 
          className="service-one" 
          style={{backgroundColor: '#dad7cd'}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container" style={{backgroundColor: '#dad7cd'}}>
            <motion.div 
              className="block-title text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="block-title__image"></div>
              <p>Welcome to Soil Ledger</p>
              <h3>Empowering Sustainable Agriculture</h3>
            </motion.div>
            <div className="row">
              <motion.div 
                className="col-md-12 col-lg-6 wow fadeInUp" 
                data-wow-duration="1500ms"
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-one__box">
                  <img src="../../../../images/IoT2.jpg" alt="" />
                  <div className="service-one__box-content p-4">
                    <h3>Decentralized Solutions</h3>
                    <p>Utilizing Web3 technology, we deliver secure, real-time soil and crop health data for precision agriculture.</p>
                    <motion.a 
                      href="#" 
                      className="thm-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Discover More
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="col-md-12 col-lg-6 wow fadeInUp" 
                data-wow-duration="1500ms"
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-one__box">
                  <img src="../../../../images/Smart-Greenhouses.jpg" alt="" />
                  <div className="service-one__box-content p-4">
                    <h3>IoT & Blockchain Integration</h3>
                    <p>Our platform combines IoT sensors, drone technology, and blockchain to optimize resource use and enhance productivity.</p>
                    <motion.a 
                      href="#" 
                      className="thm-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Learn More
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="projects-one" 
          style={{backgroundColor: '#dad7cd'}}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.div 
              className="block-title text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="block-title__image"></div>
              <p>Our Solutions</p>
              <h3>Agricultural Innovation Platform</h3>
            </motion.div>
            <div className="row">
              <motion.div 
                className="col-md-6 col-lg-4"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="projects-one__single">
                  <img src="../../../../images/IoT1.jpg" alt="Soil Monitoring" />
                  <div className="projects-one__content">
                    <h3>Soil Health Monitoring</h3>
                    <motion.a 
                      href="#" 
                      className="projects-one__button"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <i className="agrikon-icon-right-arrow"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="col-md-6 col-lg-4"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="projects-one__single">
                  <img src="../../../../images/farmdrone.webp" alt="Drone Technology" />
                  <div className="projects-one__content">
                    <h3>Drone Surveillance</h3>
                    <motion.a 
                      href="#" 
                      className="projects-one__button"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <i className="agrikon-icon-right-arrow"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="col-md-6 col-lg-4"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="projects-one__single">
                  <img src="../../../../images/iotblockchain1.jpg" alt="Blockchain Integration" />
                  <div className="projects-one__content">
                    <h3>Blockchain Integration</h3>
                    <motion.a 
                      href="#" 
                      className="projects-one__button"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <i className="agrikon-icon-right-arrow"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="call-to-action jarallax" 
          data-jarallax data-speed="0.3" 
          data-imgPosition="-80% 50%"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img 
            className="call-to-action__bg jarallax-img" 
            src="../../../../images/smart-farming-bg.jpg" 
            alt="Smart Farming Background" 
          />
          <div className="container">
            <motion.div 
              className="call-to-action__content"
              whileHover={{ scale: 1.05 }}
            >
              <i className="call-to-action__icon agrikon-icon-agriculture-2"></i>
              <h3>Leading the Future of Agriculture with 
                Blockchain and IoT Technology</h3>
            </motion.div>
            <div className="call-to-action__button">
              <motion.a 
                href="/contact" 
                className="thm-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </motion.section>

    </Layout>
  );
}
