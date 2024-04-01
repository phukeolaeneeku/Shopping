import "./css/productHome.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import 물김치 from "../../../img/물김치.jpg";
import 참외장아찌 from "../../../img/참외장아찌.jpg";
import 파김치 from "../../../img/파김치.jpg";
import Header from "../header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductHome = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "깻잎",
      price: 10.500,
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
      productName: "파김치",
      price: 11.500,
      review: 25,
      popular: true,
      images: [ { src: 파김치 }],
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showButton, setShowButton] = useState(true);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Get send ID
  const navigate = useNavigate();

  // Handle product
  const handleProduct = (sendProductID) => {
    navigate("/productdetails", {
      state: { sendProductID: sendProductID },
    });
  };

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <section id="product1">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>인기 메뉴
          </h1>
        </div>
        <div className="contentImageProducts1">
          {products.map(
            (product, index) => (
              product.popular &&(
                <div key={index}>
                  <div className="group_itemBox" onClick={() => handleProduct(product.productID)}>
                    <div className="img">
                      <img src={product.images[0].src} alt="img" />
                    </div>
                    <div className="box_cart_searchs">
                      <FaCartShopping className="box_icon_search" />
                    </div> 
                    <div className="txtOFproduct">
                      <h4>
                       {product.productName}
                      </h4>
                      <p>
                        ￦{product.price}
                      </p>
                      <p>검토: {product.review}</p>
                    </div>
                  </div>
                </div>
              )
          ))}
        </div>

        <div className="content_itemBox">
          <div className="container_product">
            <h3 className="htxthead">
              <span className="spennofStyle"></span>모든 메뉴
            </h3>
          </div>
          <div className="contentImageProducts2">
            {products.map((product, index) => (
              <div key={index}>
                <div className="group_itemBox" onClick={() => handleProduct(product.productID)} >
                  <div className="img">
                    <img src={product.images[0].src} alt="img" />
                  </div>
                  <div className="box_cart_searchs">
                    <FaCartShopping className="box_icon_search" />
                  </div> 
                  <div className="txtOFproduct">
                    <h4>
                      {product.productName}
                    </h4>
                    <p>
                       {product.price} 
                    </p>
                    <p>검토: {product.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHome;
