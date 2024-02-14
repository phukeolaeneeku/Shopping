import "./product.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import 물김치 from "../../../img/물김치.jpg";
import 참외장아찌 from "../../../img/참외장아찌.jpg";
import 파김치 from "../../../img/파김치.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
      productName: "파김치.jgp",
      price: 11.500,
      review: 25,
      popular: true,
      images: [ { src: 파김치 }],
    },
  ]);

   // Delete product
   const [deleteProductId, setDeleteProductId] = useState(null);
   const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

   const openConfirmationPopup = (productID) => {
    setDeleteProductId(productID);
     setConfirmationPopupOpen(true);
   };

   const closeConfirmationPopup = () => {
    setDeleteProductId(null);
     setConfirmationPopupOpen(false);
   };

   const deleteProducts = () => {
     console.log('Successful')
     
     closeConfirmationPopup();
   };

  // prev next button user in react
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


    // Get send ID
  const navigate = useNavigate();
   // Handle product
  const handleProductID = () => {
    const setProducts = products.map((product) => ({
      productID: product.productID,
      productName: product.productName,
      price: product.price,
      images: product.images
    }));
    navigate("/product/updateproduct", {
      state: { product: setProducts },

    }); 
    
    // console.log(setProducts)
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

          <div className="product-area">
            {products.map((product, index) => (
              <div className="box-product" key={index}>
                <div>
                  <img src={product.images[0].src} alt="image" />
                </div>
                <ul className="txtOFproduct">
                  <li>ProductName: {product.productName}</li>
                  <li>Price: ${product.price}</li>
                  <div className="box_btn_edit_delete">
                    <button
                      className="btn_icon_delete_user" >
                      <AiOutlineDelete id="btn_icon_edit"/>
                    </button>
                    <Link to="/updateproduct" className="btn_icon_edit_user" onClick={handleProductID}>
                      <MdOutlineEdit id="btn_icon_edit" />
                    </Link>
                  </div>
                </ul>
              </div>
            ))}
          
            {isConfirmationPopupOpen && (
              <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                  <button onClick={deleteProducts} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={closeConfirmationPopup} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="box_container_next_product">
            <button className="box_prev_left_product" onClick={prePage}>
              <AiOutlineLeft id="box_icon_left_right_product" />
              <p>Prev</p>
            </button>

            <div className="box_num_product">
              {numbers.map((n, i) => (
                <div
                  className={`page-link ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <div className="num_admin_product">
                    <p onClick={() => changeCPage(n)}>{n}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="box_prev_right_product" onClick={nextPage}>
              <p>Next</p>
              <AiOutlineRight id="box_icon_left_right_product" />
            </button>
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
