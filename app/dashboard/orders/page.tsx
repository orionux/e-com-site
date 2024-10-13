"use client";
import React, { useEffect, useState } from "react";
import {
  getCustomerProductData,
  getOrderData,
  getTokenFromCookies,
} from "@/app/api/apiServices";
import Image from "next/image";
import Modal from "@/Components/Model";
import { Button } from "react-bootstrap";

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
  invoice_url: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const openModal = (order: any) => {
    setIsModalOpen(true);
    setSelectedOrder(order);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

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

  const productData = customerProductData;

  return (
    <div>
      <div>
        <div>
          {/* <button
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
            Order Requests
          </button> */}
        </div>
        {/* {isOrderTab ? ( */}
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
                      <button
                        onClick={() => window.open(order.invoice_url, "_blank")}
                        style={{
                          backgroundColor: "#606B6E",
                          border: "none",
                          color: "#fff",
                          padding: "8px 20px",
                          borderRadius: "8px",
                        }}
                      >
                        View Invoice
                      </button>

                      {/* <Modal isOpen={isModalOpen} onClose={closeModal} title="">
                        <div className="invoice-container p-3">
                          {order.order_products.map((item) => (
                            <div
                              key={item.product_id}
                              className="invoice-item mb-4 p-3 border rounded"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <h5>Product Details</h5>
                                  <p>
                                    <strong>Order ID:</strong> {item.order_id}
                                  </p>
                                  <p>
                                    <strong>Product ID:</strong>{" "}
                                    {item.product_id}
                                  </p>
                                  <p>
                                    <strong>Product:</strong> {item.product}
                                  </p>
                                  <p>
                                    <strong>Batch:</strong> {item.batch}
                                  </p>
                                </div>
                                <div className="col-md-6">
                                  <h5>Pricing & Quantity</h5>
                                  <p>
                                    <strong>Quantity:</strong> {item.quantity}
                                  </p>
                                  <p>
                                    <strong>Price:</strong> ${item.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="d-flex justify-content-end">
                            <button
                              onClick={closeModal}
                              style={{
                                backgroundColor: "#606B6E",
                                border: "none",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                cursor: "pointer",
                              }}
                            >
                              Close
                            </button>
                          </div>

                          <style jsx>{`
                            .invoice-container {
                              background-color: #f9f9f9;
                              border-radius: 10px;
                              width: 100%;
                            }
                            .invoice-item {
                              background-color: #fff;
                              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }
                            .invoice-item h5 {
                              color: #333;
                            }
                            .invoice-item p {
                              margin: 5px 0;
                              color: #555;
                            }
                          `}</style>
                        </div>
                      </Modal> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* // ) : (
          
        // )} */}
      </div>
    </div>
  );
};

export default OrdersView;
