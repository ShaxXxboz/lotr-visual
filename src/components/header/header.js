import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
