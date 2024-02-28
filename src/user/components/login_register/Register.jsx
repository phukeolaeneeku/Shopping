import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Register = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      code.trim() === "" ||
      nickname.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please enter email, code, nickname and password.");
      return;
    }
    // Assuming registration is successful, set registrationSuccess to true
    setRegistrationSuccess(true);
    // Proceed with registration logic
    console.log("Email:", email);
    console.log("Code:", code);
    console.log("Nickname:", nickname);
    console.log("Password:", password);
  };

  return (
    <>
      <section>
        <div className="box_forgot">
          <Link to="/login" className="box_iconBack">
            <MdArrowBack id="iconBack" />
          </Link>
          <h2>Register</h2>
          <div className="title">
            You are in the process of signing up as a user!
          </div>
          <form className="container_form_user" onSubmit={handleRegister}>
            <div className="box_title">Enter basic information</div>
            <div className="container_form_user2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
                <div className="verification">
                  Verify
                </div>
            </div>
    
            <input
              type="text"
              name="code"
              placeholder="Certification Number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
  
              <input
                type="text"
                name="nickname"
                placeholder="Nickname (maximum 10 characters)"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
  
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password2"
              name="password2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            
            <button type="submit">
              Register
            </button>
          </form>
        </div>
        {registrationSuccess && (
          <div className="alert_success_sigup">
            Registration successful!
          </div>
        )}
      </section>
      
    </>
  );
};

export default Register;