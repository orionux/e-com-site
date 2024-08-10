import React from "react";
import Script from "next/script";

const NavBar = () => {
  return (
    <div>
      <Script src="../js/vendor/modernizr-3.11.7.min.js"></Script>

      <div className="header-top-furniture wrapper-padding-2 res-header-sm">
        <div className="container-fluid">
          <div className="header-bottom-wrapper">
            <div className="logo-2 furniture-logo ptb-30">
              <a href="index.html">
                <img src="assets/img/svg/ferolislogo.svg" width="180" height="50" alt="" />
              </a>
            </div>
            <div className="menu-style-2 furniture-menu menu-hover">
              <nav>
                <ul>
                  <li>
                    <a href="/">home</a>
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
                    <a href="/product">Product</a>
                  </li>
                  <li>
                    <a href="/cart">Cart</a>
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
                    <li>
                    <a href="/cart">Cart</a>
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
