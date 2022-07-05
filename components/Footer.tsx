import styles from '../styles/Home.module.css';
import React from 'react';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="mx-6 w-full justify-between flex flex-row">
        <div className={styles.footerBrand}>Harfang</div>
        <div className={styles.footerLinks}>
          <div className="grid grid-cols-2" style={{ width: '250px', height: '120px' }}>
            <p className={styles.footerLink}>Whitepaper</p>
            <p className={styles.footerLink}>Help</p>
            <p className={styles.footerLink}>Privacy Policy</p>
            <p className={styles.footerLink}>Press</p>
            <p className={styles.footerLink}>CGU</p>
            <p className={styles.footerLink}>Contact</p>
          </div>
        </div>
        <div className={styles.footerSocials}>
          <img
            src="/image/instagram.svg"
            className="w-4 cursor-pointer"
            onClick={() => window.open('https://www.instagram.com', '_blank')}
          />
          <img
            src="/image/discord.svg"
            className="w-4 cursor-pointer mx-6"
            onClick={() => window.open('https://www.discord.com/channels/989199518329364551', '_blank')}
          />
          <img
            src="/image/twitter.svg"
            className="w-4 cursor-pointer"
            onClick={() => window.open('https://www.twitter.com', '_blank')}
          />
        </div>
      </div>
    </div>
  );
}
