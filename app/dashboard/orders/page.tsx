'use client';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/dashboard/dashboard.module.css';
import { apiUrl } from '@/app/api/apiServices';

const OrdersView = () => {
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [orders, setOrders] = useState<any[]>([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCustomerId = localStorage.getItem('customer_id');
      setCustomerId(storedCustomerId);
    }
  }, []); 

  useEffect(() => {
    const fetchOrders = async () => {
      if (customerId) {
        try {
          const response = await fetch(`${apiUrl}/orders/${customerId}`);
          if (response.ok) {
            const data = await response.json();
            console.log("orders : ", data)
            setOrders(data); 
          } else {
            throw new Error(`Failed to fetch orders: ${response.statusText}`);
          }
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchOrders();
  }, [customerId]);


  return (
    <div className={styles.ordersView}>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Location</th>
            <th>Actions</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.delivery_date}</td>
              <td>{order.total}</td>
              <td>{order.shipping_address}</td>
              <td>{order.order_status}</td>
              <td>
                <a href={`#`}>
               <b>View Invoice</b>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersView;