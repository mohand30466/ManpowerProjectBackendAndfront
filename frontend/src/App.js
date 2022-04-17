import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compenent/Home/Home";
import About from "./compenent/About/About";
import Contact from "./compenent/Contact/Contact";
import Header from "./compenent/header/header";
import SignIn from "./compenent/SingIn/SignIn";
import SignUp from "./compenent/SignUp/SignUp";
import Account from "./compenent/Account/Account";
import Userprofile from "./compenent/Userprofile/Userprofile";
import { CookiesProvider } from "react-cookie";

import "./App.css";

function App() {
  return (
    <div>
      <CookiesProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="about" element={<About />} />{" "}
            <Route path="contact" element={<Contact />} />{" "}
            <Route path="signIn" element={<SignIn />} />{" "}
            <Route path="signUp" element={<SignUp />} />{" "}
            <Route path="account" element={<Account />} />{" "}
            <Route path="home" element={<Userprofile />} />
          </Routes>{" "}
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
