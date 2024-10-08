import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import styles from './Header.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact-us', label: 'Contact us' }
  ];

  return (
    <header className={clsx(styles.header, { [styles['header--open']]: isMenuOpen })}>
      <div className={clsx('container', styles['header-line'])}>
        <h1 className={styles.logo}>Finesweet</h1>
        <nav className={clsx(styles.header__nav, { [styles['header__nav--open']]: isMenuOpen })}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.header__nav__point}>
              {label}
            </Link>
          ))}
          <Button colorScheme='white'>
            Subscribe
          </Button>
        </nav>
        <div onClick={handleMenuToggle} className={styles['burger-menu']} aria-label="Toggle menu">
          <span className={styles['burger-bar']}></span>
          <span className={styles['burger-bar']}></span>
          <span className={styles['burger-bar']}></span>
        </div>
      </div>
    </header>
  );
}
