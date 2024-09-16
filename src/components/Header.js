import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Ramy Medhat</h1>
          <p>Web Developer & Designer</p>
          <button>Contact Me</button>
        </div>
      </header>
    );
  };
  
  export default Header;

