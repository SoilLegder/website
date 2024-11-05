/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Soilledger | Decentralized Physical Infrastructure Network (DePIN) for Precision Agriculture" />
        <meta name="description" content="Transform agriculture with blockchain-powered precision farming. Real-time data, smart contracts, and supply chain tracking for modern agricultural operations." />
        <meta name="keywords" content="blockchain agriculture, precision farming, smart contracts, supply chain tracking, agricultural data, DePIN, decentralized agriculture" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Soilledger" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soilledger.com/" />
        <meta property="og:title" content="Soilledger | Decentralized Agriculture Platform" />
        <meta property="og:description" content="Transform agriculture with blockchain-powered precision farming. Real-time data, smart contracts, and supply chain tracking for modern agricultural operations." />
        <meta property="og:image" content="https://soilledger.io/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://soilledger.com/" />
        <meta property="twitter:title" content="Soilledger | Decentralized Agriculture Platform" />
        <meta property="twitter:description" content="Transform agriculture with blockchain-powered precision farming. Real-time data, smart contracts, and supply chain tracking for modern agricultural operations." />
        <meta property="twitter:image" content="https://soilledger.io/images/twitter-image.jpg" />
        
        {/* favicons Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload Critical Assets */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Handlee&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Handlee&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />

        {/* Critical CSS */}
        <link rel="stylesheet" href="../../../../assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../../../assets/css/style.css" />
        
        {/* Non-critical CSS loaded asynchronously */}
        <link rel="stylesheet" href="../../../assets/css/animate.min.css" />
        <link rel="stylesheet" href="../../../assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="../../../assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="../../../assets/css/slick.css" />
        <link rel="stylesheet" href="../../../assets/css/default.css" />
        <link rel="stylesheet" href="../../../assets/css/style.css" />
        <link rel="stylesheet" href="../../../assets/css/responsive.css" />
      </Head>
      <body className="home-purple-gradient">
        <Main />
        <NextScript />

        {/* Deferred loading of non-critical scripts */}
        <script src="../../../assets/js/vendor/jquery-3.6.0.min.js" async></script>
        <script src="../../../assets/js/bootstrap.min.js" async></script>
        <script src="../../../assets/js/jquery.countdown.min.js" async></script>
        <script src="../../../assets/js/jquery.appear.js" async></script>
        <script src="../../../assets/js/slick.min.js" async></script>
        <script src="../../../assets/js/ajax-form.js" async></script>
        <script src="../../../assets/js/jquery.easing.js" async></script>
        <script src="../../../assets/js/imagesloaded.pkgd.min.js" async></script>
        <script src="../../../assets/js/isotope.pkgd.min.js" async></script>
        <script src="../../../assets/js/jquery.magnific-popup.min.js" async></script>
        <script src="../../../assets/js/wow.min.js" async></script>
        <script src="../../../assets/js/main.js" async></script>
      </body>
    </Html>
  );
}
