import React, { useState } from 'react'
import "./forgotpassword.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
  
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotpasswordSuccess, setForgotpasswordSuccess] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      code.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please enter email, code and password.");
      return;
    }
    // Assuming registration is successful, set registrationSuccess to true
    setForgotpasswordSuccess(true);
    // Proceed with registration logic
    console.log("Email:", email);
    console.log("Code:", code);
    console.log("Password:", password);
  };

  return (
    <>
      <section>
        <div className="box_forgot">
          <Link to="/login" className="box_iconBack_forgot">
            <MdArrowBack id='iconBack'/>
          </Link>
          <h2>Find password</h2>
          <div className="title">Please change your password after verifying your email!</div>
          <form className='container_form_forgot' onSubmit={handleForgotPassword}>
            <div className='box_infor'>Enter basic information</div>
            <div className='container_form_forgot2'>
              <input 
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className='verification'>
                Verify
              </div>
            </div>

            <input 
              type="text"
              name="code"
              placeholder="Verification number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <input 
              type="password"
              name="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input 
              type="password2"
              name="password2"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" >
              Confirmation
            </button>
          </form>
        </div>
        {forgotpasswordSuccess && (
          <div className="alert_success_find">
            Change password successful!
          </div>
        )}
      </section>
      
    </>
  )
}

export default ForgotPassword