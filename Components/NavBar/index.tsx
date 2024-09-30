"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from "react";
import Script from "next/script";

import styles from '../../styles/NavBar.module.css';
import OrderIcon from '../svg/OrderIcon';
import ProductIcon from '../svg/ProductIcon';
import FavIcon from '../svg/FavIcon';

type IconType = 'order' | 'product' | 'fav';

const NavBar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [activeIcon, setActiveIcon] = useState<IconType | null>(null);

  useEffect(() => {
    if (pathname === '/product') {
      setActiveIcon('order');
    } else if (pathname === '/cart') {
      setActiveIcon('product');
    } else if (pathname === '/favProducts') {
      setActiveIcon('fav');
    }
  }, [pathname]);

  const handleIconClick = (icon: IconType) => {
    setActiveIcon(icon);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <div>
      <div className="header-top-furniture wrapper-padding-2 res-header-sm navPosition bg-white w-100"  style={{zIndex: '99999999 !important'}}>
        <div className="container-fluid">
          <div className="header-bottom-wrapper" style={{ position: 'relative' }}>
            <div className="logo-2 furniture-logo ptb-30">
              <a href="/">
                <img src="/assets/img/svg/ferolislogo.svg" width="180" height="50" alt="" />
              </a>
            </div>
            <div className="menu-style-2 furniture-menu menu-hover">
              <nav>
                <ul className={`${styles.navbar}`}>
                  <li>
                    <a href="/" className={`${pathname === '/' ? styles.active : ''}`}>home</a>
                  </li>
                  <li>
                    <a href="/product" className={`${pathname === '/product' ? styles.active : ''}`}>Product</a>
                  </li>
                  <li>
                    <a href="/about-us" className={`${pathname === '/about-us' ? styles.active : ''}`}>About Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className={`${pathname === '/privacy-policy' ? styles.active : ''}`}>privacy policy</a>
                  </li>
                  <li>
                    <a href="/contact" className={`${pathname === '/contact' ? styles.active : ''}`}>contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-cart d-flex align-items-center">
              <div className="furniture-login">
                <ul>
                  {!isLoggedIn ? (
                    <>
                      <li>
                        <a href="/signin">Login</a>
                      </li>
                      <li>
                        <a href="/register">Register</a>
                      </li>
                    </>
                  ) : (
                    <>
                    <li>
                      <a href="#" onClick={handleLogout}>Logout</a>
                    </li>
                    <li>
                      <a href="/dashboard">Profile</a>
                    </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mobile-menu-area col-md-12 col-lg-12 col-12 d-lg-none">
              <div className="mobile-menu">
                <nav id="mobile-menu-active">
                  <ul className="menu-overflow">
                    <li>
                      <a href="/">HOME</a>

                    </li>
                    <li>
                      <a href="/product">Product</a>
                    </li>

                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">privacy policy</a>
                    </li>
                    <li>
                      <a href="/contact">contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.heroBarParent} `}>
        <div className={`${styles.heroBarSection} `}>
          <div className={styles.heroBar}>
            <div
              className={`${styles.orderIcon} ${activeIcon === 'order' ? styles.activeBtn : ''}`}
              onClick={() => handleIconClick('order')}
            >
              <a href="/product">
                <OrderIcon height={20} width={20} stroke={activeIcon === 'order' ? "#5f6b6e" : "#fff"} />
              </a>
            </div>
            <div
              className={`${styles.productIcon} ${activeIcon === 'product' ? styles.activeBtn : ''}`}
              onClick={() => handleIconClick('product')}
            >
              <a href="/cart">
                <ProductIcon width={20} height={20} stroke={activeIcon === 'product' ? "#5f6b6e" : "#fff"} />
              </a>
            </div>
            <div
              className={`${styles.favIcon} ${activeIcon === 'fav' ? styles.activeBtn : ''}`}
              onClick={() => handleIconClick('fav')} >
              <a href="/favProducts">
                <FavIcon width={20} height={20} fill={activeIcon === 'fav' ? "#5f6b6e" : "#fff"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
