'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineClose, AiOutlineExclamationCircle, AiOutlineMenu } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";

import Navbar from '../../Components/NavBar'; 
import Footer from '../../Components/Footer';
import styles from '../../styles/dashboard/dashboard.module.css'; 

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); 
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  return (
    <div>
      <Navbar />

      <div className={styles.mobileMenuButton}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      
      <div className={styles.dashboardContainer}>
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
          <nav>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${pathname === '/dashboard' ? styles.active : ''}`}>
                <Link href="/dashboard">
                  <LuLayoutDashboard  className={styles.icon} />
                  Dashboard
                </Link>
              </li>
              <li className={`${styles.navItem} ${pathname === '/dashboard/orders' ? styles.active : ''}`}>
                <Link href="/dashboard/orders">
                  <RiShoppingBagLine  className={styles.icon} />
                  Orders
                </Link>
              </li>
              <li className={`${styles.navItem} ${pathname === '/dashboard/security' ? styles.active : ''}`}>
                <Link href="/dashboard/security">
                  <HiOutlineUser  className={styles.icon} />
                  Security
                </Link>
              </li>
              <li className={`${styles.navItem} ${pathname === '/dashboard/accountdetails' ? styles.active : ''}`}>
                <Link href="/dashboard/accountdetails">
                  <BsChatLeft    className={styles.icon} />
                  Account Details
                </Link>
              </li>
             
            </ul>
          </nav>
        </aside>

        <main className={styles.content}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
