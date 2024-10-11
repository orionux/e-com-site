"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  email: string | null;
  customerName: string | null;
  customerId: string | null;
  setUserDetails: (email: string | null, customerName: string | null, customerId: string | null) => void;
  clearUserDetails: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const name = localStorage.getItem('name');
  const customeremail = localStorage.getItem('email');
  const id = localStorage.getItem('id');
  // const parsedUserDetails = storedUserDetails ? JSON.parse(storedUserDetails) : null;

  const [email, setEmail] = useState<string | null>(customeremail || null);
  const [customerName, setCustomerName] = useState<string | null>(name || null);
  const [customerId, setCustomerId] = useState<string | null>(id || null);
  
  const setUserDetails = (email: string | null, customerName: string | null, customerId: string | null) => {
    console.log("Setting user details:", { email, customerName, customerId });
    setEmail(email);
    setCustomerName(customerName);
    setCustomerId(customerId);

    localStorage.setItem('email',  email || '');
    localStorage.setItem('name', customerName || '');
    localStorage.setItem('id', customerId || '');

  };

  const clearUserDetails = () => {
    setEmail(null);
    setCustomerName(null);
    setCustomerId(null);

    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('id');

  };

  return (
    <UserContext.Provider value={{ email, customerName, customerId, setUserDetails, clearUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
