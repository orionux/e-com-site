"use client";

import Layout from '@/Components'
import React, { useEffect, useState } from 'react'
import { addToCart } from '../utils';

const FavProducts = () => {
    const [favorite, setFavorite] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('favorite') || '[]');
            setFavorite(storedCart);
        }
    }, []);

    const removeFromCart = (productId: any) => {
        const updatedCart = favorite.filter((item) => item.id !== productId);
        setFavorite(updatedCart);
        localStorage.setItem('favorite', JSON.stringify(updatedCart));
    };

    const updateCartQuantity = (productId: any, newQuantity: number) => {
        const updatedCart = favorite.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setFavorite(updatedCart);
        localStorage.setItem('favorite', JSON.stringify(updatedCart));
    };
    return (
        <Layout>
            <div className="cart-main-area pt-95 pb-100 wishlist" style={{minHeight:'80vh'}}>
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
                                            {favorite.map((product, index) => (
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
                                                        <span className="amount">${product.price}</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            value={product.quantity}
                                                            min="1"
                                                            onChange={(e) => updateCartQuantity(product.id, parseInt(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="product-subtotal">
                                                    <button className='mt-2' type="button"  onClick={() => addToCart(product)} style={{ backgroundColor: "#333", color: "#fff", padding: "11px 20px", border: "none", outline: 'none' }}>Add to Cart</button>
                                                    </td>
                                                </tr>
                                            ))}
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
