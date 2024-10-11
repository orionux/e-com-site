"use client";

import React, { useState } from 'react';
import styles from '../../styles/dashboard/dashboard.module.css';
import { useUser } from '@/context/UserContext';

const DashboardView = () => {
  const {  customerName } = useUser();

  const handleExplorerClick = () => {
    window.location.href = '/product';
  };

  console.log({  customerName });

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.welcomeContainer}>
        <h3 className={styles.welcomeText}>Welcome!</h3>
        <h1 className={styles.userName}>{customerName || "Guest"}</h1>
        <p className={styles.description}>
          From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.explorerButton} onClick={handleExplorerClick}>
          Explore More
        </button>
      </div>
      {/* Uncomment this section to show the welcome image */}
      {/* 
      <div className={styles.imageContainer}>
        <Image
          src="/assets/img/dashboard/welcome.png"
          alt="Welcome Image"
          width={405}
          height={466}
        />
      </div>
      */}
    </div>
  );
};

export default DashboardView;
