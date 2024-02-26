import React from 'react'
import "./users.css"
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import user from '../../../img/users.png'
import users from '../../../img/users.png'


const Users = () => {
    const [users, setUsers] = useState([
        {
            userID: 1, 
            userName: "Sompong", 
            email: "sompong@gmail.com", 
            image: [user]
        },
        {
            userID: 2, 
            userName: "Sompheng", 
            email: "sompheng@gmail.com", 
            image: [user]
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

      // Filter user based on search 
      const filtereduser = users.filter((user) => {
        const nameMatch = user.userName.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
    });

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
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    </div>
                    {filtereduser && records.map((user) => (
                        <div key={user.userID}>
                            <div className='box_users_user' >
                                <Link to='/users/user' className='box_user_text'>
                                    <img src={users} alt="img" />
                                    <div className='container_chat_name'>
                                        <h4>Name: {user.userName}</h4>
                                        <p>Eamil: {user.email}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    ))}
                       

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