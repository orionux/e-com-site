"use client";

import React, { useEffect, useState } from "react";
// import a from 'next/a';
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { BsChatLeft } from "react-icons/bs";
import {
  AiOutlineClose,
  AiOutlineExclamationCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";

import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import styles from "../../styles/dashboard/dashboard.module.css";
import Script from "next/script";
import Preloader from "@/Components/Preloader";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isLoading, isLoggedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return <Preloader />;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <Navbar />

      <div className={`${styles.dashboardContainer} layout-margin`}>
        <div className={styles.mobileMenuButton}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <aside
          className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        >
          <nav>
            <ul className={styles.navList}>
              <li
                className={`${styles.navItem} ${
                  pathname === "/dashboard" ? styles.active : ""
                }`}
              >
                <a href="/dashboard">
                  <LuLayoutDashboard className={styles.icon} />
                  Dashboard
                </a>
              </li>
              <li
                className={`${styles.navItem} ${
                  pathname === "/dashboard/orders" ? styles.active : ""
                }`}
              >
                <a href="/dashboard/orders">
                  <RiShoppingBagLine className={styles.icon} />
                  Orders
                </a>
              </li>
              <li
                className={`${styles.navItem} ${
                  pathname === "/dashboard/security" ? styles.active : ""
                }`}
              >
                <a href="/dashboard/security">
                  <HiOutlineUser className={styles.icon} />
                  Security
                </a>
              </li>
              {/* <li
                className={`${styles.navItem} ${
                  pathname === "/dashboard/accountdetails" ? styles.active : ""
                }`}
              >
                <a href="/dashboard/accountdetails">
                  <BsChatLeft className={styles.icon} />
                  Account Details
                </a>
              </li> */}
            </ul>
          </nav>
        </aside>

        <main className={styles.content}>{children}</main>
      </div>
       <Footer />
    </div>
  );
};

export default DashboardLayout;
