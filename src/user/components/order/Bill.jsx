import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../img/Logo.png";
import storename from "../../../img/storename.png";

import "./bill.css";
const Bill = () => {
  // Orders
  const [orders, setOrders] = useState([
    {
      orderID: 2,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "Sesame",
          price: 8.500,
          amount: 5,
          delivery: 2.500
        },
        {
          productID: 2,
          productName: "Seasoned",
          price: 7.500,
          amount: 5,
          delivery: 3.500
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
          productID: 3,
          productName: "Stir-fried",
          price: 9.250,
          amount: 5,
          delivery: 2.500
        },
        {
          productID: 2,
          productName: "Seasoned",
          price: 7.500,
          amount: 5,
          delivery: 3.500
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    
  ]);

  // users
  const [users, setUsers] = useState([]);

  // Get order ID
  const location = useLocation();
  const { id } = location.state;
  const [getId, setGetId] = useState(id);

  const filteredOrders = orders
    .filter((order) => order.orderID === getId) // Filter orders by userID = 2 (Sam)
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

     // Handle checked popular
    const handlePopular = (event) => {
      setPopular(event.target.checked);
    };

  return (
    <>
      <Header></Header>
      <section id="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        {filteredOrders.map((order) => (
          <div className="bill-detial newspanBox" key={order.orderID}>
            <div className="logo_image">
              <div className="name_store"><div><img src={storename} alt="Logo" /></div></div>
              <div className="logo_store"><Link to="/"><img src={Logo} alt="Logo" /></Link></div>
            </div>
            <div className="guopoidHead">
              <div className="idf">
                <p>OrderID: {order.orderID}</p>
              </div>
            </div>
            <hr />
            <div className="billGopBox">
              <table>
                <thead>
                  <tr>
                    <div className="popular">
                      <input
                        type="checkbox"
                        id="popular"
                      />
                    </div>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    {/* <th>Discount</th> */}
                    <th>delivery</th>
                  </tr>
                </thead>
                <hr className="hr"/>
                {order.products.map((product) => (
                  <tbody key={product.productID}>
                    <tr>
                      <div className="popular">
                        <input
                          type="checkbox"
                          id="popular"
                        />
                      </div>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
                      <td>{product.amount}</td>
                      {/* <td>..</td> */}
                      <td>${product.delivery}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <hr />
            <div className="titlePrice">
              <p>Total:</p>
              <p>${order.totalPrice}</p>
            </div>
            <div className="box_btn_product">
              <div className="btn_delete_save">
                <button className="btn_delete_order">Delete selected</button>
                <button className="btn_save">Save selected</button>
              </div>
              <div className="btn_select_all">
                <button className="btn_order_select">Order selected</button>
                <button className="btn_order_all">Order all</button>
              </div>
            </div>
            <div className="place-on">
              <p>Place on: {order.orderDate}</p>
              <p>Payment method: {order.payment}</p>
              <p>Status: {order.status}</p>
              <p>Delivery: {order.delivery}</p>
            </div>
          </div>
        ))}
      </section>
      <Menu />
    </>
  );
};

export default Bill;
