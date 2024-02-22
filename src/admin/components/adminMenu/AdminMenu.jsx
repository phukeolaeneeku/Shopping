import "./adminMenu.css";
import {
  IoDocumentText,
  IoLogOutOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import user from "../../../img/user.png";
import Logo from "../../../img/Logo.png";
import storename from "../../../img/storename.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    console.log("Logged out")
    navigate("/");
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

   // image handle logo store nmae
   const [mainImageStore, setMainImageStore] = useState(null);

   const handleImageStoreName = (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setMainImageStore([file]);
        };

        reader.readAsDataURL(file);
    }
};
   // image handle logo store logo
   const [mainImages, setMainImages] = useState(null);

   const handleImageStoreLogo = (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            setMainImages([file]);
        };

        reader.readAsDataURL(file);
    }
};

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <NavLink to="/dashboard" className="link">
              <RxDashboard />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/product" className="link">
              <IoDocumentText />
              <p>Products</p>
            </NavLink>
            <NavLink to="/orderpage" className="link">
              <MdOutlineSell />
              <p>Orders</p>
            </NavLink>
            <NavLink to="/users" className="link">
              <BiUser />
              <p>Users</p>
            </NavLink>
            <NavLink to="/admins" className="link">
              <LiaUserCogSolid />
              <p>Admins</p>
            </NavLink>
            <div onClick={() => setShowConfirmation(true)} className="link">
              <IoLogOutOutline />
              <p>Log Out</p>
            </div>
            {showConfirmation && (
              <div className="confirmation-popup">
                <p>Are you sure you want to logout?</p>
                <div className="btn_ok_on">
                  <button onClick={handleConfirmLogout} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={handleCancelLogout} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            {/* <NavLink to="/dashboard" className="logo" >
              <span className="logo_store">
                <img src={storename} alt="image" />
                <img src={Logo} alt="image" />
              </span>
            </NavLink> */}
            <div className="logo" >
              <span className="logo_store">
                <div className="image_logo">
                  <label htmlFor="img_store">
                    {(mainImageStore && mainImageStore.length > 0) ? <img src={URL.createObjectURL(mainImageStore[0])} /> : <img src={storename} className="box_logo_storename"></img>}
                  </label>
                  <input
                    type="file"
                    id="img_store"
                    onChange={handleImageStoreName}
                    required
                  />
                </div>
                <div className="image_logo">
                  <label htmlFor="image">
                    {(mainImages && mainImages.length > 0) ? <img src={URL.createObjectURL(mainImages[0])} /> : <img src={Logo} className="box_store_logo"></img>}
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleImageStoreLogo}
                    required
                  />
                </div>
                {/* <img src={storename} alt="image" /> */}
                {/* <img src={Logo} alt="image" /> */}
              </span>
            </div>

            <NavLink to="/adminacount" className="userAdminImage">
              <img src={user} alt="Logo_Profile" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
