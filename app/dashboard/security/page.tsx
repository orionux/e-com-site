"use client";
import React, { useEffect, useState } from "react";

import styles from "../../../styles/dashboard/dashboard.module.css";
import { useUser } from "@/context/UserContext";
import { apiUrl, getTokenFromCookies } from "@/app/api/apiServices";

const Security = () => {
  const { email, customerName, customerId } = useUser();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [customerID, setCustomerId] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('id') || '';
    setCustomerId(storedEmail);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validatePasswords = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirm password do not match!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePasswords()) return;

    const token = getTokenFromCookies();
    if (!token) {
      alert('No token found!');
      return;
    }

    try {
      const formDataObj = new FormData();
      formDataObj.append('current_password', formData.currentPassword);
      formDataObj.append('password', formData.newPassword);
      formDataObj.append('user_id', customerID); 

      const response = await fetch(`${apiUrl}/change-password`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formDataObj, 
      });

      const result = await response.json();
      if (response.ok) {
        alert('Password updated successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('There was an error changing your password.');
    }
  };

  return (
    <div className={styles.securityContainer}>
      <div className={styles.userDetailsSection}>
        <h2>User Details</h2>
        <p className={styles.description}>Name: {customerName}</p>
        <p className={styles.description}>Email: {email}</p>
      </div>

      <div className={styles.passwordSection}>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="currentPassword">
              Current Password <span>*</span>
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword">
              New Password <span>*</span>
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">
              Confirm Password <span>*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className={styles.saveBottonSec}>
            <button type="submit" className={styles.saveButton}>
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
