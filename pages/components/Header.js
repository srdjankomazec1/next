
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Header.module.css'
// import { BrowserRouter as Router,Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';



const Header = () => {
  const [navSize, setNavSize] = useState("5rem");
  const [navColor, setNavColor] = useState("transparent");
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 5 ? setNavColor("#4978ff") : setNavColor("transparent");
    window.scrollY > 5 ? setNavSize("5rem") : setNavSize("10rem");
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      id="header"
      className={styles.header}
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <a href="#" className={styles.logo}>
        Logo
      </a>

      {/* Navigation links for larger screens */}
      <ul className={styles.nav}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Burger menu for smaller screens */}
      <div
        className={styles.burgerMenu}
        onClick={toggleBurgerMenu}
       
      >
        <div className={`${styles.bar} ${isBurgerMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isBurgerMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isBurgerMenuOpen ? styles.open : ''}`}></div>
      </div>

      {/* Links for burger menu */}
      <div className={`${styles.burgerLinks} ${isBurgerMenuOpen ? styles.show : ''}`}>
        
        <Router> 
          {/* link za home ne radi!!!!???? */}
        <Link to='#'  smooth={true} duration={500}  onClick={closeBurgerMenu}>
          Home
        </Link>
        <ScrollLink to="about" smooth={true} duration={500} onClick={closeBurgerMenu}>
         About
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} onClick={closeBurgerMenu}>
          Services
        </ScrollLink>
        <ScrollLink to="portfolio" smooth={true} duration={500} onClick={closeBurgerMenu}>
          Portfolio
        </ScrollLink>
        <ScrollLink to="team" smooth={true} duration={500} onClick={closeBurgerMenu}>
          Team
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} onClick={closeBurgerMenu}>
          Contact
        </ScrollLink>
        </Router>
      </div>
    </header>
  );
};




export default Header;
