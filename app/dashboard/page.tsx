"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard/dashboard.module.css";
import { useUser } from "@/context/UserContext";
import Modal from "@/Components/Model";
import { getCustomerProductData, getTokenFromCookies } from "../api/apiServices";
import { Orders } from "../types/types";


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

const DashboardView = () => {
  const { customerName } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [customerProductData, setCustomerProductData] = useState<
    CustomerProductData[] | null
  >(null);

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

    const fetchCustomerProductData = async () => {
      const token = getTokenFromCookies();
      if (storedCustomerId && token) {
        const products = await getCustomerProductData(storedCustomerId, token);
        setCustomerProductData(products);
      }
    };

    fetchCustomerProductData();
  }, [storedCustomerId]);

  
  // console.log("customerProductData:", customerProductData);

  if (!customerProductData || customerProductData.length === 0) {
    return <p>No customer product data available.</p>;
  }

  const productData = customerProductData;

  const handleExplorerClick = () => {
    window.location.href = "/product";
  };

  // console.log({  customerName });

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.welcomeContainer}>
        <h3 className={styles.welcomeText}>Welcome!</h3>
        <h1 className={styles.userName}>{customerName || "Guest"}</h1>
        <p className={styles.description}>
          From your account dashboard, you can easily check & view your recent
          orders, manage your shipping and billing addresses, and edit your
          password and account details.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.explorerButton} onClick={handleExplorerClick}>
          Explore More
        </button>
      </div>
      {/* Uncomment this section to show the welcome image */}
      {/* 
      <div className={styles.imageContainer}>
        <Image
          src="/assets/img/dashboard/welcome.png"
          alt="Welcome Image"
          width={405}
          height={466}
        />
      </div>
      */}
      <div className="w-100 my-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Products count</th>
                  <th scope="col">Date</th>
                  <th scope="col">View Products</th>
                  {/* <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Details</th>
                  <th scope="col">Status</th> */}
                </tr>
              </thead>
              <tbody>
                {productData.length > 0 ? (
                  productData.map((order: any) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.products.length}</td>
                      <td>{new Date(order.created_at).toLocaleDateString()}</td>
                      <td>
                        <button style={{
                          backgroundColor: "#606B6E",
                          border: "none",
                          color: "#fff",
                          padding: "8px 20px",
                          borderRadius: "8px",
                        }} onClick={() => openModal(order)}>
                          View Products
                        </button>
                        <Modal isOpen={isModalOpen} onClose={closeModal} title="">
                          <div className="invoice-container p-3">
                            {selectedOrder ? (
                              <div>
                                <h5>Order ID: {selectedOrder.id}</h5>
                                <h6>Customer ID: {selectedOrder.customer_id}</h6>
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Image</th>
                                      <th>Product Name</th>
                                      <th>Quantity</th>
                                      <th>Description</th>
                                      {/* <th>Status</th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedOrder.products?.map((product: any) => (
                                      <tr key={product.product_id}>
                                        <td>
                                          <img
                                            src={product.details?.featured_image_url}
                                            alt={product.details?.product_name}
                                            style={{ width: '80px', height: '80px' }}
                                          />
                                        </td>
                                        <td>{product.details?.product_name}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                          {product.details?.description.split(' ').length >
                                            20
                                            ? product.details?.description
                                              .split(' ')
                                              .slice(0, 20)
                                              .join(' ') + '...'
                                            : product.details?.description}
                                        </td>
                                        {/* <td>{product.details?.status}</td> */}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <p>No products found for this order.</p>
                            )}

                            <div className="d-flex justify-content-end">
                              <button
                                onClick={closeModal}
                                style={{
                                  backgroundColor: '#606B6E',
                                  border: 'none',
                                  color: '#fff',
                                  padding: '10px 20px',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
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
                        </Modal>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No orders available.</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
    </div>
  );
};

export default DashboardView;
