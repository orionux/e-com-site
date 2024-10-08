"use client";

import React, { useEffect, useState } from 'react';
import styles from '../../styles/dashboard/dashboard.module.css';
import Image from 'next/image';

const DashboardView = () => {
  const [customerName, setCustomerName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomerName = localStorage.getItem('customer_name');
      setCustomerName(storedCustomerName);
    }
  }, []); // Use an empty dependency array to avoid infinite loop

  const handleExplorerClick = () => {
    window.location.href = "/product"; // Redirect to the dashboard page
  };

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.welcomeContainer}>
        <h3 className={styles.welcomeText}>Welcome!</h3>
        <h1 className={styles.userName}>{customerName}</h1>
        <p className={styles.description}>
          From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      </div>
      {/* Explorer button */}
      <div className={styles.buttonContainer}>
        <button className={styles.explorerButton} onClick={handleExplorerClick}>
          Explorer
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
