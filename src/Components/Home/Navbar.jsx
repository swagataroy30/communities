import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={`${styles['app__header']}`}>
      <nav>
        <h1 className={styles.logo}>Logo</h1>
        <ul className={`${styles['nav__links']}`}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Features</a>
          </li>
          <li>
            <a href='/'>About Us</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
