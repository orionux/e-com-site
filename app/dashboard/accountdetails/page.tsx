import React from 'react'
import styles from '../../../styles/dashboard/dashboard.module.css';

const AccountDetails = () => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.acDetailsSection}>
        
        <form>
          <div className={styles.acformGroup}>
            <label htmlFor="name">Address <span>*</span></label>
            <select id="address" name="address" required>
              <option value="" disabled selected>Select Address</option>
              <option value="address1">No 175, Kanumassagala, Wagawatta, Horana.</option>
              <option value="address2">No 176, Another Place, Some City, Some Country.</option>
              <option value="new">Create New</option>
            </select>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className='w-50'>
              <label htmlFor="name">Address Name<span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
            <div className='w-50'>
              <label htmlFor="name">Contact Person<span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
          </div>
          <div className={styles.acformGroup}>
            <label htmlFor="name">Company Name <span>*</span></label>
            <input type="text" id="name" name="name" value=""  />
          </div>
          <div className={styles.acformGroup}>
            <label htmlFor="name">Contact 1 <span>*</span></label>
            <input type="text" id="name" name="name" value=""  />
          </div>
          <div className={styles.acformGroupTwo}>
            <div className='w-50'>
              <label htmlFor="name">Address Line 1 <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
            <div className='w-50'>
              <label htmlFor="name">Address Line 2 <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className='w-50'>
              <label htmlFor="name">Country <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
            <div className='w-50'>
              <label htmlFor="name">Province <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
          </div>
          <div className={styles.acformGroupTwo}>
            <div className='w-50'>
              <label htmlFor="name">City <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
            <div className='w-50'>
              <label htmlFor="name">Postal Code <span>*</span></label>
              <input type="text" id="name" name="name" value=""  />
            </div>
          </div>
          <button type="button" className={styles.updateButton}>Update</button>
        </form>
      </div>
    </div>

  )
}

export default AccountDetails
