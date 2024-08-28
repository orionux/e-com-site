import React from 'react';
import styles from '../../../styles/dashboard/dashboard.module.css';

const Security = () => {
  return (
    <div className={styles.securityContainer}>
      <div className={styles.userDetailsSection}>
        <h2>User Details</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name <span>*</span></label>
            <input type="text" id="name" name="name" value="Dilshan Athukorala" />
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
