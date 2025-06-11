import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import test from"../assets/list_icon.png"
const NavBar = () => {
    const [active, setActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);    

    useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
    }, []);

    const toggleDarkMode = () => {
    setIsDarkMode(prev => {
        const newMode = !prev;
        document.body.classList.toggle('dark-mode', newMode);
        localStorage.setItem('darkMode', newMode);
        return newMode;
    });
    };

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <nav className="NavBar">
            <div className="SectionContainer">
                <Link activeClass='active' spy={true} smooth={true} offset={-150} duration={500} to='Intro'
                      className="Section">Home</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-58} duration={400} className="Section"
                      to='aboutMe'>About Me</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-120} duration={500} className="Section"
                      to="formationContainer">Formation</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-120} duration={500} className="Section"
                      to="Skills">Skills</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-150} duration={600} className="Section"
                      to="Projects">Projects</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={600} className="Contact"
                      to="ContactContainer">Contact</Link>

                <button onClick={toggleDarkMode} id="toggleBtn">
                {isDarkMode ? 'Mode clair' : 'Mode sombre'}
                </button>

            </div>

            <button onClick={toggleMenu} className="nav__toggler">
                <img src={test} alt="Toggle Menu"/>
            </button>

            {active &&
                <ul className="nav__menu">
                    <li><Link activeClass='active' spy={true} smooth={true} offset={-150} duration={500} to='Intro'
                              className="Section">Home</Link></li>
                    <li><Link activeClass='active' spy={true} smooth={true} offset={-58} duration={400}
                              className="Section" to='aboutMe'>About Me</Link></li>
                    <li><Link activeClass='active' spy={true} smooth={true} offset={-120} duration={500}
                              className="Section" to="formationContainer">Formation</Link></li>
                    <li><Link activeClass='active' spy={true} smooth={true} offset={-120} duration={500}
                              className="Section" to="Skills">Skills</Link></li>
                    <li><Link activeClass='active' spy={true} smooth={true} offset={-150} duration={600}
                              className="Section" to="Projects">Projects</Link></li>
                </ul>
            }
        </nav>
    );
}

export default NavBar;
