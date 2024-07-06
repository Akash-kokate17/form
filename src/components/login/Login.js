import React, { useEffect, useRef, useState } from "react";
import profilePic from "./profile_icon.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function Login(props) {
  const [login, setLogin] = useState({ userName: "", password: "" });
  const [error, setErrors] = useState({ userName: false, password: false });
  const inputRef = useRef();
  const navigate = useNavigate();
  const [passType, setPassType] = useState("password");
  const [show, setShow] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
    // Reset error message when user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const userPassHandler = (e) => {
    e.preventDefault();

    // Check if login information exists in localStorage
    let loginObj;
    try {
      loginObj = JSON.parse(window.localStorage.getItem("loginInfo"));
    } catch (error) {
      console.error(
        "Error parsing login information from localStorage:",
        error
      );
      loginObj = null;
    }

    if (loginObj) {
      // Validate username and password
      if (
        login.userName === loginObj.userName &&
        login.password === loginObj.password
      ) {
        navigate("/home");
      } else if (!login.userName || !login.password) {
        alert("Both Filed Are Required");
      } else {
        setErrors({ userName: true, password: true }); // Set both errors
        alert("Invalid Username or Password");
      }
    }
  };

  const togglePassword = () => {
    setPassType((prevType) => (prevType === "password" ? "text" : "password"));
    setShow((prevShow) => !prevShow);
  };

  return (
    <form onSubmit={userPassHandler}>
      <div
        className="flex flex-wrap flex-col items-center w-full justify-center md:p-36 p-10"
        style={{ height: "100%" }}
      >
        <div className="bg-white border-2 p-12 rounded-xl px-[100] md:px-[130px] flex flex-col flex-wrap items-center hover:border-purple-600">
          <div className="flex flex-col items-center">
            <img className="w-28 h-28" src={profilePic} alt="Profile" />
          </div>
          <div className="flex flex-col items-center">
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
            {error.userName && (
              <p className="text-center text-red-500">Username is required</p>
            )}
          </div>
          <div className="flex flex-col items-center">
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
              <span
                className="cursor-pointer mt-12 me-1"
                onClick={togglePassword}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </span>
            </p>
            <div className="border-b w-48 h-1 bg-red-200 rounded-lg"></div>
            {error.password && (
              <p className="text-center text-red-500">Password is required</p>
            )}
          </div>
          <div className="flex flex-row items-center mt-8">
          <div>
          <button
              type="submit"
              className="border-2 p-2 px-4 rounded-lg me-4 hover:bg-blue-600 hover:text-white"
            >
              Login
            </button>
          </div>
            <div>
            <button className="border-2 p-2 px-4 rounded-lg ms-1 hover:bg-red-600 hover:text-white">
              <Link to="/signup">Sign Up</Link>
            </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
