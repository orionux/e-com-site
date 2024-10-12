"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/dashboard/dashboard.module.css";
import {
  apiUrl,
  getCustomerDetails,
  getCustomerProductData,
  getTokenFromCookies,
} from "@/app/api/apiServices";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    contactPerson: "",
    companyName: "",
    contact1: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
  });
  const [apiError, setApiError] = useState("");
  const storedCustomerId =
    typeof window !== "undefined" ? localStorage.getItem("id") : null;
  const [customerId, setCustomerId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCustomerEmail = localStorage.getItem("id");
      setCustomerId(storedCustomerEmail || "");
    }
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchCustomerData = async () => {
      const token = getTokenFromCookies();
      if (storedCustomerId && token) {
        try {
          const details = await getCustomerDetails(storedCustomerId, token);

          if (details.status === "success") {
            // const customerDetails = details.user.customer_details;
            // console.log("data : ",customerDetails)
            setFormData({
              address: details.user.customer_details.address || "",
              name: details.user.customer_details.customer_name || "",
              contactPerson: details.user.customer_details.phone || "",
              companyName: details.user.customer_details.company_name || "",
              contact1: details.user.customer_details.phone || "",
              addressLine1: details.user.customer_details.address || "",
              addressLine2: "",
              country: details.user.customer_details.country || "",
              province: "",
              city: "",
              postalCode: "",
            });
          }
        } catch (error) {
          setApiError("Failed to fetch customer details. Please try again.");
          console.error("Error fetching customer data:", error);
        }
      }
    };
    fetchCustomerData();
  }, [storedCustomerId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = getTokenFromCookies();
    if (!token) {
      alert("No token found!");
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("address", formData.address);
    formDataObj.append("name", formData.name);
    formDataObj.append("contactPerson", formData.contactPerson);
    formDataObj.append("companyName", formData.companyName);
    formDataObj.append("contact1", formData.contact1);
    formDataObj.append("addressLine1", formData.addressLine1);
    formDataObj.append("addressLine2", formData.addressLine2);
    formDataObj.append("country", formData.country);
    formDataObj.append("province", formData.province);
    formDataObj.append("city", formData.city);
    formDataObj.append("postalCode", formData.postalCode);

    try {
      const response = await fetch(`${apiUrl}/account-details/${customerId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        alert("Account details updated successfully!");
      } else {
        alert(`Update Failed`);
      }
    } catch (error) {
      console.error("Error updating account:", error);
      alert("There was an error updating your account.");
    }
  };

  return (
    <div className={styles.accountContainer}>
      <div className={styles.acDetailsSection}>
        <form onSubmit={handleSubmit}>
          <div className={styles.acformGroup}>
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            {/* <select
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
            </select> */}
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.acformGroupTwo}>
            <div className="w-50">
              <label htmlFor="name">
                Address Name<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="contactPerson">
                Contact Person<span>*</span>
              </label>
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
            <label htmlFor="companyName">
              Company Name <span>*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.acformGroup}>
            <label htmlFor="contact1">
              Contact 1 <span>*</span>
            </label>
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
              <label htmlFor="addressLine1">
                Address Line 1 <span>*</span>
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="addressLine2">
                Address Line 2 <span>*</span>
              </label>
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
              <label htmlFor="country">
                Country <span>*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="province">
                Province <span>*</span>
              </label>
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
              <label htmlFor="city">
                City <span>*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="w-50">
              <label htmlFor="postalCode">
                Postal Code <span>*</span>
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" className={styles.updateButton}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
