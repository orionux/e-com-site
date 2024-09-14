/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "@/Components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToCart, addToFavorite } from "../utils";
import type { Product, Category } from "../types/types";
import {
  fetchAllProducts,
  fetchCategories,
  fetchFilteredProducts,
} from "../api/apiServices";

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sort, setSort] = useState("a-to-z");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const [submittedMinPrice, setSubmittedMinPrice] = useState(0);
  const [submittedMaxPrice, setSubmittedMaxPrice] = useState(2000);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const filteredProducts = await fetchFilteredProducts(
        selectedCategory || "all",
        submittedSearchTerm,
        sort,
        submittedMinPrice,
        submittedMaxPrice
      );

      console.log("Filtered products:", filteredProducts);

      if (filteredProducts && typeof filteredProducts === 'object') {
        const productArray = Object.values(filteredProducts);
        if (Array.isArray(productArray)) {
          setProducts(productArray);
          paginateProducts(productArray, 1);
        } else {
          setProducts([]);
        }
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error loading products:", error);
      setProducts([]);
    }

    setLoading(false);
  };

  const paginateProducts = (productArray: Product[], page: number) => {
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productArray.slice(indexOfFirstProduct, indexOfLastProduct);
    setPaginatedProducts(currentProducts);
  };

  const loadCategories = async () => {
    const categoriesData = await fetchCategories();
    setCategories(categoriesData);
  };

  const loadAllProducts = async () => {
    const allProductsData = await fetchAllProducts();
    setAllProducts(allProductsData);
  };

  useEffect(() => {
    loadAllProducts();
    loadCategories();
    setSelectedCategory(null);
    loadProducts();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [submittedSearchTerm, submittedMinPrice, submittedMaxPrice, selectedCategory, sort]);

  const handleCategoryChange = (categoryId: number) => setSelectedCategory(categoryId);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value);

  const handlePriceFilterSubmit = () => {
    setSubmittedMinPrice(minPrice);
    setSubmittedMaxPrice(maxPrice);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmittedSearchTerm(searchTerm);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginateProducts(products, pageNumber);
  };

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);


  if (loading) {
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
                      <form onSubmit={handleSearchSubmit}>
                        <input
                          placeholder="Search Products..."
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-40">
                    <h3 className="sidebar-title">Filter by Price</h3>
                    <div className="price_filter">
                      <div className="price_slider_amount">
                        <div className="label-input">
                          <label>Min price:</label>
                          <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(parseInt(e.target.value))}
                          />
                        </div>
                        <div className="label-input">
                          <label>Max price:</label>
                          <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                          />
                        </div>
                        <button type="button" onClick={handlePriceFilterSubmit}>
                          Filter
                        </button>
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
                                handleCategoryChange(category.id);
                              }}
                            >
                              {category.category_name}{" "}
                              <span>{category.products_count}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-50">
                    <h3 className="sidebar-title">Top rated products</h3>
                    <div className="sidebar-top-rated-all">
                      {allProducts.slice(0, 4).map((product, index) => (
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
                                  {product.product_name.split(' ').length > 5
                                    ? product.product_name.split(' ').slice(0, 5).join(' ') + '...'
                                    : product.product_name}
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
                                  <span>${product.retail_price}</span>
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
                      <div className="shop-found-selector w-100 d-flex justify-content-between">
                        <div className="shop-found">
                          <p>
                            <span>{(currentPage - 1) * productsPerPage + 1}</span> -{" "}
                            <span>
                              {Math.min(currentPage * productsPerPage, totalProducts)}
                            </span>{" "}
                            Products Found of <span>{totalProducts}</span>
                          </p>
                        </div>
                        <div className="shop-selector">
                          <label>Sort By : </label>
                          <select value={sort} onChange={handleSortChange}>
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
                          {paginatedProducts.length === 0 ? (
                            <div>No products found.</div>
                          ) : (
                            paginatedProducts.map((product) => (
                              <div key={product.id} className="col-md-6 col-xl-4 p-2">
                                <div className="product-wrapper shadow p-3 rounded">
                                  <div className="product-img d-flex justify-content-center">
                                    <Link href={`/product/${product.id}`}>
                                      <img
                                        src={
                                          product.featured_image_url && product.featured_image_url.includes('/product_images/-')
                                            ? '/assets/img/broken-image.jpg'
                                            : product.featured_image_url
                                        }
                                        alt={product.product_name || 'Product Image'}
                                        style={{ width: 'auto', height: '200px' }}
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
                                  <div className="product-content">
                                    <h4 style={{ minHeight: '44px', textAlign: 'center' }}>
                                      <Link href={`/product/${product.id}`}>
                                        {product.product_name.split(' ').length > 10
                                          ? product.product_name.split(' ').slice(0, 10).join(' ') + '...'
                                          : product.product_name}
                                      </Link>
                                    </h4>
                                    <div className="product-price d-flex justify-content-center" style={{ textAlign: 'center' }}>
                                      <span>${product.retail_price}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}


                        </div>
                      </div>
                    </div>
                    <div className="pagination-area pt-5">
                      <nav>
                        <ul className="pagination justify-content-start">
                          {[...Array(totalPages)].map((_, index) => (
                            <li
                              key={index}
                              className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
                              onClick={() => handlePageChange(index + 1)}
                            >
                              <a className="page-link text-black">{index + 1}</a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
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
