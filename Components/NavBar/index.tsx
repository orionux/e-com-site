"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Script from "next/script";

import styles from "../../styles/NavBar.module.css";
import OrderIcon from "../svg/OrderIcon";
import ProductIcon from "../svg/ProductIcon";
import FavIcon from "../svg/FavIcon";
import CustomIcon from "../svg/CustomIcon";
import { parseCookies } from "nookies";
import { useUser } from "@/context/UserContext";
// Import the cart icon SVG

type IconType = "order" | "product" | "fav";

const NavBar = () => {
  const pathname = usePathname();
  const { clearUserDetails } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState<any[]>([]); 
  const [activeIcon, setActiveIcon] = useState<IconType | null>(null);
  const cartItemCount = cart.length;

  useEffect(() => {
    if (pathname === "/product") {
      setActiveIcon("order");
    } else if (pathname === "/cart") {
      setActiveIcon("product");
    } else if (pathname === "/favProducts") {
      setActiveIcon("fav");
    }
  }, [pathname]);

  const handleIconClick = (icon: IconType) => {
    setActiveIcon(icon);
  };

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.api_token;

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    }
  }, []);

  const handleLogout = () => {
    document.cookie =
      "api_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; SameSite=Strict";

    setIsLoggedIn(false);
    clearUserDetails();

    window.location.href = "/signin";
  };

  return (
    <div>
      <div
        className="header-top-furniture wrapper-padding-2 res-header-sm navPosition bg-white w-100"
        style={{ zIndex: "99999999 !important" }}
      >
        <div className="container-fluid">
          <div
            className="header-bottom-wrapper"
            style={{ position: "relative" }}
          >
            <div className="logo-2 furniture-logo ptb-30">
              <a href="/">
                <img
                  src="/assets/img/svg/ferolislogo.svg"
                  width="180"
                  height="50"
                  alt=""
                />
              </a>
            </div>
            <div className="menu-style-2 furniture-menu menu-hover">
              <nav>
                <ul className={`${styles.navbar}`}>
                  <li>
                    <a
                      href="/"
                      className={`${pathname === "/" ? styles.active : ""}`}
                    >
                      home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product"
                      className={`${
                        pathname === "/product" ? styles.active : ""
                      }`}
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className={`${
                        pathname === "/about-us" ? styles.active : ""
                      }`}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className={`${
                        pathname === "/privacy-policy" ? styles.active : ""
                      }`}
                    >
                      privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className={`${
                        pathname === "/contact" ? styles.active : ""
                      }`}
                    >
                      contact
                    </a>
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
                        <a href="#" onClick={handleLogout}>
                          Logout
                        </a>
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
              className={`${styles.orderIcon} ${
                activeIcon === "order" ? styles.activeBtn : ""
              }`}
              onClick={() => handleIconClick("order")}
            >
              <a href="/product">
                <OrderIcon
                  height={20}
                  width={20}
                  stroke={activeIcon === "order" ? "#5f6b6e" : "#fff"}
                />
              </a>
            </div>
            {/* <div
              className={`${styles.productIcon} ${activeIcon === 'product' ? styles.activeBtn : ''}`}
              onClick={() => handleIconClick('product')}
            >
              <a href="/cart">
                <CustomIcon width={30} height={30} stroke={activeIcon === 'product' ? "#5f6b6e" : "#fff"} />
              </a>
            </div> */}
            {/* Cart Icon with Count */}
            <div
              className={`${styles.productIcon} ${
                activeIcon === "product" ? styles.activeBtn : ""
              }`}
              onClick={() => handleIconClick("product")} // Add a handler to manage the active state
            >
              <a href="/cart" className={styles.cartLink}>
                <CustomIcon
                  width={30}
                  height={30}
                  stroke={activeIcon === "product" ? "#5f6b6e" : "#fff"}
                />
                {cartItemCount > 0 && ( // Condition to display the cart count only if there's an item in the cart
                  <span className={styles.cartCountBadge}>{cartItemCount}</span>
                )}
              </a>
            </div>

            <div
              className={`${styles.favIcon} ${
                activeIcon === "fav" ? styles.activeBtn : ""
              }`}
              onClick={() => handleIconClick("fav")}
            >
              <a href="/favProducts">
                <FavIcon
                  width={20}
                  height={20}
                  fill={activeIcon === "fav" ? "#5f6b6e" : "#fff"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
