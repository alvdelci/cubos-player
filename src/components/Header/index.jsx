import React from "react";
import profile from "../../assets/profile.jpeg";
import logo from "../../assets/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="" />
      <div className="profileContent">
        <img src={profile} alt="" />
        <label>Bem vindo, Velho Delcio</label>
      </div>
    </div>
  );
};

export default Header;
