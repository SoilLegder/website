/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from '../Preloader';
// import '@/styles/theme.css';

const Layout = ({ children, pageTitle }) => {
    const defaultTitle = 'Soil Ledger - Empowering sustainable agriculture through IoT and blockchain technologies';
    const defaultDescription = 'Soil Ledger provides IoT, Drones & blockchain-powered solutions for precision agriculture. Track farm data, manage supply chains, and access smart contracts for modern farming operations.';

    return (
        <>
            <Head>
                <title>{pageTitle || defaultTitle}</title>
                <meta name="description" content={defaultDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={pageTitle || defaultTitle} />
                <meta property="og:description" content={defaultDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/loader.jpg" />
                <meta name="twitter:card" content="/logo.jpg" />
                <meta name="twitter:title" content={pageTitle || defaultTitle} />
                <meta name="twitter:description" content={defaultDescription} />
                <meta name="keywords" content="blockchain agriculture, farm management, smart contracts farming, agricultural data tracking, supply chain agriculture" />
                <link rel="canonical" href="https://soilledger.com" />
                
                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/5.png" color="#12715b" />
                <link rel="shortcut icon" href="/5.png" />
                <meta name="msapplication-TileColor" content="#12715b" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="theme-color" content="#12715b" />

                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <div className="home-purple" id="html" style={{ minHeight: '100vh' }}>
             <Preloader />


                <Navbar />
                <main>{children}</main>
                <Footer />
                {/* Scroll-top */}
                <button className="scroll-top scroll-to-target" data-target="html" aria-label="Scroll to top">
                    <i className="fas fa-angle-up"></i>
                </button> 
            </div>
        </>
    );
};

export default Layout;