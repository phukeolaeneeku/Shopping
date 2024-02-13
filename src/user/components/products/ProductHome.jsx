import "./productHome.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import Header from "../header/Header";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductHome = () => {
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
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [displayCount, setDisplayCount] = useState(8);
  const [showButton, setShowButton] = useState(true);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle inputChange
  // Function to handle the filter change
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    switch (selectedValue) {
      case "higherPrice":
        filterByHigherPrice();
        break;
      case "lowerPrice":
        filterByLowerPrice();
        break;
      case "newProducts":
        filterByNewProducts();
        break;
      case "popularProducts":
        filterByPopularProducts();
        break;
      default:
        setFilteredProducts(products);
    }
  };

  // Function to filter products by higher price
  const filterByHigherPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by lower price
  const filterByLowerPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by new products (assuming newer products have higher productID)
  const filterByNewProducts = () => {
    const sortedProducts = [...products].sort(
      (a, b) => b.productID - a.productID
    );
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by popularity (you can customize the popularity criteria)
  const filterByPopularProducts = () => {
    // Implement your popularity criteria here
    // For simplicity, let's assume popularity is based on productID
    const sortedProducts = [...products].sort(
      (a, b) => b.productID - a.productID
    );
    setFilteredProducts(sortedProducts);
  };

  const displayedProducts = filteredProducts.slice(0, displayCount);
  // Read more
  const handleViewMore = () => {
    setDisplayCount(30);
    setShowButton(false);
  };

  // Get send ID
  const navigate = useNavigate();

  // Handle product
  const handleProduct = (sendProductID) => {
    navigate("/product_search/productdetails", {
      state: { sendProductID: sendProductID },
    });
  };

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>인기 반찬
            
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <label>Select Filter</label>
              <select
                className="filter_priceProduct"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="default">All Product</option>
                <option value="higherPrice">Higher Price</option>
                <option value="lowerPrice">Lower Price</option>
                <option value="newProducts">New Products</option>
                <option value="popularProducts">Popular Products</option>
              </select>
            </form>
            <box-icon name="filter"></box-icon>
          </div>
        </div>

        <div className="product-area">
          {displayedProducts.map((product, index) => (
            <div className="box-product" key={index}>
              <div onClick={() => handleProduct(product.productID)}>
                <div className="img">
                  <img src={product.images[0].src} alt="image" />
                </div>
                
                <div className="box_cart">
                  <FaCartShopping className="box_icon_cart" />
                </div>               

                <ul className="txtOFproduct2">
                  <li>
                    <input
                      className="name"
                      type="text"
                      value={product.productName}
                      onChange={(e) => handleInputChange(e, index, "name")}
                    />
                  </li>
                  <li>
                    <input
                      className="price"
                      type="text"
                      value={product.price}
                      onChange={(e) => handleInputChange(e, index, "price")}
                    />
                  </li>
                  <p>Review: {product.review}</p>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {showButton && filteredProducts.length > displayCount && (
          <button className="btnViewProduct" onClick={handleViewMore}>
            View More
          </button>
        )}
      </section>
    </div>
  );
};

export default ProductHome;
