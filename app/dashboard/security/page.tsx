"use client";import React, { useEffect, useState } from 'react';

import styles from '../../../styles/dashboard/dashboard.module.css';

const Security = () => {

  const [customerEmail, setCustomerEmail] = useState(String);
  const [customerName, setCustomerName] = useState(String);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomerEmail = localStorage.getItem('email');
      const storedCustomerName = localStorage.getItem('customer_name');
      setCustomerEmail(storedCustomerEmail || '');
      setCustomerName(storedCustomerName || '');
    }
  }, []); 


  return (
    <div className={styles.securityContainer}>
      <div className={styles.userDetailsSection}>
        <h2>User Details</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name <span>*</span></label>
            <input type="text" id="name" name="name" value={customerName} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Email <span>*</span></label>
            <input type="email" id="email" name="email" value={customerEmail} />
          </div>
          <div className={styles.saveBottonSec}>
            <button type="button" className={styles.saveButton}>Save Change</button>
          </div>
        </form>
      </div>

      <div className={styles.passwordSection}>
        <h2>Change Password</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="currentPassword">Current Password <span>*</span></label>
            <input type="password" id="currentPassword" name="currentPassword" placeholder="Password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword">New Password <span>*</span></label>
            <input type="password" id="newPassword" name="newPassword" placeholder="New Password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <div className={styles.saveBottonSec}>
            <button type="submit" className={styles.saveButton}>Save Change</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
