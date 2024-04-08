import React, { useEffect, useRef, useState } from "react";
import profilePic from "./profile_icon.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function Login(props) {
  // Initial state for user login details and errors
  const [login, setLogin] = useState({ userName: "", password: "" });
  const [error, setErrors] = useState({ userName: false, password: false });

  // Ref for focusing input field
  const inputRef = useRef();
  const navigate = useNavigate();

  // State for password visibility toggle
  const [passType, setPassType] = useState("password");
  const [show, setShow] = useState(false);

  // Effect hook for focusing input field on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to handle input change in login form
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  // Function to handle user login and error validation
  const userPassHandler = (e) => {
    e.preventDefault(); // Prevent form submission
    let signUpObj = window.localStorage.getItem("loginInfo");
    let loginObj = JSON.parse(signUpObj);

    // Validate user credentials
    if (
      login.userName === loginObj.userName &&
      login.password === loginObj.password
    ) {
      navigate("/home");
    } else {
      // Handle username and password errors
      if (login.userName.trim() === "") {
        setErrors((prevErrors) => ({ ...prevErrors, userName: true }));
      } else if (login.userName !== loginObj.userName) {
        alert("Username Not Found");
      }
      if (login.password.trim() === "") {
        setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      } else if (login.password !== loginObj.password) {
        alert("Password Not Match");
      }
    }
  };

  // Function to toggle password visibility
  const togglePassword = () => {
    setPassType((prevType) => (prevType === "password" ? "text" : "password"));
    setShow((prevShow) => !prevShow);
  };

  return (
    <form onSubmit={userPassHandler}>
      {/* Login form */}
      <div className="flex flex-wrap flex-col items-center w-full justify-center md:p-36 p-10" style={{ height: "100%" }}>
        <div className="bg-white border-2 p-12 rounded-xl px-[100] md:px-[130px] flex flex-col flex-wrap items-center hover:border-purple-600">
          <div className="flex flex-col items-center">
            <img className="w-28 h-28" src={profilePic} alt="Profile" />
          </div>
          <div className="flex flex-col items-center">
            {/* Username input */}
            <input
              placeholder="User Name"
              className="outline-none text-center mt-4 w-full font-bold"
              ref={inputRef}
              name="userName"
              value={login.userName}
              onChange={handleInput}
              autoComplete="username"
            />
            <div className="border-b w-48 h-1 bg-red-200 rounded-lg"></div>
            {error.userName && <p className="text-center text-red-500">Username is required</p>}
          </div>
          <div className="flex flex-col items-center">
            {/* Password input with toggle visibility */}
            <p className="flex flex-row">
              <input
                type={passType}
                placeholder="Password"
                name="password"
                className="outline-none text-center mt-10 w-full font-bold"
                value={login.password}
                onChange={handleInput}
                autoComplete="current-password"
              />
              <span className="cursor-pointer mt-12 me-1" onClick={togglePassword}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </span>
            </p>
            <div className="border-b w-48 h-1 bg-red-200 rounded-lg"></div>
            {error.password && <p className="text-center text-red-500">Password is required</p>}
          </div>
          <div className="flex flex-row items-center mt-8">
            {/* Login and Sign-up buttons */}
            <button type="submit" className="border-2 p-2 px-4 rounded-lg me-4 hover:bg-blue-600 hover:text-white">
              Login
            </button>
            <button className="border-2 p-2 px-4 rounded-lg ms-1 hover:bg-red-600 hover:text-white">
              <Link to="signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
