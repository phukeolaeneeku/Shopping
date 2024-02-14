import { useState, useEffect } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Register = () => {

  return (
    <>
      <div className="box_forgot">
        <Link to="/login" className="box_iconBack">
          <MdArrowBack id="iconBack" />
        </Link>
        <h2>Register</h2>
        <div className="title">
          You are in the process of signing up as a user!
        </div>
        <form className="container_form_user">
          <div className="box_title">Enter basic information</div>
          <div className="container_form_user2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
              <div className="verification" >
                Verify
              </div>
          </div>
          <input
            type="text"
            name="code"
            placeholder="Certication Number"
            required
          />

            <input
              type="text"
              name="nickname"
              placeholder="Nickname (maximun 10 characters)"
              required
            />

          <input
            type="password"
            name="password"
            placeholder="passwords"
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            required
          />
          
          <button type="button">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
