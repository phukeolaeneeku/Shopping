import "./css/addaccount.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

const Addaccount = () => {
  
  return (
    <>
      <AdminMenu />
      <section id="box_container_bank">
        <div className="container_bank_account">
          <div className="header_box_management">
            <Link to="/bank" className="box_management_iconnback">
              <IoIosArrowBack id="icons_backs" />
              <p>Back</p>
            </Link>
            <div>
              <h3>Store management</h3>
            </div>
            <div></div>
          </div>
          <form className="box_container_review">
            <h3>Add payment</h3>
            <div className="input_product_box">
              <label>Bank name:</label>
              <input
                className="inputproduct"
                type="text"
                name="name"
                placeholder="Name..."
              />
            </div>
            <div className="input_product_box">
              <label>Account name:</label>
              <input
                className="inputproduct"
                type="text"
                name="account_name"
                placeholder="Account name..."
              />
            </div>
            <div className="input_product_box">
              <label>Account number:</label>
              <input
                className="inputproduct"
                type="text"
                name="account_number"
                placeholder="Account number..."
              />
            </div>
            <div className="add_img_product_box">
              <label>QR Code:</label>
              <div className="boxicon_image_input">
                <CiImageOn className="boxicon_img_iconn" />
                <input
                  type="file"
                  name="image"
                  className="input"
                  id="fileInput"
                />
              </div>
            </div>
            <div className="btn_Save">
              <button className="btn_save_product" >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Addaccount;
