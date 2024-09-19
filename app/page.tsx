/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "@/Components";
import SeeMoreBtn from "@/Components/SeeMoreBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { addToCart, addToFavorite } from "./utils";
import { fetchAllProducts, fetchBanners, fetchCategories } from "./api/apiServices";

type Banners = {
  id: number;
  image_url: string;
};

interface CarouselProps {
  products: Banners[];
}

type Product = {
  id: number;
  slug: string;
  product_name: string;
  product_code: string;
  parent_category: {
    id: number;
    slug: string;
    category_name: string;
  };
  sub_category: string;
  suplier: string;
  brand: string;
  sku: string | null;
  barcode: string | null;
  warehouse_location: string;
  units: string;
  carton_size: string | null;
  description: string;
  featured_image: string;
  featured_image_url: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  retail_price: string;
  gallery: {
    id: number;
    product_id: string;
    image: string;
    image_url: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  }[];
};

type Category = {
  id: number;
  slug: string;
  category_name: string;
  parent_category: string;
  status: string;
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [banners, setBanners] = useState<Banners[]>([]);
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCategories = async () => {
    const categoriesData = await fetchCategories();
    setCategories(categoriesData);
  };

  const loadAllProducts = async () => {
    setLoading(true);
    const allProductsData = await fetchAllProducts();
    setProducts(allProductsData);
    setLoading(false);
  };
  
  const loadBanners = async () => {
    const bannersData = await fetchBanners();
    setBanners(bannersData);
  };

  useEffect(() => {
    loadBanners();
    loadAllProducts();
    loadCategories();
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const shuffleArray = (array: any) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const shuffledProducts = shuffleArray([...products]).slice(0, 10);

  const shuffleArray2 = (array: any) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const shuffledProducts2 = shuffleArray2([...products]).slice(0, 6);

  if (loading) {
    return <Preloader />;
  }
  return (
    <>

      <Layout>
        <div>
          {/* hero slider */}
          {loading ? (<SkeletonLoader />) : (
            <div className="slider-area" style={{ marginTop: "80px" }}>
              <div className="brand-logo-area-2 wrapper-padding ptb-80">
                <div className=" position-relative">
                  <div
                    className="d-flex w-100 d-flex justify-content-center"
                    style={{
                      position: "absolute",
                      top: 0,
                      zIndex: 999,
                      marginTop: "-30px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="assets/img/Slider-images/curve-top.webp"
                      alt=""
                      className="img-fluid"
                      style={{ height: "100px", width: "100vw" }}
                    ></img>
                  </div>
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation={false}
                    pagination={{ clickable: true }}
                    scrollbar={false}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {banners.map((bannerImg) => (
                      <SwiperSlide key={bannerImg.id}>
                        <img
                          src={bannerImg.image_url}
                          alt={`Product ${bannerImg.id}`}
                          className="img-fluid"
                          style={{ height: "auto", width: "100%" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div
                    className="d-flex w-100 d-flex justify-content-center"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      zIndex: 999,
                      marginBottom: "-50px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="assets/img/Slider-images/curve-bottom.webp"
                      alt=""
                      className="img-fluid"
                      style={{ height: "100px", width: "100vw" }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          )}


          <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
            <div className="container-fluid">
              <div className="section-title-6 text-center mb-50">
                <h2>Popular Product</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text
                </p> */}
              </div>
              {loading ? (<SkeletonLoader />) : (
                <div className="product-style">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    pagination={false}
                    scrollbar={false}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: true,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {shuffledProducts2.map((product: any) => (
                      <SwiperSlide key={product.id}>
                        <div className="product-wrapper">
                          <div className="product-img">
                            <Link href={`/product/${product.id}`}>
                              <img
                                src={product.featured_image_url}
                                alt={product.product_name}
                                style={{ width: "90%" }}
                              />
                            </Link>
                            <div className="product-action">
                              {typeof window !== "undefined" &&
                                localStorage.getItem("authToken") ? (
                                <>
                                  <Link
                                    className="animate-top"
                                    title="Wishlist"
                                    href=""
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToFavorite({
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                    }
                                  >
                                    <i className="pe-7s-like"></i>
                                  </Link>
                                  <Link
                                    className="animate-top"
                                    title="Add To Cart"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToCart({
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                    }
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </Link>
                                </>
                              ) : null}
                              <Link
                                className="animate-right"
                                title="Quick View"
                                href={`/product/${product.id}`}
                              >
                                <i className="pe-7s-look"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="funiture-product-content text-center">
                            <h4>
                              <Link href={`/product/${product.id}`}>
                              {product.product_name.split(' ').length > 10
                                            ? product.product_name.split(' ').slice(0, 10).join(' ') + '...'
                                            : product.product_name}
                              </Link>
                            </h4>
                            {typeof window !== "undefined" &&
                              localStorage.getItem("authToken") && (
                                <span>${product.retail_price}</span>
                              )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <div className="d-flex justify-content-center align-items-center">
                <SeeMoreBtn width="200" height="" />
              </div>
            </div>
            <div className="alert-container">
              {alert && (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Success!</strong> {alert}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAlert(null)}
                    aria-label="Close"
                  ></button>
                </div>
              )}
            </div>
          </div>

          <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
            <div className="container-fluid">
              <div className="section-title-6 text-center mb-50">
                <h2>Latest Product</h2>
              </div>
              {loading ? (<SkeletonLoader />) : (
                <div className="product-style">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    pagination={false}
                    scrollbar={false}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: true,
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {shuffledProducts.map((product: any) => (
                      <SwiperSlide key={product.id}>
                        <div className="product-wrapper">
                          <div className="product-img">
                            <Link href={`/product/${product.id}`}>
                              <img
                                src={product.featured_image_url}
                                alt={product.product_name}
                                style={{ width: "90%" }}
                              />
                            </Link>
                            <div className="product-action">
                              {typeof window !== "undefined" &&
                                localStorage.getItem("authToken") ? (
                                <>
                                  <Link
                                    className="animate-top"
                                    title="Wishlist"
                                    href=""
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToFavorite({
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                    }
                                  >
                                    <i className="pe-7s-like"></i>
                                  </Link>
                                  <Link
                                    className="animate-top"
                                    title="Add To Cart"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToCart({
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                    }
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </Link>
                                </>
                              ) : null}
                              <Link
                                className="animate-right"
                                title="Quick View"
                                href={`/product/${product.id}`}
                              >
                                <i className="pe-7s-look"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="funiture-product-content text-center">
                            <h4>
                              <Link href={`/product/${product.id}`}>
                              {product.product_name.split(' ').length > 10
                                            ? product.product_name.split(' ').slice(0, 10).join(' ') + '...'
                                            : product.product_name}
                              </Link>
                            </h4>
                            {typeof window !== "undefined" &&
                              localStorage.getItem("authToken") && (
                                <span>${product.retail_price}</span>
                              )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

            </div>
            <div className="alert-container">
              {alert && (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Success!</strong> {alert}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAlert(null)}
                    aria-label="Close"
                  ></button>
                </div>
              )}
            </div>
          </div>

          <div className="product-style-area pt-50">
            <div className="coustom-container-fluid px-lg-5">
              <div className="section-title-7 text-center">
                <h2>All Products</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text
                </p> */}
              </div>

              <div
                className="product-tab-list text-center mb-65 nav"
                role="tablist"
              >
                <a
                  className="active"
                  href="#all"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <h4>All Products</h4>
                </a>
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.slug}`}
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <h4>{category.category_name}</h4>
                  </a>
                ))}
              </div>
              {loading ? (<SkeletonLoader />) : (
                <div className="tab-content">

                  {["all", ...categories.map((category) => category.slug)].map(
                    (categorySlug) => (
                      <div
                        key={categorySlug}
                        className={`tab-pane fade ${categorySlug === "all" ? "show active" : ""
                          }`}
                        id={categorySlug}
                        role="tabpanel"
                      >
                        <div className="coustom-row-5">
                          {products
                            .filter((product) =>
                              categorySlug === "all"
                                ? true
                                : product.parent_category.slug === categorySlug
                            )
                            .slice(0, 16)
                            .map((product) => (
                              <div
                                key={product.id}
                                className="custom-col-three-5 custom-col-style-5 mb-65"
                              >
                                <div className="product-wrapper">
                                  <div
                                    className="product-img"
                                    style={{
                                      padding: "10px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Link href={`/product/${product.id}`}>
                                      <img
                                        src={product.featured_image_url}
                                        alt={product.product_name}
                                        style={{
                                          maxHeight: "250px",
                                          height: "200px",
                                          width: "auto",
                                        }}
                                      />
                                    </Link>
                                    <div className="product-action">
                                      {typeof window !== "undefined" &&
                                        localStorage.getItem("authToken") ? (
                                        <>
                                          <Link
                                            className="animate-top"
                                            title="Wishlist"
                                            href=""
                                            onClick={(e) => {
                                              e.preventDefault();
                                              addToFavorite({
                                                ...product,
                                                quantity: 1,
                                              })
                                            }
                                            }
                                          >
                                            <i className="pe-7s-like"></i>
                                          </Link>
                                          <Link
                                            className="animate-top"
                                            title="Add To Cart"
                                            href=""
                                            onClick={(e) => {
                                              e.preventDefault();
                                              addToCart({
                                                ...product,
                                                quantity: 1,
                                              })
                                            }
                                            }
                                          >
                                            <i className="pe-7s-cart"></i>
                                          </Link>
                                        </>
                                      ) : null}
                                      <Link
                                        className="animate-right"
                                        title="Quick View"
                                        href={`/product/${product.id}`}
                                      >
                                        <i className="pe-7s-look"></i>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="funiture-product-content text-center">
                                    <h4>
                                      <Link href={`/product/${product.id}`}>
                                      {product.product_name.split(' ').length > 10
                                            ? product.product_name.split(' ').slice(0, 10).join(' ') + '...'
                                            : product.product_name}
                                      </Link>
                                    </h4>
                                    {typeof window !== "undefined" &&
                                      localStorage.getItem("authToken") && (
                                        <span>${product.retail_price}</span>
                                      )}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const Preloader = () => (
  <div className="preloader-container" style={{height: "100vh", width: '100vw'}}>
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
  </div>
);


const SkeletonLoader = () => (
  <div className="skeleton-loader-container">
    <div className="skeleton-loader-item skeleton-loader-image"></div>
    <div className="skeleton-loader-item skeleton-loader-text"></div>
    <div className="skeleton-loader-item skeleton-loader-text"></div>
    <div className="skeleton-loader-item skeleton-loader-text"></div>
  </div>
);