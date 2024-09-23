import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import styles from './Header.module.scss';
import BaseButton from '../BaseButton/BaseButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles['header--open'] : ''}`}>
      <div className={`container ${styles['header-line']}`}>
        <h1 className={styles.logo}>Finesweet</h1>
        <nav className={`${styles.header__nav} ${isMenuOpen ? styles['header__nav--open'] : ''}`}>
          <Link to="/" className={styles.header__nav__point}>Home</Link>
          <Link to="/blog" className={styles.header__nav__point}>Blog</Link>
          <Link to="/about-us" className={styles.header__nav__point}>About Us</Link>
          <Link to="/contact-us" className={styles.header__nav__point}>Contact us</Link>
          <BaseButton textInButton='Subscribe' color='white' />
        </nav>
        <div onClick={handleMenuOpen} className={styles['burger-menu']} id="burger-menu">
          <span className={styles['burger-bar']}></span>
          <span className={styles['burger-bar']}></span>
          <span className={styles['burger-bar']}></span>
        </div>
      </div>
    </header>
  );
}
