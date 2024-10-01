import Layout from "@/Components";
import React from "react";

const productDetails = () => {
  return (
    <Layout>
      <div>
        <div
          className="breadcrumb-area"
          style={{
            backgroundImage: "url(assets/img/aboutBanner.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
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
                      <div
                        className="tab-pane active show fade"
                        id="pro-details1"
                        role="tabpanel"
                      >
                        <div className="easyzoom easyzoom--overlay">
                          <a href="assets/img/productimg/gownbig.jpg">
                            <img
                              src="assets/img/productimg/gownbig.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pro-details2"
                        role="tabpanel"
                      >
                        <div className="easyzoom easyzoom--overlay">
                          <a href="assets/img/productimg/shirtbig.jpg">
                            <img
                              src="assets/img/productimg/shirtbig.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pro-details3"
                        role="tabpanel"
                      >
                        <div className="easyzoom easyzoom--overlay">
                          <a href="assets/img/productimg/gownskybig.jpg">
                            <img
                              src="assets/img/productimg/gownskybig.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pro-details4"
                        role="tabpanel"
                      >
                        <div className="easyzoom easyzoom--overlay">
                          <a href="assets/img/productimg/topbig.jpg">
                            <img
                              src="assets/img/productimg/topbig.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-details-small nav mt-12"
                      role={"tablist"}
                    >
                      <a
                        className="active mr-4"
                        href="#pro-details1"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        <img src="assets/img/productimg/gownsmall.png" alt="" />
                      </a>
                      <a
                        className="mr-4"
                        href="#pro-details2"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        <img
                          src="assets/img/productimg/shirtsmall.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        className="mr-4"
                        href="#pro-details3"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        <img
                          src="assets/img/productimg/gownskysmall.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        className="mr-4"
                        href="#pro-details4"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected="true"
                      >
                        <img src="assets/img/productimg/topsmall.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 col-12">
                <div className="product-details-content">
                  <h3>Handcrafted Supper Mug</h3>
                  <div className="rating-number">
                    <div className="quick-view-rating">
                      <i className="pe-7s-star red-star"></i>
                      <i className="pe-7s-star red-star"></i>
                      <i className="pe-7s-star"></i>
                      <i className="pe-7s-star"></i>
                      <i className="pe-7s-star"></i>
                    </div>
                    <div className="quick-view-number">
                      <span>2 Ratting (S)</span>
                    </div>
                  </div>
                  <div className="details-price">
                    <span>$120.00</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmol tempor incidid ut labore et dolore magna
                    aliqua. Ut enim ad minim veni quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                  </p>
                  <div className="quick-view-select">
                    <div className="select-option-part">
                      <label>Size*</label>
                      <select className="select">
                        <option value="">- Please Select -</option>
                        <option value="">xl</option>
                        <option value="">ml</option>
                        <option value="">m</option>
                        <option value="">sl</option>
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
                  <div className="product-details-cati-tag mt-35">
                    <ul>
                      <li className="categories-title">Categories :</li>
                      <li>
                        <a href="#">fashion</a>
                      </li>
                      <li>
                        <a href="#">electronics</a>
                      </li>
                      <li>
                        <a href="#">toys</a>
                      </li>
                      <li>
                        <a href="#">food</a>
                      </li>
                      <li>
                        <a href="#">jewellery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-details-cati-tag mtb-10">
                    <ul>
                      <li className="categories-title">Tags :</li>
                      <li>
                        <a href="#">fashion</a>
                      </li>
                      <li>
                        <a href="#">electronics</a>
                      </li>
                      <li>
                        <a href="#">toys</a>
                      </li>
                      <li>
                        <a href="#">food</a>
                      </li>
                      <li>
                        <a href="#">jewellery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-share">
                    <ul>
                      <li className="categories-title">Share :</li>
                      <li>
                        <a href="#">
                          <i className="icofont icofont-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont icofont-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont icofont-social-flikr"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description-review-area pb-90">
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
        </div>

        <div className="product-area pb-95">
          <div className="container">
            <div className="section-title-3 text-center mb-50">
              <h2>Related products</h2>
            </div>
            <div className="product-style">
              <div className="related-product-active owl-carousel">
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/gown.png" alt="" />
                    </a>
                    <span>hot</span>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/shirt.png" alt="" />
                    </a>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/gownsky.jpg" alt="" />
                    </a>
                    <span>hot</span>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/blousered.jpg" alt="" />
                    </a>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/top.jpg" alt="" />
                    </a>
                    <span>hot</span>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/gown.png" alt="" />
                    </a>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-img">
                    <a href="#">
                      <img src="assets/img/productimg/shirt.png" alt="" />
                    </a>
                    <span>hot</span>
                    <div className="product-action">
                      <a className="animate-left" title="Wishlist" href="#">
                        <i className="pe-7s-like"></i>
                      </a>
                      <a className="animate-top" title="Add To Cart" href="#">
                        <i className="pe-7s-cart"></i>
                      </a>
                      <a
                        className="animate-right"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        href="#"
                      >
                        <i className="pe-7s-look"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="#">Arifo Stylas Dress</a>
                    </h4>
                    <span>$115.00</span>
                  </div>
                </div>
              </div>
            </div>
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
                        <img src="assets/img/quick-view/l1.jpg" alt="" />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="modal2"
                        role="tabpanel"
                      >
                        <img src="assets/img/quick-view/l2.jpg" alt="" />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="modal3"
                        role="tabpanel"
                      >
                        <img src="assets/img/quick-view/l3.jpg" alt="" />
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
                      <img src="assets/img/quick-view/s1.jpg" alt="" />
                    </a>
                    <a href="#modal2" data-bs-toggle="tab" role="tab">
                      <img src="assets/img/quick-view/s2.jpg" alt="" />
                    </a>
                    <a href="#modal3" data-bs-toggle="tab" role="tab">
                      <img src="assets/img/quick-view/s3.jpg" alt="" />
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
                      Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                      tempor incididun ut labore et dolore magna aliqua. Ut enim
                      ad mi , quis nostrud veniam exercitation .
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
        {/*modal*/}
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
                            <img src="assets/img/cart/4.jpg" alt="" />
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
      </div>
    </Layout>
  );
};

export default productDetails;
