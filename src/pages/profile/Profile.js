import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ApiServices from "../../services/ApiServices";
import { setUser, updateUser } from "../../redux/actions/profileActions";

const api = new ApiServices();

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { firstName, lastName } = useSelector((state) => state.profile);
  const [showEditName, setShowEditName] = useState(false);
  const [newfirstName, setNewfirstName] = useState("");
  const [newlastName, setNewlastName] = useState("");

  useEffect(() => {
    if (!user && !localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    const getProfile = async () => {
      const data = await api.getProfileData();
      dispatch(setUser(data.body));
    };
    getProfile();
  }, [dispatch]);

  const handleEditName = () => {
    setShowEditName(!showEditName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstNameToSend = newfirstName ? newfirstName : firstName;
    const lastNameToSend = newlastName ? newlastName : lastName;
    const data = await api.updateProfileData(firstNameToSend, lastNameToSend);
    setShowEditName(!showEditName);
    dispatch(updateUser(data.body));
  };

  return (
    <main className="main bg-gray">
      <div className="header">
        <h1 className="text-black">
          Welcome back
          <br />
          <span className="header-name">
            {firstName} {lastName}!
          </span>
        </h1>
        {showEditName && (
          <div className="box-edit box-edit--input">
            <input
              type="text"
              className="edit-input"
              value={newfirstName}
              placeholder={firstName}
              onChange={(e) => setNewfirstName(e.target.value)}
            />
            <input
              type="text"
              className="edit-input"
              value={newlastName}
              placeholder={lastName}
              onChange={(e) => setNewlastName(e.target.value)}
            />
          </div>
        )}
        {!showEditName && (
          <button className="edit-button" onClick={handleEditName}>
            Edit Name
          </button>
        )}
        {showEditName && (
          <div className="box-edit box-edit--button">
            <button className="edit-button" onClick={handleSubmit}>
              Save
            </button>
            <button className="edit-button" onClick={handleEditName}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div className="box-account">
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
