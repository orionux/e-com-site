/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "@/Components";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  retail_price: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
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

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sort, setSort] = useState("a-to-z");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const productsPerPage = 12;

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://orionuxerp.store/api/v1/products", {
        method: "GET",
      });

      if (response.ok) {
        const data = (await response.json()) as Product[];
        setProducts(data);
        setCurrentPage(1);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchCategoryProducts = async () => {
    try {
      const response = await fetch(
        "https://orionuxerp.store/api/v1/filter-products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category: selectedCategory }),
        }
      );

      if (response.ok) {
        const data = (await response.json()) as Product[];
        setProducts(data);
        setCurrentPage(1);
      } else {
        console.error(
          "Failed to fetch products by category:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategoryProducts();
  }, []);

  const filterProductsByCategory = (categoryId: number) => {
    const filteredProducts = products.filter(
      (product) => product.parent_category.id === categoryId
    );
    // setProducts(filteredProducts);
    setSelectedCategory(categoryId);
  };

  const getProductCountByCategory = (categoryId: number) => {
    return products.filter(
      (product) => product.parent_category.id === categoryId
    ).length;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://orionuxerp.store/api/v1/categories",
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = (await response.json()) as Category[];
          setCategories(data);

          console.log("Categories:", data);
        } else {
          console.error("Failed to fetch categories:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    let sortedArray = [...products];
    switch (sortOrder) {
      case "a-to-z":
        sortedArray.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        );
        break;
      case "z-to-a":
        sortedArray.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        );
        break;
      default:
        break;
    }
    setSortedProducts(sortedArray);
  }, [sortOrder, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const addToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const productExists = cart.find((item: any) => item.id === product.id);

    if (productExists) {
      cart = cart.map((item: any) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.product_name} has been added to your cart.`);
  };

  const addToFavorite = (product: any) => {
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

  if (!products) {
    return <Preloader />;
  }

  return (
    <Layout>
      <div>
        <div
          className="breadcrumb-area pt-205 breadcrumb-padding pb-210"
          style={{
            backgroundImage: "url(assets/img/aboutBanner.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="container-fluid">
            <div
              className="breadcrumb-content text-center"
              style={{ marginTop: "-30px", marginBottom: "30px" }}
            >
              <h2>Our Products</h2>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>Our Products</li>
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
                        <input
                          placeholder="Search Products..."
                          type="text"
                        ></input>
                        <button>
                          <i className="ti-search"></i>
                        </button>
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
                          <input
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                        <button type="button">Filter</button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-45">
                    <h3 className="sidebar-title">Categories</h3>
                    <div className="sidebar-categories">
                      <ul>
                        {categories.map((category) => (
                          <li key={category.id}>
                            <a
                              href={`#${category.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                filterProductsByCategory(category.id);
                              }}
                            >
                              {category.category_name}{" "}
                              <span>
                                {getProductCountByCategory(category.id)}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-50">
                    <h3 className="sidebar-title">Top rated products</h3>
                    <div className="sidebar-top-rated-all">
                      {products.slice(0, 4).map((product, index) => (
                        <div
                          className="sidebar-top-rated mb-30"
                          key={product.id}
                        >
                          <div className="single-top-rated">
                            <div className="top-rated-img">
                              <Link href={`/product/${product.id}`}>
                                <img
                                  src={product.featured_image_url}
                                  alt={product.product_name}
                                  width={91}
                                  height={88}
                                />
                              </Link>
                            </div>
                            <div className="top-rated-text">
                              <h4>
                                <Link href={`/product/${product.id}`}>
                                  {product.product_name}
                                </Link>
                              </h4>
                              <div className="top-rated-rating">
                                <ul>
                                  {[...Array(5)].map((star, i) => (
                                    <li key={i}>
                                      <i className="pe-7s-star"></i>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {typeof window !== "undefined" &&
                                localStorage.getItem("authToken") && (
                                  <span>{product.retail_price}</span>
                                )}
                            </div>
                          </div>
                        </div>
                      ))}
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
                          <p>
                            <span>{indexOfFirstProduct + 1}</span> -{" "}
                            <span>
                              {indexOfFirstProduct + currentProducts.length}
                            </span>{" "}
                            Products Found of{" "}
                            <span>{sortedProducts.length}</span>
                          </p>
                        </div>
                        <div className="shop-selector">
                          <label>Sort By : </label>
                          <select
                            name="select"
                            onChange={handleSortChange}
                            value={sortOrder}
                          >
                            <option value="">Default</option>
                            <option value="a-to-z">A to Z</option>
                            <option value="z-to-a">Z to A</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="shop-product-content tab-content">
                      <div
                        id="grid-sidebar3"
                        className="tab-pane fade active show"
                      >
                        <div className="row">
                          {currentProducts.map((product) => (
                            <div key={product.id} className="col-md-6 col-xl-4">
                              <div className="product-wrapper mb-30">
                                <div className="product-img">
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
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            addToFavorite(product);
                                          }}
                                        >
                                          <i className="pe-7s-like"></i>
                                        </Link>
                                        <Link
                                          className="animate-top"
                                          title="Add To Cart"
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(product);
                                          }}
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
                                <div className="product-content">
                                  <h4>
                                    <Link href={`/product/${product.id}`}>
                                      {product.product_name}
                                    </Link>
                                  </h4>
                                  {typeof window !== "undefined" &&
                                    localStorage.getItem("authToken") && (
                                      <span>$20</span>
                                      // <span>{product.price}</span>
                                    )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-style mt-50 text-center">
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) paginate(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "disabled" : ""}
                      >
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            paginate(index + 1);
                          }}
                          className={currentPage === index + 1 ? "active" : ""}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            paginate(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "disabled" : ""}
                      >
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Preloader = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ width: "100vw", height: "100vh" }}
  >
    <p style={{ fontSize: "20px" }}>Loading...</p>
  </div>
);

export default Product;
