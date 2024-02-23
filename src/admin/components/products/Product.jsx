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
      price: 8.500,
      review: 50,
      popular: true,
      images: [ { src: 깻잎 }],
    },
    {
      productID: 2,
      productName: "더덕무침",
      price: 7.520,
      review: 45,
      popular: true,
      images: [ { src: 더덕무침 }],
    },
    {
      productID: 3,
      productName: "멸치볶음",
      price: 9.250,
      review: 30,
      popular: true,
      images: [ { src: 멸치볶음 }],
    },
    {
      productID: 4,
      productName: "진미채볶음",
      price: 8.500,
      review: 29,
      popular: true,
      images: [ { src: 진미채볶음 }],
    }, 
    {
      productID: 5,
      productName: "물김치",
      price: 9.500,
      review: 39,
      popular: true,
      images: [ { src: 물김치 }],
    }, 
    {
      productID: 6,
      productName: "참외장아찌",
      price: 12.500,
      review: 35,
      popular: true,
      images: [ { src: 참외장아찌 }],
    }, 
    {
      productID: 7,
      productName: "파김치",
      price: 11.500,
      review: 25,
      popular: true,
      images: [ { src: 파김치 }],
    },
  ]);
  const [populars, setPopular] = useState([
    {
      productID: 8,
      productName: "깻잎",
      price: 8.500,
      popular: true,
      img: [ { src: 깻잎 }],
    },
    {
      productID: 9,
      productName: "더덕무침",
      price: 7.520,
      popular: true,
      img: [ { src: 더덕무침 }],
    },
    {
      productID: 10,
      productName: "멸치볶음",
      price: 9.250,
      popular: true,
      img: [ { src: 멸치볶음 }],
    },
    {
      productID: 11,
      productName: "진미채볶음",
      price: 8.500,
      popular: true,
      img: [ { src: 진미채볶음 }],
    }
  ]);

  
/// Choose image All product
  const [selectedImages, setSelectedImages] = useState(Array(products.length).fill(null)); // State to hold selected images
  // Function to handle image selection for a specific product
  const handleImage = (event, index) => {
    const selectedImage = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[index] = selectedImage;
    setSelectedImages(updatedImages);
  };


/// Choose image Popular product
  const [selectedImagespopular, setSelectedImagespopular] = useState(Array(populars.length).fill(null)); // State to hold selected images
  // Function to handle image selection for a specific product
  const handleImagepopular = (event, i) => {
    const selectedImage = event.target.files[0];
    const updatedImages = [...selectedImages];
    updatedImages[i] = selectedImage;
    setSelectedImagespopular(updatedImages);
  };


  ////edit product name
  const [updateProductId, setUpdateProductId] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

  const openConfirmationPopup = (productID) => {
    setUpdateProductId(productID);
    setConfirmationPopupOpen(true);
  };

  const closeConfirmationPopup = () => {
    setUpdateProductId(null);
    setConfirmationPopupOpen(false);
  };

  const updateProduct = () => {
    if (updateProductId !== null) {
      // Filter out the product with the specified ID
      const updatedProducts = products.filter(
        (product) => product.productID !== updateProductId
      );

      // Update the state with the new array of products
      setProducts(updatedProducts);

      // Close the confirmation popup after deleting
      closeConfirmationPopup();
    }
  };


  ////edit product price
  const [isConfirmationPopupOpenPrice, setConfirmationPopupOpenPrice] = useState(false);

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
      // Filter out the product with the specified ID
      const updatedProducts = products.filter(
        (product) => product.productID !== updateProductId
      );

      // Update the state with the new array of products
      setProducts(updatedProducts);

      // Close the confirmation popup after deleting
      closeConfirmationPopup();
    }
  };

  //// Choose file image banner
  const [mainImageBanner, setMainImageBanner] = useState(null);

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

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="search-box_product">
            <input
              type="text"
              placeholder="Search ..."
            />
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
                  <label htmlFor="img">
                    {(mainImageBanner && mainImageBanner.length > 0) ? <img src={URL.createObjectURL(mainImageBanner[0])} /> : <img src={banner1}></img>}
                  </label>
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
                <CiCamera id="box_icon_camera"/>
              </label>
            </div>
          </div>
        
          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="spennofStyle"></span>Popular side dishes
              </h1>
            </div>

            <div className="contentImageProducts">
              {populars.map((popular, i) => (
                <div className="box-product" key={i}>
                  <div>
                    <div className="box_input-img">
                      <div className="img">
                        <label htmlFor={`image-${i}`}>
                          {selectedImagespopular[i] ? <img src={URL.createObjectURL(selectedImagespopular[i])} alt="image" /> : <img src={popular.img[0].src} alt="image" />}
                        </label>
                        <input
                          type="file"
                          id={`image-${i}`}
                          onChange={(e) => handleImagepopular(e, i)}
                          required
                        />
                      </div>
                      <div className="edit_image_product">
                        <CiCamera id="box_icon_camera_product"/>
                      </div>
                    </div>
                  </div>
                  <div className="txtOFproduct">
                    <div className="box_icon_MdOutlineEdit" onClick={() => openConfirmationPopup(popular.productID)}>
                      <li>ProductName: {popular.productName}</li>
                      <MdOutlineEdit id="icon_edit"/>
                    </div>

                    

                    <div className="box_icon_MdOutlineEdit" onClick={() => openConfirmationPopupPrice(popular.productID)}> 
                      <li>Price: ${popular.price}</li>
                      <MdOutlineEdit id="icon_edit"/>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div className="content_itemBox">
              <div className="container_product">
                <h3 className="htxthead">
                  <span className="spennofStyle"></span>All Product
                </h3>
              </div>
              <div className="contentImageProduct">
                {products.map((product, index) => (
                  <div className="box-product" key={index}>
                    <div>
                      <div className="box_input-img">
                        <div className="img">
                          <label htmlFor={`image-${index}`}>
                            {selectedImages[index] ? <img src={URL.createObjectURL(selectedImages[index])} alt="image" /> : <img src={product.images[0].src} alt="image" />}
                          </label>
                          <input
                            type="file"
                            id={`image-${index}`}
                            onChange={(e) => handleImage(e, index)}
                            required
                          />
                        </div>
                        
                        <div className="edit_image_product">
                          <CiCamera id="box_icon_camera_product"/>
                        </div>
                      </div>
                      
                    </div>
                    <div className="txtOFproduct">
                      <div className="box_icon_MdOutlineEdit" onClick={() => openConfirmationPopup(product.productID)}>
                        <li>ProductName: {product.productName}</li>
                        <MdOutlineEdit id="icon_edit"/>
                      </div>
                      <div className="box_icon_MdOutlineEdit" onClick={() => openConfirmationPopupPrice(product.productID)}> 
                        <li>Price: ${product.price}</li>
                        <MdOutlineEdit id="icon_edit"/>
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
        </div>
      </section>
    </>
  );
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
};

export default Product;



