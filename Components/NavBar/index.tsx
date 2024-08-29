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

  return (
    <div>

      <div className="header-top-furniture wrapper-padding-2 res-header-sm">
        <div className="container-fluid">
          <div className="header-bottom-wrapper" style={{position:'relative'}}>
            <div className="logo-2 furniture-logo ptb-30">
              <a href="index.html">
                <img src="/assets/img/svg/ferolislogo.svg" width="180" height="50" alt="" />
              </a>
            </div>
            <div className="menu-style-2 furniture-menu menu-hover">
              <nav>
                <ul className={`${styles.navbar}`}>
                  <li>
                    <a href="/" className={`${pathname === '/' ? styles.active : ''}`}>home</a>
                    {/* <ul className="single-dropdown">
                      <li>
                        <a href="index.html">Fashion</a>
                      </li>
                      <li>
                        <a href="index-fashion-2.html">Fashion style 2</a>
                      </li>
                      <li>
                        <a href="index-fruits.html">fruits</a>
                      </li>
                      <li>
                        <a href="index-book.html">book</a>
                      </li>
                      <li>
                        <a href="index-electronics.html">electronics</a>
                      </li>
                      <li>
                        <a href="index-electronics-2.html">
                          electronics style 2
                        </a>
                      </li>
                      <li>
                        <a href="index-food.html">food & drink</a>
                      </li>
                      <li>
                        <a href="/">furniture</a>
                      </li>
                      <li>
                        <a href="index-handicraft.html">handicraft</a>
                      </li>
                      <li>
                        <a target="_blank" href="index-smart-watch.html">
                          smart watch
                        </a>
                      </li>
                      <li>
                        <a href="index-sports.html">sports</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/product" className={`${pathname === '/product' ? styles.active : ''}`}>Product</a>
                  </li>
                  {/* <li>
                    <a href="/cart">Cart</a>
                  </li> */}
                  <li>
                    <a href="/about-us" className={`${pathname === '/about-us' ? styles.active : ''}`}>About Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className={`${pathname === '/privacy-policy' ? styles.active : '' }`}>privacy policy</a>
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
                <li>
                  <a href="/signin">Login </a>
                </li>
                <li>
                  <a href="/register">Reg </a>
                </li>
              </ul>
            </div>
            </div>
            {/* <div className="header-cart">
              <a className="icon-cart-furniture" href="#">
                <i className="ti-shopping-cart"></i>
                <span className="shop-count-furniture green">02</span>
              </a>
              <ul className="cart-dropdown">
                <li className="single-product-cart">
                  <div className="cart-img">
                    <a href="#">
                      <img src="assets/img/cart/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="cart-title">
                    <h5>
                      <a href="#"> Bits Headphone</a>
                    </h5>
                    <h6>
                      <a href="#">Black</a>
                    </h6>
                    <span>$80.00 x 1</span>
                  </div>
                  <div className="cart-delete">
                    <a href="#">
                      <i className="ti-trash"></i>
                    </a>
                  </div>
                </li>
                <li className="single-product-cart">
                  <div className="cart-img">
                    <a href="#">
                      <img src="assets/img/cart/2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="cart-title">
                    <h5>
                      <a href="#"> Bits Headphone</a>
                    </h5>
                    <h6>
                      <a href="#">Black</a>
                    </h6>
                    <span>$80.00 x 1</span>
                  </div>
                  <div className="cart-delete">
                    <a href="#">
                      <i className="ti-trash"></i>
                    </a>
                  </div>
                </li>
                <li className="single-product-cart">
                  <div className="cart-img">
                    <a href="#">
                      <img src="assets/img/cart/3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="cart-title">
                    <h5>
                      <a href="#"> Bits Headphone</a>
                    </h5>
                    <h6>
                      <a href="#">Black</a>
                    </h6>
                    <span>$80.00 x 1</span>
                  </div>
                  <div className="cart-delete">
                    <a href="#">
                      <i className="ti-trash"></i>
                    </a>
                  </div>
                </li>
                <li className="cart-space">
                  <div className="cart-sub">
                    <h4>Subtotal</h4>
                  </div>
                  <div className="cart-price">
                    <h4>$240.00</h4>
                  </div>
                </li>
                <li className="cart-btn-wrapper">
                  <a className="cart-btn btn-hover" href="#">
                    view cart
                  </a>
                  <a className="cart-btn btn-hover" href="#">
                    checkout
                  </a>
                </li>
              </ul>
            </div> */}
          
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
          
          <div className="row">
            <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
              <div className="mobile-menu">
                <nav id="mobile-menu-active">
                  <ul className="menu-overflow">
                    <li>
                      <a href="/">HOME</a>
                      {/* <ul>
                        <li>
                          <a href="index.html">Fashion</a>
                        </li>
                        <li>
                          <a href="index-fashion-2.html">Fashion style 2</a>
                        </li>
                        <li>
                          <a href="index-fruits.html">Fruits</a>
                        </li>
                        <li>
                          <a href="index-book.html">book</a>
                        </li>
                        <li>
                          <a href="index-electronics.html">electronics</a>
                        </li>
                        <li>
                          <a href="index-electronics-2.html">
                            electronics style 2
                          </a>
                        </li>
                        <li>
                          <a href="index-food.html">food & drink</a>
                        </li>
                        <li>
                          <a href="index-furniture.html">furniture</a>
                        </li>
                        <li>
                          <a href="index-handicraft.html">handicraft</a>
                        </li>
                        <li>
                          <a href="index-smart-watch.html">smart watch</a>
                        </li>
                        <li>
                          <a href="index-sports.html">sports</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                    <a href="/product">Product</a>
                    </li>
                    {/* <li>
                    <a href="/cart">Cart</a>
                    </li> */}
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
      {/* <div className="header-bottom-furniture wrapper-padding-2 border-top-3">
        <div className="container-fluid">
          <div className="furniture-bottom-wrapper">
            <div className="furniture-search">
              <form action="#">
                <input placeholder="I am Searching for . . ." type="text" />
                <button>
                  <i className="ti-search"></i>
                </button>
              </form>
            </div>
            <div className="furniture-wishlist">
              <ul>
                <li>
                  <a
                    data-bs-toggle="modal"
                    data-target="#exampleCompare"
                    href="#"
                  >
                    <i className="ti-reload"></i> Compare
                  </a>
                </li>
                <li>
                  <a href="wishlist.html">
                    <i className="ti-heart"></i> Wishlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
