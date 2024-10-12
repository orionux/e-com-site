'use client';
import React, { useState } from 'react';
import styles from '../../../styles/dashboard/dashboard.module.css';

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    contactPerson: '',
    companyName: '',
    contact1: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    province: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.accountContainer}>
      <div className={styles.acDetailsSection}>
        <form>
          <div className={styles.acformGroup}>
            <label htmlFor="address">Address <span>*</span></label>
            <select
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            >
              <option value="" disabled>Select Address</option>
              <option value="address1">No 175, Kanumassagala, Wagawatta, Horana.</option>
              <option value="address2">No 176, Another Place, Some City, Some Country.</option>
              <option value="new">Create New</option>
            </select>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className="w-50">
              <label htmlFor="name">Address Name<span>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="contactPerson">Contact Person<span>*</span></label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.acformGroup}>
            <label htmlFor="companyName">Company Name <span>*</span></label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.acformGroup}>
            <label htmlFor="contact1">Contact 1 <span>*</span></label>
            <input
              type="text"
              id="contact1"
              name="contact1"
              value={formData.contact1}
              onChange={handleChange}
            />
          </div>
          <div className={styles.acformGroupTwo}>
            <div className="w-50">
              <label htmlFor="addressLine1">Address Line 1 <span>*</span></label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="addressLine2">Address Line 2 <span>*</span></label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className="w-50">
              <label htmlFor="country">Country <span>*</span></label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="province">Province <span>*</span></label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className="w-50">
              <label htmlFor="city">City <span>*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="postalCode">Postal Code <span>*</span></label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" className={styles.updateButton}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
