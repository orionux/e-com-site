import Layout from '@/Components'
import React from 'react'

const Cart = () => {
  return (
    <Layout>
    <div>
      <div className="breadcrumb-area pt-205 pb-210" style={{backgroundImage: `url('assets/img/aboutBanner.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
            <div className="container">
                <div className="breadcrumb-content text-center" style={{marginTop: '-30px', marginBottom: '30px'}}>
                    <h2>cart page</h2>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li> cart page</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="cart-heading">Cart</h1>
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>remove</th>
                                            <th>images</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="assets/img/productimg/ss.png" alt="" width={90} height={90} /></a>
                                            </td>
                                            <td className="product-name"><a href="#">Wooden Furniture </a></td>
                                            <td className="product-price-cart"><span className="amount">$165.00</span></td>
                                            <td className="product-quantity">
                                                <input value="1" min="1" type="number" />
                                            </td>
                                            <td className="product-subtotal">$165.00</td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="assets/img/productimg/hh.png" alt="" width={90} height={90} /></a>
                                            </td>
                                            <td className="product-name"><a href="#">Vestibulum dictum</a></td>
                                            <td className="product-price-cart"><span className="amount">$150.00</span></td>
                                            <td className="product-quantity">
                                                <input value="1" min="1" type="number" />
                                            </td>
                                            <td className="product-subtotal">$150.00</td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="assets/img/productimg/cc.png" alt="" width={90} height={90} /></a>
                                            </td>
                                            <td className="product-name"><a href="#">Vestibulum dictum</a></td>
                                            <td className="product-price-cart"><span className="amount">$150.00</span></td>
                                            <td className="product-quantity">
                                                <input value="1" min="1" type="number" />
                                            </td>
                                            <td className="product-subtotal">$150.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="coupon-all">
                                        <div className="coupon">
                                            <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text" />
                                            <input className="button" name="apply_coupon" value="Apply coupon" type="submit" />
                                        </div>
                                        <div className="coupon2">
                                            <input className="button" name="update_cart" value="Update cart" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ms-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal<span>100.00</span></li>
                                            <li>Total<span>100.00</span></li>
                                        </ul>
                                        <a href="#">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default Cart
