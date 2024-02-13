import React from 'react'
import "./users.css"
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    // prev next button user in react
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_adminusers'>
                    <div className='box_users'>
                        <h2>Users</h2>
                        <form className="search">
                            <div className="search-box_menageruser">
                                <input 
                                    type="text" 
                                    placeholder="Search ..." 
                                />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    </div>
                   
                    <div className='box_users_user' >
                        <Link to='/users/user' className='box_user_text'>
                            <img src='' alt='image'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className='box_users_user' >
                        <Link to='/users/user' className='box_user_text'>
                            <img src='' alt='image'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                       

                    <div className="box_container_next_product">
                        <button className="box_prev_left_product" onClick={prePage}>
                        <AiOutlineLeft id="box_icon_left_right_product" />
                        <p>Prev</p>
                        </button>

                        <div className="box_num_product">
                        {numbers.map((n, i) => (
                            <div
                            className={`page-link ${currentPage === n ? "active" : ""}`}
                            key={i}
                            >
                            <div className="num_admin_product">
                                <p onClick={() => changeCPage(n)}>{n}</p>
                            </div>
                            </div>
                        ))}
                        </div>

                        <button className="box_prev_right_product" onClick={nextPage}>
                        <p>Next</p>
                        <AiOutlineRight id="box_icon_left_right_product" />
                        </button>
                    </div>
                      
                </div>   
            </div>
        </section>
    </>
  )
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(userID) {
    setCurrentPage(userID);
  }
}

export default Users;