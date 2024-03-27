import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./css/productBuy.css";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import 물김치 from "../../../img/물김치.jpg";
import 참외장아찌 from "../../../img/참외장아찌.jpg";
import 파김치 from "../../../img/파김치.jpg";

function ProductDetails() {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "깻잎",
      price: 18.500,
      review: 50,
      popular: false,
      images: [ { src: 깻잎 }],
    },
    {
      productID: 2,
      productName: "더덕무침",
      price: 17.520,
      review: 45,
      popular: false,
      images: [ { src: 더덕무침 }],
    },
    {
      productID: 3,
      productName: "멸치볶음",
      price: 19.250,
      review: 30,
      popular: false,
      images: [ { src: 멸치볶음 }],
    },
    {
      productID: 4,
      productName: "진미채볶음",
      price: 18.500,
      review: 29,
      popular: true,
      images: [ { src: 진미채볶음 }],
    }, 
    {
      productID: 5,
      productName: "물김치",
      price: 19.500,
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
      productName: "파김치.jgp",
      price: 11.500,
      review: 25,
      popular: true,
      images: [ { src: 파김치 }],
    }, 
    
  ]);

  /*============== minus_plus ============= */
  const [productCounts, setProductCounts] = useState(1);
  const decrementValue = () => {
    setProductCounts(productCounts - 1);
  };

  const incrementValue = () => {
    setProductCounts(productCounts + 1);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setProductCounts(newValue);
    }
  };

  // Get send ID
  const location = useLocation();
  const { sendProductID } = location?.state || {};

  const navigate = useNavigate();

  // Match productID
  const filteredProducts = products.filter(
    (product) => product.productID === sendProductID
  );


  // Handle submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.classList.contains("btnBut")) {
      const selectedProducts = filteredProducts.map((product) => ({
        productID: product.productID,
        productName: product.productName,
        price: product.price,
        review: product.review,
      }));

      navigate('/cart/payment/', {
        state: {
          products: selectedProducts,
        },
      });
    } else {

      const addTocart = {
        productCounts: productCounts,
      };

      console.log("Add to cart");
      console.log(addTocart);
      console.log("ProductID:", sendProductID); // this  productID
    }
  };

  const [slideIndex, setSlideIndex] = useState(1)


  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>뒤쪽에</p>
        </Link>
        {filteredProducts.map((product) => (
        <div key={product.productID}>
          <div className="boxProduct_deteils" >
            <div className="slider">
              <React.Fragment>
                <section className='product_details'>
                  <div className="product-page-img">
                    {
                      product.images.map((image, index) => (
                        <div key={index} className="myslides" style={{ display: (index + 1) === slideIndex ? "block" : "none" }}>
                          <img src={image.src} alt="" />
                        </div>
                      ))
                    }
                  </div>
                </section>
              </React.Fragment>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">식품명: {product.productName}</h1>
                <p className="money_txt">가격: ￦{product.price}</p>
                
                <p className="txt_description">검토: {product.review}</p>

                <div className="hr">
                  <hr />
                </div>

                {/* Amount product */}
                <div className="container_item_icon">
                  <div
                    className="container_minus_plus"
                    onClick={decrementValue}
                  >
                    -
                  </div>
                  <span>
                    <input
                      type="text"
                      value={productCounts}
                      onChange={handleChange}
                    />
                  </span>
                  <div
                    className="container_minus_plus"
                    onClick={incrementValue}
                  >
                    +
                  </div>
                </div>
                <div className="Count_product">
                  <button type="submit" className="echbtn btnBut">
                  지금 구매
                  </button>
                  <button type="submit" className="echbtn btnAdd">
                  장바구니에 추가
                  </button>
                </div>
              </div>
            </form>
          </div>
        <div className="description_container">
          <img src={product.descImage} alt="" />
        </div>

        </div>
        ))}
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;