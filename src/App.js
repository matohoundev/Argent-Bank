import { Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import NavBar from "./starter/navbar/NavBar";
import Footer from "./starter/footer/Footer";
import Main from "./pages/home/Main";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
