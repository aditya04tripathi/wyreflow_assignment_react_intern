
import { useEffect, useState } from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleNavbar = (e: React.MouseEvent) => {
        e.stopPropagation();
        setNavbarActive(!navbarActive);
    };

    const toggleDropdown = (e: React.MouseEvent, name: string) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setActiveDropdown(null);
            setNavbarActive(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <header id="header">
            <div className="header-logo">
                <a href="../index.html">
                    <img src="/images/wyreflow-logohigh.png" alt="" />
                </a>
            </div>

            <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
                <div className="hamburger" id="hamburger" onClick={toggleNavbar}>
                    <i className='bx bx-menu'></i>
                </div>

                <ul id="navbar-list-item">
                    <li><a href="../index.html">Home</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'services')}>
                            Services <i className='bx bxs-chevron-down'></i>
                        </a>
                        <div className="dropdown-content services-dropdown" style={{ display: activeDropdown === 'services' ? 'block' : 'none' }}>
                            <div className="dropdown-grid">
                                <a href="../pages-html/artifical.html">Artificial Intelligence</a>
                                <a href="../pages-html/cloud.html">Cloud</a>
                                <a href="../pages-html/consulting.html">Consulting</a>
                                <a href="../pages-html/cybersec.html">Cybersecurity</a>
                                <a href="../pages-html/businessoper.html">Cognitive Business Operations</a>
                                <a href="../pages-html/data.html">Data & Analytics</a>
                                <a href="../pages-html/enterprises.html">Enterprise Solutions</a>
                                <a href="../pages-html/network.html">Network Solutions & Services</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="../pages-html/about.html" style={{ color: 'white' }}>About Us</a></li>
                    <li><a href="../pages-html/career.html">Career</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'industries')}>
                            Industries <i className='bx bxs-chevron-down'></i>
                        </a>
                        <div className="dropdown-content industries-dropdown" style={{ display: activeDropdown === 'industries' ? 'block' : 'none' }}>
                            <div className="dropdown-grid">
                                <a href="../pages-html/e-commerce.html">E-commerce</a>
                                <a href="../pages-html/transport.html">Transportation & Logistics</a>
                                <a href="../pages-html/research.html">Research and Development</a>
                                <a href="../pages-html/healthcare.html">HealthCare</a>
                                <a href="../pages-html/consulting.html">Consulting</a>
                                <a href="../pages-html/software&platforms.html">Software and Platforms</a>
                                <a href="../pages-html/ed-tech.html">Ed-tech/Education</a>
                                <a href="../pages-html/govt.html">Government & Public Services</a>
                                <a href="../pages-html/recrutiment.html">Recruitment</a>
                                <a href="../pages-html/communicaton.html">Communications and Media</a>
                                <a href="./pages-html/high-tech.html">High Tech</a>
                                <a href="../pages-html/banking.html">Banking</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="../pages-html/contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
