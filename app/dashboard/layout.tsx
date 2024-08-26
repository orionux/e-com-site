'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";

import Navbar from '../../Components/NavBar'; // Import Navbar
import Footer from '../../Components/Footer'; // Import Footer
import styles from '../../styles/dashboard/dashboard.module.css'; // Import the styles

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current route

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      
      <div className={styles.dashboardContainer}>
        <aside className={styles.sidebar}>
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
              <li className={`${styles.navItem} ${pathname === '/dashboard/account' ? styles.active : ''}`}>
                <Link href="/dashboard/account">
                  <HiOutlineUser  className={styles.icon} />
                  Account
                </Link>
              </li>
              <li className={`${styles.navItem} ${pathname === '/dashboard/chat' ? styles.active : ''}`}>
                <Link href="/dashboard/chat">
                  <BsChatLeft    className={styles.icon} />
                  Chats
                </Link>
              </li>
              <li className={`${styles.navItem} ${pathname === '/dashboard/disputes' ? styles.active : ''}`}>
                <Link href="/dashboard/disputes">
                  <AiOutlineExclamationCircle  className={styles.icon} />
                  Disputes
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className={styles.content}>
          {children}
        </main>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
