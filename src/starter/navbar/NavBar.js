import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/argentBankLogo.png";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/" title="Home">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
