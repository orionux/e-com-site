import Layout from "@/Components";
import React from "react";

const Product = () => {
  return (
    <Layout>
      <div>
      <div className="breadcrumb-area pt-205 breadcrumb-padding pb-210" style={{backgroundImage: "url(assets/img/bg/breadcrumb.jpg)"}}>
            <div className="container-fluid">
                <div className="breadcrumb-content text-center">
                    <h2>shop grid 3 column</h2>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li>shop grid 3 column</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="shop-page-wrapper shop-page-padding ptb-100">
            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-lg-3 order-2 order-lg-1">
                        <div className="shop-sidebar mr-50">
                            <div className="sidebar-widget mb-50">
                                <h3 className="sidebar-title">Search Products</h3>
                                <div className="sidebar-search">
                                    <form action="#">
                                        <input placeholder="Search Products..." type="text"></input>
                                        <button><i className="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-widget mb-40">
                                <h3 className="sidebar-title">Filter by Price</h3>
                                <div className="price_filter">
                                    <div id="slider-range"></div>
                                    <div className="price_slider_amount">
                                        <div className="label-input">
                                            <label>price : </label>
                                            <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                        </div>
                                        <button type="button">Filter</button> 
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget mb-45">
                                <h3 className="sidebar-title">Categories</h3>
                                <div className="sidebar-categories">
                                    <ul>
                                        <li><a href="#">Accessories <span>4</span></a></li>
                                        <li><a href="#">Book <span>9</span></a></li>
                                        <li><a href="#">Clothing <span>5</span> </a></li>
                                        <li><a href="#">Homelife <span>3</span></a></li>
                                        <li><a href="#">Kids & Baby <span>4</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget sidebar-overflow mb-45">
                                <h3 className="sidebar-title">color</h3>
                                <div className="product-color">
                                    <ul>
                                        <li className="red">b</li>
                                        <li className="pink">p</li>
                                        <li className="blue">b</li>
                                        <li className="sky">b</li>
                                        <li className="green">y</li>
                                        <li className="purple">g</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget mb-40">
                                <h3 className="sidebar-title">size</h3>
                                <div className="product-size">
                                    <ul>
                                        <li><a href="#">xl</a></li>
                                        <li><a href="#">m</a></li>
                                        <li><a href="#">l</a></li>
                                        <li><a href="#">ml</a></li>
                                        <li><a href="#">lm</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget mb-50">
                                <h3 className="sidebar-title">Top rated products</h3>
                                <div className="sidebar-top-rated-all">
                                    <div className="sidebar-top-rated mb-30">
                                        <div className="single-top-rated">
                                            <div className="top-rated-img">
                                                <a href="#"><img src="assets/img/product/sidebar-product/1.jpg" alt=""></img></a>
                                            </div>
                                            <div className="top-rated-text">
                                                <h4><a href="#">Flying Drone</a></h4>
                                                <div className="top-rated-rating">
                                                    <ul>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                    </ul>
                                                </div>
                                                <span>$140.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-top-rated mb-30">
                                        <div className="single-top-rated">
                                            <div className="top-rated-img">
                                                <a href="#"><img src="assets/img/product/sidebar-product/2.jpg" alt=""></img></a>
                                            </div>
                                            <div className="top-rated-text">
                                                <h4><a href="#">Flying Drone</a></h4>
                                                <div className="top-rated-rating">
                                                    <ul>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                    </ul>
                                                </div>
                                                <span>$140.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-top-rated mb-30">
                                        <div className="single-top-rated">
                                            <div className="top-rated-img">
                                                <a href="#"><img src="assets/img/product/sidebar-product/3.jpg" alt=""></img></a>
                                            </div>
                                            <div className="top-rated-text">
                                                <h4><a href="#">Flying Drone</a></h4>
                                                <div className="top-rated-rating">
                                                    <ul>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                    </ul>
                                                </div>
                                                <span>$140.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-top-rated mb-30">
                                        <div className="single-top-rated">
                                            <div className="top-rated-img">
                                                <a href="#"><img src="assets/img/product/sidebar-product/4.jpg" alt=""></img></a>
                                            </div>
                                            <div className="top-rated-text">
                                                <h4><a href="#">Flying Drone</a></h4>
                                                <div className="top-rated-rating">
                                                    <ul>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                        <li><i className="pe-7s-star"></i></li>
                                                    </ul>
                                                </div>
                                                <span>$140.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 order-1 order-lg-2">
                        <div className="shop-product-wrapper res-xl">
                            <div className="shop-bar-area">
                                <div className="shop-bar pb-60">
                                    <div className="shop-found-selector">
                                        <div className="shop-found">
                                            <p><span>23</span> Product Found of <span>50</span></p>
                                        </div>
                                        <div className="shop-selector">
                                            <label>Sort By : </label>
                                            <select name="select">
                                                <option value="">Default</option>
                                                <option value="">A to Z</option>
                                                <option value=""> Z to A</option>
                                                <option value="">In stock</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="shop-filter-tab">
                                        <div className="shop-tab nav" role={"tablist"}>
                                            <a className="active" href="#grid-sidebar3" data-bs-toggle="tab" role="tab" aria-selected="false">
                                                <i className="ti-layout-grid4-alt"></i>
                                            </a>
                                            <a href="#grid-sidebar4" data-bs-toggle="tab" role="tab" aria-selected="true">
                                                <i className="ti-menu"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-product-content tab-content">
                                    <div id="grid-sidebar3" className="tab-pane fade active show">
                                        <div className="row">
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/1.jpg" alt=""></img>
                                                        </a>
                                                        <span>hot</span>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#"> Dagger Smart Trousers </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/2.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#">Homme Tapered Smart </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/3.jpg" alt=""></img>
                                                        </a>
                                                        <span>new</span>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#">Navy Bird Print </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/4.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#">Jacket Stonewash </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/5.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#">Skinny Jeans Terry </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="product-wrapper mb-30">
                                                    <div className="product-img">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/3.jpg" alt=""></img>
                                                        </a>
                                                        <span>sell</span>
                                                        <div className="product-action">
                                                            <a className="animate-left" title="Wishlist" href="#">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                            <a className="animate-top" title="Add To Cart" href="#">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4><a href="#">Black Faux Suede </a></h4>
                                                        <span>$115.00</span>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                    <div id="grid-sidebar4" className="tab-pane fade">
                                        <div className="row">
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/1.jpg" alt=""></img>
                                                        </a>
                                                        <span>hot</span>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#"> Dagger Smart Trousers </a></h4>
                                                            <span>$150.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/2.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#">Homme Tapered Smart </a></h4>
                                                            <span>$180.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/3.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#">Navy Bird Print </a></h4>
                                                            <span>$130.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/4.jpg" alt=""></img>
                                                        </a>
                                                        <span>new</span>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#">Skinny Jeans Terry </a></h4>
                                                            <span>$120.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/5.jpg" alt=""></img>
                                                        </a>
                                                        <span>hot</span>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#">Black Faux Suede </a></h4>
                                                            <span>$170.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-xl-6">
                                                <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                                                    <div className="product-img list-img-width">
                                                        <a href="#">
                                                            <img src="assets/img/product/fashion-colorful/1.jpg" alt=""></img>
                                                        </a>
                                                        <div className="product-action-list-style">
                                                            <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-list">
                                                        <div className="product-list-info">
                                                            <h4><a href="#">Jacket Stonewash </a></h4>
                                                            <span>$190.00</span>
                                                            <p>Lorem ipsum dolor sit amet, mana consectetur adipisicing elit, sed do eiusmod tempor labore. </p>
                                                        </div>
                                                        <div className="product-list-cart-wishlist">
                                                            <div className="product-list-cart">
                                                                <a className="btn-hover list-btn-style" href="#">add to cart</a>
                                                            </div>
                                                            <div className="product-list-wishlist">
                                                                <a className="btn-hover list-btn-wishlist" href="#">
                                                                    <i className="pe-7s-like"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-style mt-50 text-center">
                            <ul>
                                <li><a href="#"><i className="ti-angle-left"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">19</a></li>
                                <li className="active"><a href="#"><i className="ti-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<footer className="footer-area">
            <div className="footer-top-area bg-img pt-105 pb-65" style={{backgroundImage: "url(assets/img/bg/1.jpg)"}} data-overlay="9">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Custom Service</h3>
                                <div className="footer-widget-content">
                                    <ul>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="register.html">My Account</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Track</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Categories</h3>
                                <div className="footer-widget-content">
                                    <ul>
                                        <li><a href="shop.html">Dress</a></li>
                                        <li><a href="shop.html">Shoes</a></li>
                                        <li><a href="shop.html">Shirt</a></li>
                                        <li><a href="shop.html">Baby Product</a></li>
                                        <li><a href="shop.html">Mans Product</a></li>
                                        <li><a href="shop.html">Leather</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Contact</h3>
                                <div className="footer-newsletter">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is dummy.</p>
                                    <div id="mc_embed_signup" className="subscribe-form pr-40">
                                        <form action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                            <div id="mc_embed_signup_scroll" className="mc-form">
                                                <input type="email" value="" name="EMAIL" className="email" placeholder="Enter Your E-mail" required></input>
                                                <div className="mc-news" aria-hidden="true">
                                                    <input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} value=""></input>
                                                </div>
                                                <div className="clear">
                                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="footer-contact">
                                        <p><span><i className="ti-location-pin"></i></span> 77 Seventh avenue USA 12555. </p>
                                        <p><span><i className=" ti-headphone-alt "></i></span> +88 (015) 609735 or +88 (012) 112266</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom black-bg ptb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyright">
                                <p>
                                    Copyright ©
                                    <a href="hastech.company/">HasTech</a> 2022 . All Right Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="pe-7s-close" aria-hidden="true"></span>
            </button>
            <div className="modal-dialog modal-quickview-width" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="qwick-view-left">
                            <div className="quick-view-learg-img">
                                <div className="quick-view-tab-content tab-content">
                                    <div className="tab-pane active show fade" id="modal1" role="tabpanel">
                                        <img src="assets/img/quick-view/l1.jpg" alt=""></img>
                                    </div>
                                    <div className="tab-pane fade" id="modal2" role="tabpanel">
                                        <img src="assets/img/quick-view/l2.jpg" alt=""></img>
                                    </div>
                                    <div className="tab-pane fade" id="modal3" role="tabpanel">
                                        <img src="assets/img/quick-view/l3.jpg" alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="quick-view-list nav" role="tablist">
                                <a className="active" href="#modal1" data-bs-toggle="tab" role="tab">
                                    <img src="assets/img/quick-view/s1.jpg" alt=""></img>
                                </a>
                                <a href="#modal2" data-bs-toggle="tab" role="tab">
                                    <img src="assets/img/quick-view/s2.jpg" alt=""></img>
                                </a>
                                <a href="#modal3" data-bs-toggle="tab" role="tab">
                                    <img src="assets/img/quick-view/s3.jpg" alt=""></img>
                                </a>
                            </div>
                        </div>
                        <div className="qwick-view-right">
                            <div className="qwick-view-content">
                                <h3>Handcrafted Supper Mug</h3>
                                <div className="price">
                                    <span className="new">$90.00</span>
                                    <span className="old">$120.00  </span>
                                </div>
                                <div className="rating-number">
                                    <div className="quick-view-rating">
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                    </div>
                                    <div className="quick-view-number">
                                        <span>2 Ratting (S)</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation .</p>
                                <div className="quick-view-select">
                                    <div className="select-option-part">
                                        <label>Size*</label>
                                        <select className="select">
                                            <option value="">- Please Select -</option>
                                            <option value="">900</option>
                                            <option value="">700</option>
                                        </select>
                                    </div>
                                    <div className="select-option-part">
                                        <label>Color*</label>
                                        <select className="select">
                                            <option value="">- Please Select -</option>
                                            <option value="">orange</option>
                                            <option value="">pink</option>
                                            <option value="">yellow</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="quickview-plus-minus">
                                    <div className="cart-plus-minus">
                                        <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"></input>
                                    </div>
                                    <div className="quickview-btn-cart">
                                        <a className="btn-hover-black" href="#">add to cart</a>
                                    </div>
                                    <div className="quickview-btn-wishlist">
                                        <a className="btn-hover" href="#"><i className="pe-7s-like"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- modal --> */}
        <div className="modal fade" id="exampleCompare" tabIndex={-1} role="dialog" aria-hidden="true">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="pe-7s-close" aria-hidden="true"></span>
            </button>
            <div className="modal-dialog modal-compare-width" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <form action="#">
                            <div className="table-content compare-style table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>
                                                <a href="#">Remove <span>x</span></a>
                                                <img src="assets/img/cart/4.jpg" alt=""></img>
                                                <p>Blush Sequin Top </p>
                                                <span>$75.99</span>
                                                <a className="compare-btn" href="#">Add to cart</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="compare-title"><h4>Description </h4></td>
                                            <td className="compare-dec compare-common">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenin the stand ard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>Sku </h4></td>
                                            <td className="product-none compare-common">
                                                <p>-</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>Availability  </h4></td>
                                            <td className="compare-stock compare-common">
                                                <p>In stock</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>Weight   </h4></td>
                                            <td className="compare-none compare-common">
                                                <p>-</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>Dimensions   </h4></td>
                                            <td className="compare-stock compare-common">
                                                <p>N/A</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>brand   </h4></td>
                                            <td className="compare-brand compare-common">
                                                <p>HasTech</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>color   </h4></td>
                                            <td className="compare-color compare-common">
                                                <p>Grey, Light Yellow, Green, Blue, Purple, Black </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"><h4>size    </h4></td>
                                            <td className="compare-size compare-common">
                                                <p>XS, S, M, L, XL, XXL </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="compare-title"></td>
                                            <td className="compare-price compare-common">
                                                <p>$75.99 </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
