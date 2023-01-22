import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/actions/authActions";
import logo from "../../assets/logo/argentBankLogo.png";
import { unsetUser } from "../../redux/actions/profileActions";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
    dispatch(unsetUser());
    localStorage.removeItem("token");
    navigate("/");
  };

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
        <Link
          className="main-nav-item"
          to={user && profile ? "/profile" : "/login"}
        >
          <i className="fa fa-user-circle"></i>
          {profile.firstName ? profile.firstName : "Sign In"}
        </Link>
        {user && profile && (
          <Link className="main-nav-item" to="/" onClick={() => logout()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
