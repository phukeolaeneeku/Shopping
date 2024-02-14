import React from 'react'
import "./forgotPassword.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
  
const ForgotPassword = () => {

  return (
    <>
      <div className="box_forgot">
        <Link to="/login" className="box_iconBack_forgot">
          <MdArrowBack id='iconBack'/>
        </Link>
        <h2>Find password</h2>
        <div className="title">Please change your password after verifying your email!</div>
        <form className='container_form_forgot'>
          <div className='box_infor'>Enter basic information</div>

          <div className='container_form_forgot2'>
            <input 
              type="email" 
              name='email'
              placeholder="Email" 
              required 
            />
            <div className='verification'>
              Verify
            </div>
          </div>

          <input 
            type="text" 
            name='code'
            placeholder="Verification number" 
            required 
          />
          <input 
            type="password" 
            name='password'
            placeholder="New passwords" 
            required 
          />
          <input 
            type="password" 
            name='password2'
            placeholder="Confirm password" 
            required 
          />

          <button type="submit" >
            Confirmation
          </button>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword