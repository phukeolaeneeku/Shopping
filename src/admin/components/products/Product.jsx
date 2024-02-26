
import "./product.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import 물김치 from "../../../img/물김치.jpg";
import 참외장아찌 from "../../../img/참외장아찌.jpg";
import 파김치 from "../../../img/파김치.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import banner1 from "../../../img/banner1.png";

const Product = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "깻잎",
      price: 8.5,
      review: 50,
      popular: false,
      images: [{ src: 깻잎 }],
    },
    {
      productID: 2,
      productName: "더덕무침",
      price: 7.52,
      review: 45,
      popular: false,
      images: [{ src: 더덕무침 }],
    },
    {
      productID: 3,
      productName: "멸치볶음",
      price: 9.25,
      review: 30,
      popular: false,
      images: [{ src: 멸치볶음 }],
    },
    {
      productID: 4,
      productName: "진미채볶음",
      price: 8.5,
      review: 29,
      popular: true,
      images: [{ src: 진미채볶음 }],
    },
    {
      productID: 5,
      productName: "물김치",
      price: 9.5,
      review: 39,
      popular: true,
      images: [{ src: 물김치 }],
    },
    {
      productID: 6,
      productName: "참외장아찌",
      price: 12.5,
      review: 35,
      popular: true,
      images: [{ src: 참외장아찌 }],
    },
    {
      productID: 7,
      productName: "파김치",
      price: 11.5,
      review: 25,
      popular: true,
      images: [{ src: 파김치 }],
    },
  ]);

  const [selectedImages, setSelectedImages] = useState(
    Array(products.length).fill(null)
  );
  const [updateProductId, setUpdateProductId] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [isConfirmationPopupOpenPrice, setConfirmationPopupOpenPrice] =
    useState(false);
  const [mainImageBanner, setMainImageBanner] = useState(null);

  const handleImage = (event, index) => {
    const selectedImage = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[index] = selectedImage;
    setSelectedImages(updatedImages);
  };

  ///Choose image handleImageBanner
  const handleImageBanner = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImageBanner([file]);
      };

      reader.readAsDataURL(file);
    }
  };


  //// onClick icon edit product name
  const openConfirmationPopup = (productID) => {
    setUpdateProductId(productID.productName);
    setConfirmationPopupOpen(true);
  };
  
  const closeConfirmationPopup = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpen(false);
  };

  const updateProduct = () => {
    if (updateProductId !== null) {
      const updatedProducts = products.filter(
        (product) => product.productID !== updateProductId
      );
      setProducts(updatedProducts);
      closeConfirmationPopup();
    }
  };


  ///// onClick icon edit product price
  const openConfirmationPopupPrice = (productID) => {
    setUpdateProductId(productID);
    setConfirmationPopupOpenPrice(true);
  };

  const closeConfirmationPopupPrice = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpenPrice(false);
  };

  const updatePrice = () => {
    if (updateProductId !== null) {
      const updatedProducts = products.filter(
        (product) => product.productID !== updateProductId
      );
      setProducts(updatedProducts);
      closeConfirmationPopupPrice();
    }
  };

  

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="search-box_product">
            <input type="text" placeholder="Search ..." />
            <button>
              <IoSearchOutline />
            </button>
          </div>

          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>Product
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/post" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add Product</p>
              </Link>
            </div>
          </div>

          <div className="banner_no_box">
            <div className="banner_no_box_image">
              <div className="banner_no_box_image">
                <div className="img">
                  {mainImageBanner && mainImageBanner.length > 0 ? (
                    <img
                      src={URL.createObjectURL(mainImageBanner[0])}
                      alt="Banner"
                    />
                  ) : (
                    <img src={banner1} alt="Banner" />
                  )}
                  <input
                    type="file"
                    id="img"
                    onChange={handleImageBanner}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="edit_image_banner">
              <label htmlFor="img" className="trigger_popup_fricc">
                <CiCamera id="box_icon_camera" />
              </label>
            </div>
          </div>

          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="spennofStyle"></span>POPULAR MENU
              </h1>
            </div>
            <div className="contentImageProducts">
              {products.map(
                (product, index) =>
                  product.popular && (
                    <div className="box-product" key={index}>
                      <div className="box_input-img">
                        <div className="img">
                          {selectedImages[index] ? (
                            <img
                              src={URL.createObjectURL(selectedImages[index])}
                              alt="Product"
                            />
                          ) : (
                            <img src={product.images[0].src} alt="Product" />
                          )}
                          <input
                            type="file"
                            id={`image-${index}`}
                            onChange={(e) => handleImage(e, index)}
                            required
                          />
                        </div>

                        <div className="edit_image_product">
                          <label htmlFor={`image-${index}`}>
                            <CiCamera id="box_icon_camera_product" />
                          </label>
                        </div>
                      </div>

                      <div className="txtOFproduct">
                        <div
                          className="box_icon_MdOutlineEdit"
                          onClick={() =>
                            openConfirmationPopup(product.productID)
                          }
                        >
                          <li>ProductName: {product.productName}</li>
                          <MdOutlineEdit id="icon_edit" />
                        </div>
                        <div
                          className="box_icon_MdOutlineEdit"
                          onClick={() =>
                            openConfirmationPopupPrice(product.productID)
                          }
                        >
                          <li>Price: ${product.price}</li>
                          <MdOutlineEdit id="icon_edit" />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="spennofStyle"></span>ALL MENU
              </h1>
            </div>
            <div className="contentImageProducts">
              {products.map((product, index) => (
                <div className="box-product" key={index}>
                  <div className="box_input-img">
                    <div className="img">
                      {selectedImages[index] ? (
                        <img
                          src={URL.createObjectURL(selectedImages[index])}
                          alt="Product"
                        />
                      ) : (
                        <img src={product.images[0].src} alt="Product" />
                      )}
                      <input
                        type="file"
                        id={`image-${index}`}
                        onChange={(e) => handleImage(e, index)}
                        required
                      />
                    </div>

                    <div className="edit_image_product">
                      <label htmlFor={`image-${index}`}>
                        <CiCamera id="box_icon_camera_product" />
                      </label>
                    </div>
                  </div>

                  <div className="txtOFproduct">
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() => openConfirmationPopup(product.productID)}
                    >
                      <li>ProductName: {product.productName}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                    <div
                      className="box_icon_MdOutlineEdit"
                      onClick={() =>
                        openConfirmationPopupPrice(product.productID)
                      }
                    >
                      <li>Price: ${product.price}</li>
                      <MdOutlineEdit id="icon_edit" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isConfirmationPopupOpen && (
            <div className="confirmation-popup">
              <p>Please enter the product name?</p>
              <input 
                type="text" 
                placeholder="Product name..."
              />
              <div className="btn_ok_on">
                <button onClick={closeConfirmationPopup} className="btn_on">
                  Cancle
                </button>
                <button onClick={updateProduct} className="btn_yes">
                  Update
                </button>
              </div>
            </div>
          )}

          {isConfirmationPopupOpenPrice && (
            <div className="confirmation-popup">
              <p>Please enter the product price?</p>
              <input 
                type="text" 
                placeholder="Product price..."
              />
              <div className="btn_ok_on">
                <button onClick={closeConfirmationPopupPrice} className="btn_on">
                  Cancle
                </button>
                <button onClick={updatePrice} className="btn_yes">
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;