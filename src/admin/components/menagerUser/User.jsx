import './user.css';
import AdminMenu from '../adminMenu/AdminMenu';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';

const User = () => {

     // Delete product
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

    const openConfirmationPopup = (userID) => {
        setDeleteUserId(userID);
      setConfirmationPopupOpen(true);
    };

    const closeConfirmationPopup = () => {
        setDeleteUserId(null);
      setConfirmationPopupOpen(false);
    };

    const deleteUsers = () => {
      console.log('Successful')
      
      closeConfirmationPopup();
    };


    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/users" className='link-back'>
                        <FaAngleLeft id='icon_back_user'/>
                        Back
                    </Link>
                    <div>
                        User
                    </div>
                </div>
                <div className="userInfo">
                    <div className="info">
                       <div>User ID: </div>
                       <div>User Name: </div>
                       <div>User Email: </div>
                       <div>User Phone number: </div>
                       <div>Password: </div>
                       <div>Password: </div>
                       <div className='del'
                        onClick={() => openConfirmationPopup(user.userID)} 
                       >
                        <AiOutlineDelete  />
                       </div>
                    </div>
                    <div className="img">
                       <img src='' alt="image" />
                    </div>
                </div>
            </section>

            {isConfirmationPopupOpen && (
              <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                  <button onClick={deleteUsers} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={closeConfirmationPopup} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
        </>
    )
}

export default User;