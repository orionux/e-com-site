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
// import a from "next/a";
import { apiUrl, getTokenFromCookies } from "@/app/api/apiServices";
import Toast from "@/Components/Toast";
import { CartItem } from "@/app/types/types";

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
  const token = typeof window !== "undefined" ? getTokenFromCookies() : null;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

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
      const response = await fetch(`${apiUrl}/product-details/${id}`, {
        method: "GET",
      });

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
    setQuantity(1);
    setToastMessage(
      `${product.product_name} has been added to your cart with quantity: ${quantity}.`
    );
    setToastType("success");
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
    setQuantity(1);
    setToastMessage(`${product.product_name} has been added to your favorite.`);
    setToastType("success");
  };

  const addToCartRelated = (product: CartItem) => {
    let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const productExists = cart.find((item: CartItem) => item.id === product.id);

    if (productExists) {
      cart = cart.map((item: CartItem) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setToastMessage(`${product.product_name} has been added to your cart.`);
    setToastType("success");
  };

  return (
    <Layout>
      <div>
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
                            {product.status !== "active" && (
                              <div
                                className="d-flex px-3 py-1 rounded position-absolute top-0 right-0"
                                style={{
                                  backgroundColor: "#FF0000",
                                  fontSize: "12px",
                                  color: "#fff",
                                  width: "max-content",
                                  right: "-20px",
                                }}
                              >
                                Sold Out
                              </div>
                            )}
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
                  <div className="details-price">
                    {token ? (
                      <>
                        <span>${product.retail_price}</span>
                      </>
                    ) : null}
                  </div>
                  <p>{product.description}</p>

                  {token ? (
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
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        {toastMessage && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setToastMessage(null)}
          />
        )}
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
                        <a href={`/product/${product.id}`}>
                          <img
                            src={product.featured_image_url}
                            alt={product.product_name}
                            style={{ width: "90%" }}
                          />
                        </a>
                        <div className="product-action">
                          {token ? (
                            <>
                              <a
                                className="animate-top"
                                title="Wishlist"
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToFavorite({
                                    ...product,
                                    quantity: 1,
                                  });
                                }}
                              >
                                <i className="pe-7s-like"></i>
                              </a>
                              <a
                                className="animate-top"
                                title="Add To Cart"
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  addToCartRelated({
                                    ...product,
                                    quantity: 1,
                                  });
                                }}
                              >
                                <i className="pe-7s-cart"></i>
                              </a>
                            </>
                          ) : null}
                          <a
                            className="animate-right"
                            title="Quick View"
                            href={`/product/${product.id}`}
                          >
                            <i className="pe-7s-look"></i>
                          </a>
                        </div>
                        {product.status !== "active" && (
                          <div
                            className="d-flex px-3 py-1 rounded position-absolute top-0 right-0"
                            style={{
                              backgroundColor: "#FF0000",
                              fontSize: "12px",
                              color: "#fff",
                              width: "max-content",
                              right: "-20px",
                            }}
                          >
                            Sold Out
                          </div>
                        )}
                      </div>
                      <div className="funiture-product-content text-center">
                        <h4>
                          <a href={`/product/${product.id}`}>
                            {product.product_name}
                          </a>
                        </h4>
                        {token ? (
                          <>
                            <span>${product.retail_price}</span>
                          </>
                        ) : null}
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
  <div
    className="preloader-container"
    style={{ height: "100vh", width: "100vw" }}
  >
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
    <div className="preloader-dot"></div>
  </div>
);

export default ProductPage;
