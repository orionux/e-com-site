/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Layout from "@/Components";
import { useParams } from "next/navigation";
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
import Link from "next/link";
import { apiUrl } from "@/app/api/apiServices";


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
const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);

  const fetchRelatedProducts = async () => {
    setIsMounted(true);
    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: "GET",
      });

      if (response.ok) {
        const data = (await response.json()) as Product[];
        setRelatedProduct(data);

        console.log("Products:", data);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/product-details/${id}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data: Product = await response.json();
        setProduct(data);
        console.log("Selected Product:", data);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   setIsMounted(true);

  //   if (id) {
  //     fetchProducts();
  //   }
  // }, [id]);


  useEffect(() => {
    setIsMounted(true);
    fetchRelatedProducts();
    if (id) {
      fetchProducts();
    }
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

  const shuffledProducts = shuffleArray([...relatedProduct]).slice(0, 10);

  if (!isMounted || !product) {
    return <Preloader />;
  }

  const addToCart = (product: Product, quantity: number) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const productExists = cart.find((item: any) => item.id === product.id);

    if (productExists) {
      cart = cart.map((item: any) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(
      `${product.product_name} has been added to your cart with quantity: ${quantity}.`
    );
  };

  const addToFavorite = (product: Product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite") || "[]");

    const productExists = favorite.find((item: any) => item.id === product.id);

    if (productExists) {
      favorite = favorite.map((item: any) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      favorite.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));
    alert(`${product.product_name} has been added to your favorite.`);
  };

  return (
    <Layout>
      <div>
        <div
          className="breadcrumb-area pt-205 pb-210"
          style={{
            backgroundImage: "url(/assets/img/aboutBanner.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="container">
            <div
              className="breadcrumb-content text-center"
              style={{ marginTop: "-30px", marginBottom: "30px" }}
            >
              <h2>product details</h2>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li> product details </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-details ptb-100 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 col-12">
                <div className="product-details-img-content">
                  <div className="product-details-tab mr-70">
                    <div className="product-details-large tab-content">
                      {product.gallery.length > 0 ? (
                        product.gallery.map((image, index) => (
                          <div
                            className={`tab-pane fade ${
                              index === 0 ? "active show" : ""
                            }`}
                            id={`pro-details${index + 1}`}
                            role="tabpanel"
                            key={index}
                          >
                            <div className="easyzoom easyzoom--overlay">
                              <a href={image.image_url}>
                                <img
                                  src={image.image_url}
                                  alt={`Product gallery image ${index + 1}`}
                                />
                              </a>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div
                          className="tab-pane active show fade"
                          id="pro-details1"
                          role="tabpanel"
                        >
                          <div className="easyzoom easyzoom--overlay">
                            <a href="#">
                              <img
                                src={product.featured_image_url}
                                alt="Featured image"
                              />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className="product-details-small nav mt-12"
                      role="tablist"
                    >
                      {product.gallery.length > 0 ? (
                        product.gallery.map((image, index) => (
                          <a
                            className={`mr-4 ${index === 0 ? "active" : ""}`}
                            href={`#pro-details${index + 1}`}
                            data-bs-toggle="tab"
                            role="tab"
                            aria-selected={index === 0 ? "true" : "false"}
                            key={index}
                          >
                            <img
                              src={image.image_url}
                              style={{ width: "80px", height: "auto" }}
                              alt={`Thumbnail ${index + 1}`}
                            />
                          </a>
                        ))
                      ) : (
                        <a
                          className="active mr-4"
                          href="#pro-details1"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected="true"
                        >
                          <img
                            src={product.featured_image_url}
                            style={{ width: "80px", height: "auto" }}
                            alt="Featured thumbnail"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-5 col-12">
                <div className="product-details-content">
                  <h3>{product.product_name}</h3>
                  <div className="rating-number">
                    <div className="quick-view-rating">
                      <i className="pe-7s-star red-star"></i>
                      <i className="pe-7s-star red-star"></i>
                      <i className="pe-7s-star"></i>
                      <i className="pe-7s-star"></i>
                      <i className="pe-7s-star"></i>
                    </div>
                    <div className="quick-view-number">
                      <span>2 Rating (S)</span>
                    </div>
                  </div>
                  <div className="details-price">
                    {typeof window !== "undefined" &&
                      localStorage.getItem("authToken") && (
                        <span>$20</span>
                        // <span>{product.price}</span>
                      )}
                  </div>
                  <p>{product.description}</p>
                  {typeof window !== "undefined" &&
                    localStorage.getItem("authToken") && (
                      <div className="quickview-plus-minus">
                        <div className="cart-plus-minus p-0">
                          <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) =>
                              setQuantity(parseInt(e.target.value))
                            }
                            className="p-0 px-2"
                          />
                        </div>
                        <div className="quickview-btn-cart">
                          <button
                            className=""
                            style={{
                              backgroundColor: "#333",
                              color: "#fff",
                              padding: "11px 20px",
                              border: "none",
                              outline: "none",
                            }}
                            onClick={() => addToCart(product, quantity)}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className="quickview-btn-wishlist">
                          <a
                            className="btn-hover"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              addToFavorite(product);
                            }}
                          >
                            <i className="pe-7s-like"></i>
                          </a>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="product-description-review-area pb-90">
          <div className="container">
            <div className="product-description-review text-center">
              <div className="description-review-title nav" role={"tablist"}>
                <a
                  className="active"
                  href="#pro-dec"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                >
                  Description
                </a>
                <a
                  href="#pro-review"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  Reviews (0)
                </a>
              </div>
              <div className="description-review-text tab-content">
                <div
                  className="tab-pane active show fade"
                  id="pro-dec"
                  role="tabpanel"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                  </p>
                </div>
                <div className="tab-pane fade" id="pro-review" role="tabpanel">
                  <a href="#">Be the first to write your review!</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="product-area pb-95">
          <div className="container">
            <div className="section-title-3 text-center mb-50">
              <h2>Related products</h2>
            </div>
            <div className="product-style">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
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
                            <Link
                              className="animate-left"
                              title="Wishlist"
                              href="/favProducts"
                            >
                              <i className="pe-7s-like"></i>
                            </Link>
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
                              {product.product_name}
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Preloader = () => (
  <div className="preloader-container" style={{height: "100vh", width: '100vw'}}>
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
  </div>
);


export default ProductPage;
