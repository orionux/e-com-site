import Layout from '@/Components'
import React from 'react'

const FavProducts = () => {
  return (
    <Layout>
        <div className="breadcrumb-area pt-205 pb-210" style={{backgroundImage: `url('assets/img/bg/breadcrumb.jpg')`}}>
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2>wishlist</h2>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li> wishlist </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="cart-main-area pt-95 pb-100 wishlist">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="cart-heading">wishlist</h1>
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
                                                <a href="#"><img src="/assets/img/prdts/AM106_img1.png" alt="" width={100} height={100} className='img-fluid' /></a>
                                            </td>
                                            <td className="product-name"><a href="#">MacBook Pro</a></td>
                                            <td className="product-price-cart"><span className="amount">$165.00</span></td>
                                            <td className="product-quantity">
                                                <input value="1" min="1" type="number" />
                                            </td>
                                            <td className="product-subtotal">$165.00</td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="/assets/img/prdts/CC3300E_img1.png" alt="" width={100} height={100} className='img-fluid' /></a>
                                            </td>
                                            <td className="product-name"><a href="#">i Watch</a></td>
                                            <td className="product-price-cart"><span className="amount">$150.00</span></td>
                                            <td className="product-quantity">
                                                <input value="1" min="1" type="number" />
                                            </td>
                                            <td className="product-subtotal">$150.00</td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="pe-7s-close"></i></a></td>
                                            <td className="product-thumbnail">
                                                <a href="#"><img src="/assets/img/prdts/SM40673529_img1.png" alt="" width={100} height={100} className='img-fluid' /></a>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
  )
}

export default FavProducts
