import React, { useState } from 'react'
import "./orderBill.css";
import AdminMenu from '../adminMenu/AdminMenu';
import { useLocation } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OrderBill = () => {

  const [orders, setOrders] = useState([
    {
      orderID: 1,
      userID: 2,
      products: [
        {
          productID: 1,
          productName: "Sesame",
          amount: 2,
          price: 15,
          delivery: 2.300
        },
        {
          productID: 2,
          productName: "Seasoned",
          amount: 2,
          price: 10,
          delivery: 3.500
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 2,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "Nike",
          amount: 2,
          price: 10,
          delivery: 3.00
        },
        {
          productID: 2,
          productName: "Food",
          amount: 2,
          price: 100,
          delivery: 3.100
        },

        {
          productID: 3,
          productName: "Food2",
          amount: 2,
          price: 10,
          delivery: 1.200
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 3,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "Food3",
          amount: 2,
          price: 10,
          delivery: 2.100
        },
        {
          productID: 1,
          productName: "Food4",
          amount: 2,
          price: 120,
          delivery: 4.100
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 4,
      userID: 3,
      products: [
        {
          productID: 1,
          productName: "Food5",
          amount: 2,
          price: 150,
          delivery: 2.800
        },
        {
          productID: 1,
          productName: "Food6",
          amount: 2,
          price: 10,
          delivery: 2.900
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 5,
      userID: 4,
      products: [
        {
          productID: 1,
          productName: "Food7",
          amount: 2,
          price: 170,
          delivery: 3.100
        },
        {
          productID: 1,
          productName: "Food8",
          amount: 2,
          price: 10,
          delivery: 2.100
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 6,
      userID: 5,
      products: [
        {
          productID: 1,
          productName: "Food9",
          amount: 2,
          price: 190,
          delivery: 4.100
        },
        {
          productID: 1,
          productName: "Food10",
          amount: 2,
          price: 10,
          delivery: 5.100
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    
]);

  // users
  const [users, setUsers] = useState([
    { userID: 1, name: "John Doe", email: "john@gmail.com" },
    { userID: 2, name: "Sam", email: "sam@gmail.com" },
    { userID: 3, name: "Will", email: "wil@gmail.com" },
  ]);


  const filteredOrders = orders
    .filter((order) => order.orderID === 1) // Filter orders by orderID
    .map((order) => {
      const user = users.find((user) => user.userID === order.userID); // Find user details for the order

      // Calculate total price
      const totalPrice = order.products.reduce((total, product) => {
        return total + product.price * product.amount + product.delivery;
      }, 0);

      return {
        orderID: order.orderID,
        userID: order.userID,
        products: order.products,
        orderDate: order.orderDate,
        status: order.status,
        payment: order.payment,
        delivery: order.delivery,
        totalPrice: totalPrice,
      };
    });

  // Completion
  let statusDelivery = ''
  if (filteredOrders) {
    filteredOrders.forEach((order) => (
      statusDelivery = order.status
    ))
  }
  const [status, setStatus] = useState(statusDelivery)

  // Handle status
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(status)
  }



  return (
    <>
      <AdminMenu />
      <section id="abill">

        {filteredOrders.map((order) => (
          <div className="abill-detial" key={order.orderID}>
            <div className='box_icon_backOrderbill'>
              <Link to="/orderpage" className='box_link_orderpage'>
                <FaAngleLeft id='box_icon_Back' />
                <p>Back</p>
              </Link>
              <h2>Order</h2>
              <div></div>
            </div>
            <div className="aguopoidHead">
              <div className="aidf">
                <p>OrderID: {order.orderID}</p>
              </div>
            </div>
            <hr />
            <div className="abillGopBox">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Delivery</th>
                  </tr>
                </thead>
                {order.products.map((product) => (
                  <tbody key={product.productID}>
                    <tr>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
                      <td>{product.amount}</td>
                      <td>${product.delivery}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <hr />
            <div className="atitlePrice">
              <h3>Total:</h3>
              <p>${order.totalPrice}</p>
            </div>
            <div className="aplace-on">
              <p>Place on: {order.orderDate}</p>
              <p>Payment method: {order.payment}</p>
              <form onSubmit={handleSubmit}>
                <select value={status} onChange={handleStatus}>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                <button type='submit' >Confirm</button>
              </form>
              <p>Delivery: {order.delivery}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default OrderBill