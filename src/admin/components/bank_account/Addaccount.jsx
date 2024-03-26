import "./css/addaccount.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";

const Addaccount = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [is_has_bank_account, set_has_bank_account] = useState(false);
  var store_id = null;
  if (localStorage.getItem("user")) {
    store_id = JSON.parse(window.localStorage.getItem("user")).store_id;
  }

  const [dataPayment, setdataPayment] = useState({
    name: "",
    account_name: "",
    account_number: "",
    image: null,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setdataPayment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    let data = JSON.stringify({
      token: token,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/user/check-token",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data.result != "success") {
          localStorage.clear();
          navigate("/loginuser");
          return;
        }
      })
      .catch((error) => {
        localStorage.clear();
        console.log(error);
        navigate("/loginuser");
        return;
      });
  }, [token]);

  useEffect(() => {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url:
        import.meta.env.VITE_API +
        `/store/bank-accounts/${store_id}/has_bank_account`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data.has_bank_account));
        set_has_bank_account(response.data.has_bank_account);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(store_id);
  console.log(is_has_bank_account);

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("name", dataPayment.name);
    formdata.append("account_name", dataPayment.account_name);
    formdata.append("account_number", dataPayment.account_number);
    formdata.append("image", fileInput.files[0]);
    formdata.append("store", store_id);

    if (is_has_bank_account === true) {
      // If the user already has a cart, update the existing cart
      const requestOptions = {
        method: "PUT",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        `${import.meta.env.VITE_API}/store/bank-accounts/update/${store_id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // alert("The bank account has been updated.")
        })
        .catch((error) => console.error(error));
    } else {
      // If the user doesn't have a cart, create a new cart
      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(`${import.meta.env.VITE_API}/store/bank-accounts`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // alert("The bank account has been added.")
        })
        .catch((error) => console.error(error));
    }

    alert("The Back account has been managed.");
  };

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
                onChange={handleInputChange}
              />
            </div>
            <div className="input_product_box">
              <label>Account name:</label>
              <input
                className="inputproduct"
                type="text"
                name="account_name"
                placeholder="Account name..."
                onChange={handleInputChange}
              />
            </div>
            <div className="input_product_box">
              <label>Account number:</label>
              <input
                className="inputproduct"
                type="text"
                name="account_number"
                placeholder="Account number..."
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="btn_Save">
              <button className="btn_save_product" onClick={handleSubmit}>
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
