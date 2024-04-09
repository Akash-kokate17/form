import React from "react";
import {Routes, Route} from "react-router-dom";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/SignUp";
import { SignUpForm2 } from "./components/signupform2/SignUpForm2";
import { Home } from "./components/home/Home";
import { NotFound } from "./components/notfound/NotFound";

function App() {
  return (
   <div>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/signupform2" element={<SignUpForm2/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
   </div>
  );
}

export default App;
