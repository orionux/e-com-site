import React from 'react'
import styles from '../../styles/dashboard/dashboard.module.css';
import Image from 'next/image';

const DashboardView = () => {
  return (
    <div className={styles.dashboardPage}>
      <div className={styles.welcomeContainer}>
        <h3 className={styles.welcomeText}>Welcome!</h3>
        <h1 className={styles.userName}>Dilshan Athukorala</h1>
        <p className={styles.description}>
          From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      </div>
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
  )
}

export default DashboardView
