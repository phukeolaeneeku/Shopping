import React from 'react'
import './store.css'
import { IoSearchOutline } from "react-icons/io5";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

function Store() {
    return (
        <>
            <section id="menager">
                <AdminMenu />
                <div className="container_body_adminuser">
                    <div className="container_box_users">
                        <div className="box_users">
                            <div className="box_add_admin">
                                <Link to="#" className="btn_addadmin">
                                    <BiPlus id="icon_add_admin" />
                                    Add Store
                                </Link>
                            </div>

                            <form className="search">
                                <div className="search-box_menageruser">
                                    <input type="text" placeholder="Search ..." />
                                    <button type="submit">
                                        <IoSearchOutline />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="box_contanier_stoerNumonevb">
                            <div className="box_contanier_stoer">
                                <p>Store name</p>
                                <div className='btn_box_Cont'>
                                    <button className='delete_storeDetails'>Delete</button>
                                    <button className='viewMore_storeDetails'>View</button>
                                </div>
                            </div>
                            <div className="box_contanier_stoer">
                                <p>Store name</p>
                                <div className='btn_box_Cont'>
                                    <button className='delete_storeDetails'>Delete</button>
                                    <button className='viewMore_storeDetails'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Store