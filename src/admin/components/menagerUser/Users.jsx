import React, { useEffect, useState } from "react";
import "./users.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import user from "../../../img/user.png";


const Users = () => {

    return (
        <>
          <AdminMenu />
          <div className="container_body_adminuser">
            <div className="container_box_adminusers">
              <div className="box_users">
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
    
    
              <div className="box_users_user">
                <div className="box_dp_txtandiamge">
                  <div className="box_user_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="box_user_text">
                    <p>name</p>
                    <p>Email</p>
                  </div>
                </div>
                <div className='btn_box_Cont'>
                  <button className='delete_storeDetails'>Delete</button>
                  <Link to="/user" className='viewMore_storeDetails'>View</Link>
                </div>
              </div>
    
              <div className="box_users_user">
                <div className="box_dp_txtandiamge">
                  <div className="box_user_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="box_user_text">
                    <p>name</p>
                    <p>Email</p>
                  </div>
                </div>
                <div className='btn_box_Cont'>
                  <button className='delete_storeDetails'>Delete</button>
                  <Link to="/user" className='viewMore_storeDetails'>View</Link>
                </div>
              </div>
    
    
              <div className="box_container_next_product">
                <button className="box_prev_left_product" >
                  <AiOutlineLeft id="box_icon_left_right_product" />
                  <p>Prev</p>
                </button>
    
                <div className="box_num_product">
                  <div className="num_admin_product">
                    <p >1</p>
                  </div>
                </div>
    
                <button className="box_prev_right_product" >
                  <p>Next</p>
                  <AiOutlineRight id="box_icon_left_right_product" />
                </button>
              </div>
            </div>
          </div>
        </>
      );    
}

export default Users;