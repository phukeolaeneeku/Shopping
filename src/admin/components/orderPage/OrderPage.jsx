import React from 'react'
import "./orderpage.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import AdminMenu from '../adminMenu/AdminMenu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from 'react-icons/io5';

const OrderPage = () => {
    //OrderPage
    const [orders, setOrders] = useState([
        {
          orderID: 1,
          userID: 2,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              size: "m",
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
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro2",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colW",
              size: "l",
            },
    
            {
              productID: 3,
              productName: "pro3",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "xl",
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
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
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
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
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
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
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
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
        {
          orderID: 7,
          userID: 6,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
        {
          orderID: 8,
          userID: 7,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
        {
          orderID: 9,
          userID: 5,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // send order ID
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleOrder = (id) => {
        setId(id);
        navigate("/orderbill/", { state: { id: id } });
    };


    //Search orderID 
     const filteredOrder = orders.filter((order) => {
      const idMatch = searchTerm !== "" ? order.orderID == parseInt(searchTerm): true;
      return idMatch;
    });

    // prev next button user in react
    const [currentPage, setCurrentPage] = useState(1) 
    const recordsPerPage = 4
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredOrder.slice(firstIndex, lastIndex)
    const npage = Math.ceil(filteredOrder.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1) 


    return (
        <>
            <AdminMenu />
            <section id='menager'>
              <div className='container_box_orderpage'>
                <div className='box_head_search'>
                  <h2>Order</h2>
                  <form className="search">
                    <div className="search-box_menageruser">
                        <input 
                          type="text" 
                          placeholder="Search ..." 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        <button type="submit">
                        <IoSearchOutline />
                        </button>
                    </div>
                  </form>
                </div>
                
                {records.map((order) => (
                    <div key={order.orderID}>
                        <form className='box_users_order'>
                          <div className='box_order_text'>
                            <p>No: {order.orderID}</p>
                            <div>
                                {order.products.slice(0, 2).map((product, index) => (
                                    <span key={product.productID}>
                                        {product.productName}
                                        {index === 0 && order.products.length > 1
                                        ? ", " : " ..."}
                                    </span>
                                ))}
                            </div>
                          </div>
                          <div className='box_container_time'>
                              <p>{order.orderDate}</p>
                          </div>
                          <div className='container_order_icon'>
                              <div className='btn_pending'>
                                  Pending
                              </div>
                              <button className='btn_view' onClick={() => handleOrder(order.orderID)}>
                                  View
                              </button>
                          </div>
                        </form>
                    </div>
                ))}

                <div className='box_next_order'>
                  <button className='box_prev_next_order' onClick={prePage}>
                    <AiOutlineLeft id="box_prev_next_icon" />
                    <p>Prev</p>
                  </button>
                  <div className='box_num_order'>
                    {
                      numbers.map((n, i) => (
                        <div className={`page-link ${currentPage === n? 'active' : ''}`} key={i}>
                            <div className='num_admin'>
                                <p onClick={()=> changeCPage(n)} >{n}</p>
                            </div> 
                        </div>
                      ))
                    }
                  </div>
                  
                  <button className='box_prev_nexts_order' onClick={nextPage}>
                    <p>Next</p>
                    <AiOutlineRight id="box_prev_next_icon" />
                  </button>
                </div>
              </div>
            </section>
        </>
    )
    function prePage() {
      if(currentPage !== 1) {
          setCurrentPage(currentPage - 1)
      }
    }
    function nextPage() {
      if(currentPage !== npage) {
          setCurrentPage(currentPage + 1)
      }
    }
    function changeCPage(userID) {
      setCurrentPage(userID)
    }
}

export default OrderPage