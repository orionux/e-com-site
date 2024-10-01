/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from '@/Components';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../api/apiServices';

const Cart = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [customerId, setCustomerId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCart(storedCart);

            const storedCustomerId = localStorage.getItem('customer_id');
            setCustomerId(storedCustomerId);
        }
    }, []);

    const removeFromCart = (productId: any) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateCartQuantity = (productId: any, newQuantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const cartItemsArray = cart.map(item => ({
        id: item.id,
        quantity: item.quantity
    }));

    console.log('Cart Items Array:', cartItemsArray);

    const handleCheckout = async () => {
        const products = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity
        }));

        const orderData = {
            customer_id: customerId,
            products
        };

        console.log('Order data:', orderData);

        try {
            const response = await fetch(`${apiUrl}/order-request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                alert("Thank you! Your order has been placed. We will contact you soon.");
                setCart([]);
                localStorage.removeItem('cart');
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('An error occurred. Please try again later.');
        }
    };


    return (
        <Layout>
            <div>
                <div className="breadcrumb-area pt-205 pb-210" style={{ backgroundImage: `url('assets/img/aboutBanner.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                    <div className="container">
                        <div className="breadcrumb-content text-center" style={{ marginTop: '-30px', marginBottom: '30px' }}>
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
                                               {cart.map((product, index) => (
                                                    <tr key={index}>
                                                        <td className="product-remove">
                                                            <a href="#" onClick={() => removeFromCart(product.id)}>
                                                                <i className="pe-7s-close"></i>
                                                            </a>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <img src={product.featured_image_url} alt='' width={90} height={90} />
                                                        </td>
                                                        <td className="product-name">
                                                            <a href={`/product/${product.id}`}>{product.product_name}</a>
                                                        </td>
                                                        <td className="product-price-cart">
                                                            <span className="amount">${product.price ? product.price.toFixed(2) : '0.00'}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <input
                                                                type="number"
                                                                value={product.quantity}
                                                                min="1"
                                                                onChange={(e) => updateCartQuantity(product.id, parseInt(e.target.value))}
                                                            />
                                                        </td>
                                                        <td className="product-subtotal">${(product.price || 0) * product.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="row">
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
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-5 ms-auto">
                                        <div className="col-md-5 ms-auto">
                                            <div className="cart-page-total">
                                                <h2>Cart totals</h2>
                                                <ul>
                                                    <li>Subtotal<span>${getTotal().toFixed(2)}</span></li>
                                                    <li>Total<span>${getTotal().toFixed(2)}</span></li>
                                                </ul>
                                                <button className='mt-2' type="button" onClick={handleCheckout} style={{ backgroundColor: "#333", color: "#fff", padding: "11px 20px", border: "none", outline: 'none' }}>Proceed to checkout</button>
                                            </div>
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
    );
};

export default Cart;
