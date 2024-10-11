"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  email: string | null;
  customerName: string | null;
  customerId: number | null;
  setUserDetails: (email: string | null, name: string | null, customerId: number | null) => void;
  clearUserDetails: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [customerId, setCustomerId] = useState<number | null>(null);

  const setUserDetails = (email: string | null, name: string | null, customerId: number | null) => {
    console.log("Setting user details:", { email, name, customerId });
    setEmail(email);
    setCustomerName(name);
    setCustomerId(customerId);
  };

  const clearUserDetails = () => {
    setEmail(null);
    setCustomerName(null);
    setCustomerId(null);
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
