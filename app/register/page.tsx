import Layout from '@/Components'
import React from 'react'

const Register = () => {
  return (
    // <Layout>
    <div>
        <div className="register-area ptb-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12 col-lg-12 col-xl-6 ms-auto me-auto">
                        <div className="login">
                            <div className="login-form-container">
                                <div className="login-form">
                                    <form action="#" method="post">
                                        <input type="text" name="user-name" placeholder="Username"></input>
                                        <input type="password" name="user-password" placeholder="Password"></input>
                                        <input name="user-email" placeholder="Email" type="email"></input>
                                        <div className="button-box">
                                            <button type="submit" className="default-btn floatright">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                                <img src="assets/img/cart/4.jpg" alt=""></img>
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
    </div>
    // </Layout>
  )
}

export default Register