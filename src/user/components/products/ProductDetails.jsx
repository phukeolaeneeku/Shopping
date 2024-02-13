import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./productBuy.css";
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

  //Start image gallery
  const [slideIndex, setSlideIndex] = useState(1)

  const [width, setWidth] = useState(0)
  const [start, setStart] = useState(0)
  const [change, setChange] = useState(9)

  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width)
  }, [])

  // const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  // function currentSlide(n) {
  //   showSlides(n);
  // }

  function showSlides(n) {
    const currentProduct = filteredProducts[0]; // Assuming there's only one product in the array

    if (n > currentProduct.images.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(currentProduct.images.length);
    } else {
      setSlideIndex(n);
    }
  }
  //Drag
  function dragStart(e) {
    setStart(e.clientX)
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex])
  //End image gallery

  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/product_search" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
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

                    {/* <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className='next' onClick={() => plusSlides(1)}>&#10095;</a> */}

                    {/* <div className="slider_img" draggable={true} ref={slideRef}
                      onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
                      {
                        product.images.map((image, index) => (
                          <div key={index} className={`slider-box ${index + 1 === slideIndex && 'active'}`}
                            onClick={() => setSlideIndex(index + 1)}>
                            <img src={image.src} alt="" />
                          </div>
                        ))
                      }
                    </div> */}
                  </div>
                </section>
              </React.Fragment>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">{product.productName}</h1>
                <p className="money_txt">${product.price}</p>
                {/* Star Box */}
                {/* <div className="startBox">
                  <div className="sartBox_icon">
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiOutlineStar id="icon_star" />
                  </div>

                  <div>
                    <p>( 150 Reviews )</p>
                  </div>
                </div> */}
                <p className="txt_description">Review: {product.review}</p>

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
                    Buy Now
                  </button>
                  <button type="submit" className="echbtn btnAdd">
                    Add To Cart
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