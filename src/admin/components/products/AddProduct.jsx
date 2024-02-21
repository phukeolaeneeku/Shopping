import React from 'react';
import './addProucts.css';
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { IoCameraSharp } from "react-icons/io5";
import banner1 from "../../../img/banner1.png";
import imageicon from "../../../img/imageicon.jpg";
import productImage from "../../../img/productImage.png";
import { FaPencil } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

function AddProduct() {
    const [category, set_category] = useState(6);
    const [goods_list, set_goods_list] = useState([]);

    const [val, setVal] = useState([]);

    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }

    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }


    useEffect(() => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_API + `/store/?category=${category}`,
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .request(config)
            .then((response) => {
                set_goods_list(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);



    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("price", product.price);
            formData.append("category", product.category);
            formData.append("description", product.description);

        } catch (error) {
            console.error("Error submitting form:", error);
        }
        console.log(product);
    };

    //PopUp box add banner
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    //PopUp box add image
    const [isPopupimage, setPopupimage] = useState(false);

    const togglePopupimage = () => {
        setPopupimage(!isPopupimage);
    };

    //PopUp box add name
    const [isPopupname, setPopupname] = useState(false);

    const togglePopupname = () => {
        setPopupname(!isPopupname);
    };
    //PopUp box add price
    const [isPopupprice, setPopupprice] = useState(false);

    const togglePopupprice = () => {
        setPopupprice(!isPopupprice);
    };
    //PopUp box add category
    const [isPopupcategory, setPopupcategory] = useState(false);

    const togglePopupcategory = () => {
        setPopupcategory(!isPopupcategory);
    };
    //PopUp box add description
    const [isPopupdescription, setPopupdescription] = useState(false);

    const togglePopupdescription = () => {
        setPopupdescription(!isPopupdescription);
    };


    return (
        <>
            <div className="box_store">
                <div className="store_container_management">
                    <div className="store_item_head">
                        <Link to="/product" className="back_icons_back">
                            <IoIosArrowBack />
                            <p>Back</p>
                        </Link>
                        <div className="title_nameStore">
                            <h3>online shop</h3>
                        </div>
                        <div></div>
                    </div>
                    <div className="banner_no_box">
                        <div className="banner_no_box_img">
                            <img src={banner1} alt="" />
                        </div>
                        <div className="edit_image">
                            <a className="trigger_popup_fricc" onClick={togglePopup}>
                                <IoCameraSharp />
                            </a>
                            {/* PopUp box add banner */}
                            {isPopupVisible && (
                                <form className="hover_bkgr_fricc">
                                    <p>Image banner</p>
                                    <div className="popupCloseButton" onClick={togglePopup}>
                                        &times;
                                    </div>
                                    <label className="popup_txt_Boximagae">
                                        <input type="file" name="image" />
                                    </label>
                                    <button className="banner_confirm_btn">Confirm</button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="group_container_product">
                        {val.map((data, i) => {
                            return (
                                <div>
                                    <div className="addProduct_box_content_afterThat">
                                        <div className='deleteBox_productconotent' onClick={() => handleDelete(i)}><AiOutlineDelete /></div>
                                        <img src={imageicon} alt="image" />

                                        <div className="edit_image">
                                            <a className="trigger_popup_fricc" onClick={togglePopupimage}>
                                                <IoCameraSharp />
                                            </a>
                                            {/* PopUp box add banner */}
                                            {isPopupVisible && (
                                                <form className="hover_bkgr_fricc">
                                                    <p>Image banner</p>
                                                    <div className="popupCloseButton" onClick={togglePopup}>
                                                        &times;
                                                    </div>
                                                    <label className="popup_txt_Boximagae">
                                                        <input type="file" name="image" />
                                                    </label>
                                                    <button className="banner_confirm_btn">Confirm</button>
                                                </form>
                                            )}
                                        </div>

                                        <div className='box_txt_andIconn_addproduct'>
                                            <p>Name</p>
                                            <div className='icon_penAddproduct'>
                                                <FaPencil onClick={togglePopupname} />
                                            </div>
                                        </div>
                                        <div className='box_txt_andIconn_addproduct'>
                                            <p>Price</p>
                                            <div className='icon_penAddproduct'>
                                                <FaPencil onClick={togglePopupprice} />
                                            </div>
                                        </div>
                                        <div className='box_txt_andIconn_addproduct'>
                                            <p>Category</p>
                                            <div className='icon_penAddproduct'>
                                                <FaPencil onClick={togglePopupcategory} />
                                            </div>
                                        </div>
                                        <div className='box_txt_andIconn_addproduct'>
                                            <p>Description</p>
                                            <div className='icon_penAddproduct'>
                                                <FaPencil onClick={togglePopupdescription} />
                                            </div>
                                        </div>

                                        {isPopupimage && (
                                            <form className="background_addproductpopup_box">
                                                <div className="hover_addproductpopup_box">
                                                    <div className="divsdfsdsf">
                                                        <p>Add product image</p>
                                                        <input type="file" className='input_of_txtAddproduct' />
                                                    </div>
                                                    <div className="btn_foasdf">
                                                        <button className='btn_cancel btn_addproducttxt_popup' onClick={togglePopupimage}>Cancel</button>
                                                        <button className='btn_confirm btn_addproducttxt_popup'>OK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}

                                        {isPopupname && (
                                            <form className="background_addproductpopup_box">
                                                <div className="hover_addproductpopup_box">
                                                    <div className="divsdfsdsf">
                                                        <p>Add product name</p>
                                                        <input type="text" placeholder='Product name...' className='input_of_txtAddproduct' />
                                                    </div>
                                                    <div className="btn_foasdf">
                                                        <button className='btn_cancel btn_addproducttxt_popup' onClick={togglePopupname}>Cancel</button>
                                                        <button className='btn_confirm btn_addproducttxt_popup'>OK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                        {isPopupprice && (
                                            <form className="background_addproductpopup_box">
                                                <div className="hover_addproductpopup_box">
                                                    <div className="divsdfsdsf">
                                                        <p>Add product price</p>
                                                        <input type="text" placeholder='Product price...' className='input_of_txtAddproduct' />
                                                    </div>
                                                    <div className="btn_foasdf">
                                                        <button className='btn_cancel btn_addproducttxt_popup' onClick={togglePopupprice}>Cancel</button>
                                                        <button className='btn_confirm btn_addproducttxt_popup'>OK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                        {isPopupcategory && (
                                            <form className="background_addproductpopup_box">
                                                <div className="hover_addproductpopup_box">
                                                    <form className="divsdfsdsf">
                                                        <label >Add product category</label>
                                                        <select className="input_of_txtAddproduct">
                                                            <option>category1</option>
                                                            <option>category2</option>
                                                            <option>category3</option>
                                                        </select>
                                                    </form>
                                                    <div className="btn_foasdf">
                                                        <button className='btn_cancel btn_addproducttxt_popup' onClick={togglePopupcategory}>Cancel</button>
                                                        <button className='btn_confirm btn_addproducttxt_popup'>OK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                        {isPopupdescription && (
                                            <form className="background_addproductpopup_box">
                                                <div className="hover_addproductpopup_box">
                                                    <div className="divsdfsdsf">
                                                        <p>Add product description</p>
                                                        <input type="text" placeholder='Product description...' className='input_of_txtAddproduct' />
                                                    </div>
                                                    <div className="btn_foasdf">
                                                        <button className='btn_cancel btn_addproducttxt_popup' onClick={togglePopupdescription}>Cancel</button>
                                                        <button className='btn_confirm btn_addproducttxt_popup'>OK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}

                                    </div>
                                </div>
                            )
                        })}
                        <div onClick={() => handleAdd()} className="addProduct_box_content">
                            <div className="addplue_ofProduct">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct