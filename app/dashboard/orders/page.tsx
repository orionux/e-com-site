"use client";
import React, { useEffect, useState } from "react";
import {
  getCustomerProductData,
  getOrderData,
  getTokenFromCookies,
} from "@/app/api/apiServices";
import Image from "next/image";

interface OrderProduct {
  product_id: number;
  order_id: number;
  product: number;
  batch: number;
  price: number;
  quantity: number;
}

interface Order {
  order_products: OrderProduct[];
  id: number;
  sales_order_number: string;
  total: number;
  order_date: string;
}

interface ProductDetails {
  id: number;
  slug: string;
  product_name: string;
  product_code: string;
  parent_category: string;
  sub_category: string;
  supplier: string;
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
}

interface Product {
  product_id: number;
  quantity: number;
  details: ProductDetails;
}

interface CustomerProductData {
  id: number;
  customer_id: string;
  products: Product[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

type Props = {
  customerProductData: CustomerProductData[] | null;
};

const OrdersView: React.FC = () => {
  const [orderData, setOrderData] = useState<Order[]>([]);
  const [customerProductData, setCustomerProductData] = useState<
    CustomerProductData[] | null
  >(null);
  const [isOrderTab, setIsOrderTab] = useState(true);

  const storedCustomerId =
    typeof window !== "undefined" ? localStorage.getItem("id") : null;

  useEffect(() => {
    const fetchOrderData = async () => {
      const token = getTokenFromCookies();
      if (storedCustomerId && token) {
        const orders = await getOrderData(storedCustomerId, token);
        setOrderData(orders);
      }
    };

    const fetchCustomerProductData = async () => {
      const token = getTokenFromCookies();
      if (storedCustomerId && token) {
        const products = await getCustomerProductData(storedCustomerId, token);
        setCustomerProductData(products);
      }
    };

    fetchOrderData();
    fetchCustomerProductData();
  }, [storedCustomerId]);

  // console.log("customerProductData:", customerProductData);

  if (!customerProductData || customerProductData.length === 0) {
    return <p>No customer product data available.</p>;
  }

  const productData = customerProductData[0];

  return (
    <div>
      <div>
        <div>
          <button
            onClick={() => setIsOrderTab(true)}
            className={isOrderTab ? "active" : ""}
            style={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              backgroundColor: isOrderTab ? "#606B6E" : "#e0e0e0",
              color: isOrderTab ? "#e0e0e0" : "#606B6E",
              border: "none",
              padding: "5px 20px",
            }}
          >
            Orders
          </button>

          <button
            onClick={() => setIsOrderTab(false)}
            className={!isOrderTab ? "active" : ""}
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              backgroundColor: !isOrderTab ? "#606B6E" : "#e0e0e0",
              color: !isOrderTab ? "#e0e0e0" : "#606B6E",
              border: "none",
              padding: "5px 20px",
            }}
          >
            Customer Requests
          </button>
        </div>
        {isOrderTab ? (
          <div className="w-100 my-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Sales Order Number</th>
                  <th scope="col">Total</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orderData?.map((order) => (
                  <tr key={order.id}>
                    <td scope="row">{order.id}</td>
                    <td>{order.sales_order_number}</td>
                    <td>{order.total}</td>
                    <td>{order.order_date}</td>
                    <td>
                      Invoice
                      {order.order_products.map((item) => (
                        <div
                          key={item.product_id}
                          className="d-flex flex-column"
                        >
                          <span>Order id: {item.order_id}</span>
                          <span>Prucuct id: {item.product_id}</span>
                          <span>Product : {item.product}</span>
                          <span>Batch : {item.batch}</span>
                          <span>Quentity : {item.quantity}</span>
                          <span>Price : {item.price}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-100 my-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Details</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {productData.products.length > 0 ? (
                  productData.products.map((product: Product) => (
                    <tr key={product.product_id}>
                      <td scope="row" style={{ width: '80px' }}>{product.product_id}</td>
                      <td className="d-flex justify-content-center align-items-center" style={{ width: '100px' }}>
                        <Image
                          src={product.details.featured_image_url}
                          alt="product"
                          width={80}
                          height={80}
                          style={{height:'100px', width: 'auto'}}
                        />
                      </td>
                      <td>{product.details.product_name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.details.description}</td>
                      <td>{product.details.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No products available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersView;
