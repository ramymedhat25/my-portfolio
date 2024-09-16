
import React from 'react';
import styles from '../styles/Contact.module.css';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <h3>GET IN TOUCH</h3>
        <p><a href="mailto:ramy@gmail.com">ramy@gmail.com</a></p>
        <p><a href="tel:717-555-1234">717-555-1234</a></p>
      </div>
      <button className={styles.contactButton}>CONTACT ME</button>
      <div className={styles.socialLinks}>
        <a href="https://linkedin.com/in/ramymedhat25" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href="https://facebook.com/ramymedhat25" aria-label="Facebook"><FacebookIcon /></a>
        <a href="https://twitter.com/ramymedhat6" aria-label="Twitter"><TwitterIcon /></a>
      </div>
      <p className={styles.copyRight}>Copyright © 2019 KR</p>
    </div>
  );
};

export default Contact;
