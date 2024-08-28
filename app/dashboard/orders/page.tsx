import React from 'react';
import styles from '../../../styles/dashboard/dashboard.module.css';

const OrdersView = () => {
  const orders = [
    {
      orderNumber: '#12343',
      date: '12-jun-2023',
      total: '12500.00',
      shippingStatus: 'Horana - Ongoing',
      actions: 'Payment done',
      //invoice: 'See the Invoice',
    },
    {
      orderNumber: '#12343',
      date: '12-jun-2023',
      total: '12500.00',
      shippingStatus: 'Horana - Ongoing',
      actions: 'Payment done',
      //invoice: 'See the Invoice',
    },
    {
      orderNumber: '#12343',
      date: '12-jun-2023',
      total: '12500.00',
      shippingStatus: 'Horana - Ongoing',
      actions: 'Payment done',
      //invoice: 'See the Invoice',
    },
  ];

  return (
    <div className={styles.ordersView}>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>#Order</th>
            <th>Date</th>
            <th>Total</th>
            <th>Tax</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.shippingStatus}</td>
              <td>{order.actions}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersView;