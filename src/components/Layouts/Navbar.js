/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isClient, setIsClient] = useState(false);
    const currentPath = usePathname(); // Use usePathname to get the current path

    useEffect(() => {
        setIsClient(true); // Set to true when component mounts
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server side
    }

    return (
        <header id="header" className="header-layout1">
            <div id="sticky-header" className="menu-area position-relative bg-light">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-wrap d-flex justify-content-between align-items-center">
                                <div className="logo ps-2">
                                    <Link href="/">
                                        <img src="/11.png" style={{ height: '75px', width: '100%' }} alt="Soil Ledger" />
                                    </Link>
                                </div>
                                <nav className="menu-nav d-flex align-items-end justify-content-end ms-auto">
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className={`menu-item ${currentPath === '/' ? 'active' : ''}`}>
                                                <Link className="section-link" href="/">Home</Link>
                                            </li>
                                            <li className={currentPath === '/about' ? 'active' : ''}>
                                                <Link className="section-link" href="/about">About Us</Link>
                                            </li>
                                            <li className={currentPath === '/#feature' ? 'active' : ''}>
                                                <Link className="section-link" href="/#feature">Features</Link>
                                            </li>
                                            <li className={currentPath === '/#roadMap' ? 'active' : ''}>
                                                <Link className="section-link" href="/#roadMap">RoadMap</Link>
                                            </li>
                                            <li className={`menu-item-has- ${currentPath.startsWith('/services') ? 'active' : ''}`}>
                                                <Link className="section-link" href="/services">Services</Link>
                                                {/* <ul className="sub-menu">
                                                    <li className={currentPath === '/services/precision-agriculture' ? 'active' : ''}>
                                                        <Link href="/services/precision-agriculture">Precision Agriculture</Link>
                                                    </li>
                                                    <li className={currentPath === '/services/real-time-data' ? 'active' : ''}>
                                                        <Link href="/services/real-time-data">Real-Time Data</Link>
                                                    </li>
                                                    <li className={currentPath === '/services/stakeholder-engagement' ? 'active' : ''}>
                                                        <Link href="/services/stakeholder-engagement">Stakeholder Engagement</Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className={currentPath === '/contact' ? 'active d-none' : ' d-none'}>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-nav-toggler">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="close-btn">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="/logo.png" style={{ height: '35px' }} alt="Logo" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="menu-backdrop"></div>
        </header>
    );
};

export default Navbar;