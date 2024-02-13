import "./product.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Product = () => {
  const [products, setProducts] = useState([]);

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
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
            <div className="box-product" >
              <div>
                <img src={깻잎} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>ProductName: 깻잎</li>
                <li>Price: $10</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            
            <div className="box-product" >
              <div>
                <img src={더덕무침} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>ProductName: 더덕무침</li>
                <li>Price: $7.50</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            <div className="box-product" >
              <div>
                <img src={멸치볶음} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>ProductName: 멸치볶음</li>
                <li>Price: $8</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            <div className="box-product" >
              <div>
                <img src={진미채볶음} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>ProductName: 진미채볶음</li>
                <li>Price: $12</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" onClick={() => openConfirmationPopup(product.productID)} />
                  </button>
                  <Link to='/updateproduct' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
          
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
