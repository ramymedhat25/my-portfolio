import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'WEB DESIGN' },
    { title: 'MOBILE DESIGN' },
    { title: 'LOGO DESIGN' },
    { title: 'WEB APPLICATION DEVELOPMENT' },
    { title: 'MOBILE APPLICATION DEVELOPMENT' },
    { title: 'PWA DEVELOPMENT' }
  ];

  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioGrid}>
        {portfolioItems.map((item, index) => (
          <div key={index} className={styles.portfolioItem}>
            <h3>{item.title}</h3>
            <div className={styles.itemUnderline}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
