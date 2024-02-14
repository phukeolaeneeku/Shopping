import React, { useState, useEffect, useRef } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { useLocation } from "react-router-dom";
import imageicon from "../../../img/imageicon.jpg";

import "./post.css";

const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [mainImage, setMainImage] = useState(null);

  const [products, setProducts] = useState([]);

  //   Get product ID
  const location = useLocation();
  const { sendProductID } = location?.state || {};

  // Effect to fetch and set details of Product
  useEffect(() => {
    // Find the product with the specified ID
    const productToUpdate = products.find(
      (product) => product.productID === parseInt(sendProductID)
    );

    if (productToUpdate) {
      // Set state variables with details of the found product
      setProductName();
      setPrice();
      setMainImage();
    }
  }, [products, sendProductID]); // Run this effect whenever the products array or sendProductID changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log("Form Data:", {
      productName,
      price,
      mainImage:
        mainImage instanceof File
          ? "File: " + mainImage.name
          : "URL: " + mainImage,
    });

    // Reset form fields if needed
    setProductName("");
    setPrice("");
    setMainImage(null);
  };


  // Handle image selection for the main product image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMainImage(URL.createObjectURL(file)); // Use createObjectURL directly
    }
  };

  // const handleImageUpload = (e) => {
  //   const uploadedGallery = Array.from(e.target.files);
  //   setGallery([...gallery, ...uploadedGallery]);
  // };

  // handle Product name
  const handleProductName = (e) => {
    const value = e.target.value;
    setProductName(value);
  };
  // handle Product price
  const handleProductPrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="boxcontainerSpan_Box"></div>
        <div className="box_container_product">
          <div className="box_text">
            <h2>Update Product</h2>
          </div>

          {/* The form to update the product */}
          <form onSubmit={handleSubmit} className="edit-product-form2">
            <div className='product-form_container'>
              <div className='box_container_image'>
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

                <div className="input-box">
              <div className="box">
                <input
                  type="text"
                  id="productName"
                  placeholder="Name"
                  value={productName}
                  onChange={handleProductName}
                  required
                />
              </div>

              <div className="box">
                <input
                  type="text"
                  id="price"
                  placeholder="Price"
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
              />
                </div>

                <div className="btn_submit2">
                  <button type="submit">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
