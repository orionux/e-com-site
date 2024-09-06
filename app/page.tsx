/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "@/Components";
import SeeMoreBtn from "@/Components/SeeMoreBtn";
import Link from "next/link";
import { useEffect, useState } from "react";



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


const addToCart = (product: any) => {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const productExists = cart.find((item: any) => item.id === product.id);

  if (productExists) {
    cart = cart.map((item: any) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.product_name} has been added to your cart.`);
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [banners, setBanners] = useState<Banners[]>([]);


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

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://orionuxerp.store/api/v1/products",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = (await response.json()) as Product[];
        setProducts(data);

        console.log("Products:", data);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const fetchBanners = async () => {
    try {
      const response = await fetch(
        "https://orionuxerp.store/api/v1/banners",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = (await response.json()) as Banners[];
        setBanners(data);

        console.log("Banners:", data);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  useEffect(() => {
    fetchBanners()
    fetchProducts();
    fetchCategories();
  }, []);

  const productsGrid = [
    {
      id: 1,
      name: "BIC Maxi J26",
      image: "/assets/img/prdts/BC5659_img1.png",
      price: "$90.00",
      category: "lighters",
      path: "/product/1",
      badge: "sell",
    },
    {
      id: 2,
      name: "TobaliQ Jetflame Burner “HEMP...",
      image: "/assets/img/prdts/HEMP_TORCH054706-img.png",
      price: "$90.00",
      category: "lighters",
      path: "/product/2",
    },
    {
      id: 3,
      name: "G-Rollz Cheech & Chong(TM) 'V...",
      image:
        "/assets/img/prdts/G-Rollz__Cheech_&_Chong(TM)_Vintage_Faces_Organic_Hemp_-_50_KS_Slim_Papers_+_Tips_(24_Booklets_Display)192927-img.png",
      price: "$90.00",
      category: "rolling",
      path: "3",
      badge: "sell",
    },
    {
      id: 4,
      name: "G-ROLLZ Collector ''Shroomie'...",
      image:
        "/assets/img/prdts/G-ROLLZ__Collector_Shroomie_Pink_-_6_11⁄4_Cones_(24_Packs_Display)194756-img.png",
      price: "$90.00",
      category: "rolling",
      path: "/product/4",
    },
    {
      id: 5,
      name: "Amsterdam Bong Glass - H:37cm...",
      image: "/assets/img/prdts/02917GY_img1.png",
      price: "$90.00",
      category: "bongs",
      path: "/product/5",
      badge: "sell",
    },
    {
      id: 6,
      name: "Amsterdam Bong Glass - H:40cm...",
      image: "/assets/img/prdts/02918RE_img1.png",
      price: "$90.00",
      category: "bongs",
      path: "/product/5",
      badge: "sell",
    },
    {
      id: 7,
      name: "Amsterdam Heartbroken Groom Gl...",
      image: "/assets/img/prdts/AM106_img1.png",
      price: "$90.00",
      category: "bongs",
      path: "/product/5",
      badge: "sell",
    },
    {
      id: 8,
      name: "G-ROLLZ Cheech & ChongTM 'Cam...",
      image: "/assets/img/prdts/CC3300E_img1.png",
      price: "$90.00",
      category: "smoking",
      path: "/product/5",
      badge: "sell",
    },
    {
      id: 9,
      name: "Silver Match Refill Fuel Bottl...",
      image: "/assets/img/prdts/SM40673529_img1.png",
      price: "$90.00",
      category: "liquidgas",
      path: "/product/5",
      badge: "sell",
    },
  ];

  return (
    <>
      <Layout>
        <div>
          {/* hero slider */}

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
                {/* <div className="brand-logo-active2 owl-carousel">
                  {banners.map((bannerImg) => (
                    <div className="single-brand" key={bannerImg.id}>
                      <img
                        src={bannerImg.image_url}
                        alt={`Product ${bannerImg.id}`}
                        className="img-fluid"
                        style={{ height: '250px', width: 'auto' }}
                      />
                    </div>
                  ))}
                </div> */}
                <div className="brand-logo-active2 owl-carousel curved-slider">
                  <div className="single-brand">
                    <img
                      src="assets/img/Slider-images/01.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="single-brand">
                    <img
                      src="assets/img/Slider-images/02.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="single-brand">
                    <img
                      src="assets/img/Slider-images/03.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="single-brand">
                    <img
                      src="assets/img/Slider-images/04.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="single-brand">
                    <img
                      src="assets/img/Slider-images/05.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
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

          <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
            <div className="container-fluid">
              <div className="section-title-6 text-center mb-50">
                <h2>Popular Product</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text
                </p>
              </div>

              <div className="product-style">
                <div className="popular-product-active owl-carousel">
                  {productsGrid.map((product) => (
                    <div key={product.id} className="product-wrapper">
                      <div className="product-img">
                        <Link href={`/product/${product.id}`}>
                          <img src={product.image} alt={product.name} />
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
                            {product.name}
                          </Link>
                        </h4>
                        {/* <span>{product.price}</span>*/}
                        {typeof window !== 'undefined' && localStorage.getItem('authToken') && (
                          <span>$20</span>
                          // <span>{product.price}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <SeeMoreBtn width="200" height="" />
              </div>
            </div>
          </div>

          <div className="product-style-area pt-50">
            <div className="coustom-container-fluid px-lg-5">
              <div className="section-title-7 text-center">
                <h2>All Products</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text
                </p>
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
                          .map((product) => (
                            <div
                              key={product.id}
                              className="custom-col-three-5 custom-col-style-5 mb-65"
                            >
                              <div className="product-wrapper">
                                <div className="product-img" style={{ padding: '10px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                  <Link href={`/product/${product.id}`}>
                                    <img
                                      src={product.featured_image_url}
                                      alt={product.product_name}
                                      style={{ maxHeight: "250px", height: '200px', width: 'auto' }}
                                    />
                                  </Link>
                                  <div className="product-action">
                                    <a
                                      className="animate-left"
                                      title="Wishlist"
                                      href="/favProducts"
                                    >
                                      <i className="pe-7s-like"></i>
                                    </a>
                                    <a
                                      className="animate-top"
                                      title="Add To Cart"
                                      href="/cart"
                                    >
                                      <i className="pe-7s-cart"></i>
                                    </a>
                                    <a
                                      className="animate-right"
                                      title="Quick View"
                                      href={`/product/${product.id}`}
                                    >
                                      <i className="pe-7s-look"></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="funiture-product-content text-center">
                                  <h4>
                                    <Link href={`/product/${product.id}`}>
                                      {product.product_name}
                                    </Link>
                                  </h4>
                                  {typeof window !== 'undefined' && localStorage.getItem('authToken') && (
                                    <span>$20</span>
                                    // <span>{product.price}</span>
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

              {/* <div className="view-all-product text-center">
                                <a href="shop.html">View All Product</a>
                            </div> */}
            </div>
          </div>

          {/* modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span className="pe-7s-close" aria-hidden="true"></span>
            </button>
            <div className="modal-dialog modal-quickview-width" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="qwick-view-left">
                    <div className="quick-view-learg-img">
                      <div className="quick-view-tab-content tab-content">
                        <div
                          className="tab-pane active show fade"
                          id="modal1"
                          role="tabpanel"
                        >
                          <img src="/assets/img/quick-view/l1.jpg" alt="" />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="modal2"
                          role="tabpanel"
                        >
                          <img src="/assets/img/quick-view/l2.jpg" alt="" />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="modal3"
                          role="tabpanel"
                        >
                          <img src="/assets/img/quick-view/l3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="quick-view-list nav" role="tablist">
                      <a
                        className="active"
                        href="#modal1"
                        data-bs-toggle="tab"
                        role="tab"
                      >
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
                        <span className="old">$120.00 </span>
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
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip elit, sed
                        do tempor incididun ut labore et dolore magna aliqua. Ut
                        enim ad mi , quis nostrud veniam exercitation .
                      </p>
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
                          <input
                            type="text"
                            value="02"
                            name="qtybutton"
                            className="cart-plus-minus-box"
                          />
                        </div>
                        <div className="quickview-btn-cart">
                          <a className="btn-hover-black" href="#">
                            add to cart
                          </a>
                        </div>
                        <div className="quickview-btn-wishlist">
                          <a className="btn-hover" href="#">
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
          {/* modal */}
          <div
            className="modal fade"
            id="exampleCompare"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
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
                              <a href="#">
                                Remove <span>x</span>
                              </a>
                              <img src="/assets/img/cart/4.jpg" alt="" />
                              <p>Blush Sequin Top </p>
                              <span>$75.99</span>
                              <a className="compare-btn" href="#">
                                Add to cart
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="compare-title">
                              <h4>Description </h4>
                            </td>
                            <td className="compare-dec compare-common">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has beenin
                                the stand ard dummy text ever since the 1500s,
                                when an unknown printer took a galley
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>Sku </h4>
                            </td>
                            <td className="product-none compare-common">
                              <p>-</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>Availability </h4>
                            </td>
                            <td className="compare-stock compare-common">
                              <p>In stock</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>Weight </h4>
                            </td>
                            <td className="compare-none compare-common">
                              <p>-</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>Dimensions </h4>
                            </td>
                            <td className="compare-stock compare-common">
                              <p>N/A</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>brand </h4>
                            </td>
                            <td className="compare-brand compare-common">
                              <p>HasTech</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>color </h4>
                            </td>
                            <td className="compare-color compare-common">
                              <p>
                                Grey, Light Yellow, Green, Blue, Purple, Black{" "}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="compare-title">
                              <h4>size </h4>
                            </td>
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
