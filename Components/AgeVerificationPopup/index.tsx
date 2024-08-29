'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../styles/ageVerification/ageverification.module.css';

const AgeVerificationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified');
    if (!isVerified) {
      setShowPopup(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem('ageVerified', 'true');
    setShowPopup(false);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!showPopup) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <img src="/assets/img/svg/ferolislogo.svg" alt="Ferolis" className={styles.logo} />
        <h2>Age Verification Required</h2>
        <p>This website contains information about tobacco-related products, which are intended for adults aged 18 and above (or the legal smoking age in your jurisdiction). By entering this site, you confirm that you are of legal smoking age in your jurisdiction, and you consent to view information related to tobacco products.</p>
        <p>Please note that this website is intended for adults only. If you are not of legal smoking age, please exit this site now.</p>
        <div className={styles.buttons}>
          <button onClick={handleEnter} className={styles.enterBtn}>I am 18 or Older - Enter</button>
          <button onClick={handleExit} className={styles.exitBtn}>I am Under 18 - EXIT</button>
        </div>
        <p className={styles.popupFooter}>Ferolis.com 2024</p>
      </div>
    </div>
  );
};

export default AgeVerificationPopup;
