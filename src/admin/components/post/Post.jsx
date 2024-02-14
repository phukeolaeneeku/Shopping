import React, { useState, useRef } from 'react';
import AdminMenu from "../adminMenu/AdminMenu";
import './post.css'
import imageicon from "../../../img/imageicon.jpg";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";

const Post = () => {
    const [mainImage, setMainImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [popular, setPopular] = useState(false);
    const [showForm, setShowForm] = useState(false);
    
    // Hanle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', { // Here you can insert informatio to database
            "Product name": productName,
            "Product price": price,
            "ImageDescroption": mainImage,
            "popular": popular,

        });
        setProductName('');
        setPrice('');
        setMainImage([]);
    };

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
        setShowForm(false);
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
                    {/* {showForm && ( */}
                    <form onSubmit={handleSubmit} className="edit-product-form">
                        <div className='product-form_container'>
                            <div className='box_container_image'>
                                {!showForm && (
                                <div className="input-img">
                                    <div className="box_description">
                                        <div className="image">
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
                                </div>
                                )}

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
                            <div className='post_add_product' onClick={handleonClick}>
                                <div className='iconimage'>
                                    <HiMiniShoppingBag id="icon_shoppingbag"/> 
                                    <LuPlus id='icon_goplus'/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="btn_submit">
                            <button type="submit">Post Product</button>
                        </div>
                    </form>
                     {/* )}  */}
                    
                </div>

            </section>
        </>
    )
}

export default Post;