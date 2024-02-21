import React, { useState, useRef } from 'react';
import AdminMenu from "../adminMenu/AdminMenu";
import './post.css'
import imageicon from "../../../img/imageicon.jpg";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCameraSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";

const Post = () => {
    const [mainImage, setMainImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [popular, setPopular] = useState(false);

    
    
    // handle Product name
    const handleProductName = (e) => {
        const value = e.target.value
        setProductName(value)
    };

    // handle Product price
    const handleProductPrice = (e) => {
        const value = e.target.value
        setPrice(value)
    };

    //popular
    const handlePopularChange = (event) => {
        setPopular(event.target.checked);
    };

    // image handle
    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setMainImage([file]);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleonClick = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted!");
        // Reset form fields and states after submission
        setMainImage(null);
        setProductName('');
        setPrice('');
        setPopular(false);
    };


    //////////Add form Post Porduct
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

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("price", product.price);
            
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        console.log(product);
    };


    return (
        <>
            <AdminMenu />
            <section id="post">
                <div className="boxcontainerSpan_Box"></div>
                <div className="box_container_product">
                    <div className="box_text">
                        <h2>Post Product</h2>
                    </div>
                    
                    <div className="group_container_product">
                        {val.map((data, i) => {
                            return (
                                <div>
                                    <div className="addProduct_box_content_afterThat">
                                        <div className='deleteBox_productconotent' onClick={() => handleDelete(i)}><AiOutlineDelete /></div>
                                        <div className="box_input-img">
                                            <div className="img">
                                                <label htmlFor="img">
                                                    {(mainImage && mainImage.length > 0) ? <img src={URL.createObjectURL(mainImage[0])} /> : <img src={imageicon}></img>}
                                                </label>
                                                <input
                                                    type="file"
                                                    id="img"
                                                    onChange={handleImage}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        

                                        <div className="edit_image">
                                            <a className="trigger_popup_fricc" >
                                                <CiCamera id="icon_ci_camera"/>
                                            </a>
                                        </div>
                                        <div className='box_container_image'>
                                            <div className="input-box">
                                                <div className="box">
                                                    <input
                                                        type="text"
                                                        id="productName"
                                                        placeholder="Product Name"
                                                        value={productName}
                                                        onChange={handleProductName}
                                                        required
                                                    />
                                                </div>
                                                <div className="box">
                                                    <input
                                                        type="text"
                                                        id="price"
                                                        placeholder="Product Price"
                                                        value={price}
                                                        onChange={handleProductPrice}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='box_popular'>
                                                <label htmlFor="box_popular">Popular</label>
                                                <input
                                                    type="checkbox"
                                                    id="popular"
                                                    name="popular"
                                                    onChange={handlePopularChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div onClick={() => handleAdd()} >
                            <div className="iconimage">
                                <HiMiniShoppingBag id="icon_shoppingbag"/>
                                <LuPlus id='icon_goplus'/>
                            </div>
                        </div>
                    </div>
                    <div className="btn_submit">
                        <button type="submit">Post Product</button>
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Post;