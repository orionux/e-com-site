import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/Components";

import Script from 'next/script';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
        <div className="slider-area">
            <div className="slider-active owl-carousel">
                <div className="single-slider-4 slider-height-6 bg-img" style= {{backgroundImage: `url('/assets/img/slider/9.jpg')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="ms-auto col-lg-6">
                                <div className="furniture-content fadeinup-animated">
                                    <h2 className="animated">Comfort  <br/>Collection.</h2>
                                    <p className="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a className="furniture-slider-btn btn-hover animated" href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider-4 slider-height-6 bg-img" style={{backgroundImage: `url('/assets/img/slider/19.jpg')`}}>
                    <div className="container">
                        <div className="row">
                            <div className="ms-auto col-lg-6">
                                <div className="furniture-content fadeinup-animated">
                                    <h2 className="animated">Comfort  <br/>Collection.</h2>
                                    <p className="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a className="furniture-slider-btn btn-hover animated" href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
            <div className="container-fluid">
                <div className="section-title-6 text-center mb-50">
                    <h2>Popular Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text</p>
                </div>
                <div className="product-style">
                    <div className="popular-product-active owl-carousel">
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/1.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Sofa Chaise Sleeper</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/2.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Darcy Sofa</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/3.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Bladen Sofa</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/4.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Ardenboro Sofa</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/1.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Daystar Sofa</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-img">
                                <a href="#">
                                    <img src="/assets/img/product/furniture/2.jpg" alt="" />
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
                            <div className="funiture-product-content text-center">
                                <h4><a href="product-details.html">Trivia Accent Chair</a></h4>
                                <span>$90.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="discount-area pt-70 pb-120">
            <div className="container">
                <div className="row">
                    <div className="ms-auto col-lg-7">
                        <div className="discount-img pl-70">
                            <img src="/assets/img/banner/28.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="discount-details-wrapper">
                            <h5>Verified quality</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <h2>Summer Discount <br/>Up to 30%</h2>
                            <p className="discount-peragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a className="discount-btn btn-hover" href="product-details.html">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
     
        <div className="premium-banner-area">
            <div className="container">
                <div className="discount-wrapper">
                    <img src="/assets/img/banner/29.jpg" alt="" />
                    <div className="discount-content">
                        <h2>Premium  Home <br/>Decorator</h2>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="product-style-area pt-120">
            <div className="coustom-container-fluid">
                <div className="section-title-7 text-center">
                    <h2>All Products</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text</p>
                </div>
                <div className="product-tab-list text-center mb-65 nav" role="tablist">
                    <a className="active" href="#furniture1" data-bs-toggle="tab" role="tab">
                        <h4>Home </h4>
                    </a>
                    <a href="#furniture2" data-bs-toggle="tab" role="tab">
                        <h4>Chair </h4>
                    </a>
                    <a href="#furniture3" data-bs-toggle="tab" role="tab">
                        <h4>ArmChair </h4>
                    </a>
                    <a href="#furniture4" data-bs-toggle="tab" role="tab">
                        <h4>Light</h4>
                    </a>
                    <a href="#furniture5" data-bs-toggle="tab" role="tab">
                        <h4> Corner</h4>
                    </a>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active show fade" id="furniture1" role="tabpanel">
                        <div className="coustom-row-5">
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/6.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Sofa Chaise Sleeper</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/7.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Darcy Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/8.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Bladen Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Ardenboro Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Daystar Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/11.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trucker Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/12.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">FTrivia Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/13.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Seafront Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Menga Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/15.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Network Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="furniture2" role="tabpanel">
                        <div className="coustom-row-5">
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/15.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Network Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Menga Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/13.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Seafront Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/12.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trivia Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/11.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trucker Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Daystar Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Ardenboro Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/8.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Bladen Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/7.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Darcy Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/6.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Power Reclining Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="furniture3" role="tabpanel">
                        <div className="coustom-row-5">
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trucker Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trivia Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/8.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Seafront Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/6.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Network Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/15.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html"> Power Reclining Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Whitevil Reclining Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/13.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Ardenboro Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/12.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Jarreau Chaise Sleeper</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/11.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Darcy Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Daystar Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="furniture4" role="tabpanel">
                        <div className="coustom-row-5">
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trucker Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Trivia Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/6.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Seafront Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Menga Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/15.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Network Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Darcy Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Bladen Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/11.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Daystar Sofa</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">trucker Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/7.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Seafront Accent Chair</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="furniture5" role="tabpanel">
                        <div className="coustom-row-5">
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/8.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/6.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/7.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/10.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/9.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/12.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/11.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/14.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/13.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-col-three-5 custom-col-style-5 mb-65">
                                <div className="product-wrapper">
                                    <div className="product-img">
                                        <a href="#">
                                            <img src="/assets/img/product/furniture/15.jpg" alt="" />
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
                                    <div className="funiture-product-content text-center">
                                        <h4><a href="product-details.html">Fashin Comfort 240b</a></h4>
                                        <span>$90.00</span>
                                        <div className="product-rating-5">
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star black"></i>
                                            <i className="pe-7s-star"></i>
                                            <i className="pe-7s-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-all-product text-center">
                    <a href="shop.html">View All Product</a>
                </div>
            </div>
        </div>
        
        <div className="testimonials-area pt-120 pb-115">
            <div className="container">
                <div className="testimonials-active owl-carousel">
                    <div className="single-testimonial-2 text-center">
                        <img src="/assets/img/team/1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <img src="/assets/img/team/2.png" alt="" />
                        <h4>tayeb rayed</h4>
                        <span>uiux Designer</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="services-area wrapper-padding-4 gray-bg pt-120 pb-80">
            <div className="container-fluid">
                <div className="services-wrapper">
                    <div className="single-services mb-40">
                        <div className="services-img">
                            <img src="/assets/img/icon-img/26.png" alt="" />
                        </div>
                        <div className="services-content">
                            <h4>Free Shippig</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is random text. </p>
                        </div>
                    </div>
                    <div className="single-services mb-40">
                        <div className="services-img">
                            <img src="/assets/img/icon-img/27.png" alt="" />
                        </div>
                        <div className="services-content">
                            <h4>24/7 Support</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is random text. </p>
                        </div>
                    </div>
                    <div className="single-services mb-40">
                        <div className="services-img">
                            <img src="/assets/img/icon-img/28.png" alt="" />
                        </div>
                        <div className="services-content">
                            <h4>Secure Payments</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is random text. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* modal */}
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
                                        <img src="/assets/img/quick-view/l1.jpg" alt="" />
                                    </div>
                                    <div className="tab-pane fade" id="modal2" role="tabpanel">
                                        <img src="/assets/img/quick-view/l2.jpg" alt="" />
                                    </div>
                                    <div className="tab-pane fade" id="modal3" role="tabpanel">
                                        <img src="/assets/img/quick-view/l3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="quick-view-list nav" role="tablist">
                                <a className="active" href="#modal1" data-bs-toggle="tab" role="tab">
                                    <img src="/assets/img/quick-view/s1.jpg" alt="" />
                                </a>
                                <a href="#modal2" data-bs-toggle="tab" role="tab">
                                    <img src="/assets/img/quick-view/s2.jpg" alt="" />
                                </a>
                                <a href="#modal3" data-bs-toggle="tab" role="tab">
                                    <img src="/assets/img/quick-view/s3.jpg" alt="" />
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
                                        <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
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
        {/* modal */}
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
                                                <img src="/assets/img/cart/4.jpg" alt="" />
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

        {/* all js here */}
       
    
        </div>
      </Layout>
    </>
  );
}
