import React from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./css/bank.css";
import imageicon from "../../../img/imageicon.jpg";

function Bank() {
  
  return (
    <>
      <AdminMenu />
      <section id="box_container_bank">
        <div className="container_bank_account">
          <div className="header_box_management">
            <Link to="/dashboard" className="box_management_iconnback">
              <IoIosArrowBack id="icons_back" />
              <p>Back</p>
            </Link>
            <div>
              <h3>Store: Name</h3>
            </div>
            <div></div>
          </div>
          <form className="box_container_review">
            <div className="add_payment_box">
              <h3>Payment</h3>
              <div className="container_box_input">
                <div className="inputproduct_box_dplay">
                  <p>Bank: </p>
                </div>
                <div className="inputproduct_box_dplay">
                  <p>Account name: </p>
                </div>
                <div className="inputproduct_box_dplay">
                  <p>Account number: </p>
                </div>
                <div className="add_img_product_box">
                  <p>QR Code:</p>
                  <div className="imag_qrcode_store">
                    <img src={imageicon} alt="" />
                  </div>
                </div>
              </div>
              <Link
                to="/addaccount"
                type="submit"
                className="btn_save_productUser"
              >
                Add/Edit
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Bank;
