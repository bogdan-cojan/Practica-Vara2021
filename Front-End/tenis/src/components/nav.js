import React from "react";
import "../css/nav.css";
import logo from "../icons/tennis32px.svg";
import home from "../icons/home.svg";
import top from "../icons/top.svg";
import add from "../icons/add.svg";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} />
      </div>
      <h1>
        <span>Tenis</span>
      </h1>
      <div className="buttons" style={{ cursor: "pointer" }}>
        <Link to="/">
          <div className="button">
            <img src={home} />
          </div>
        </Link>
        <Link to="/top">
          <div className="button">
            <img src={top} />
          </div>
        </Link>
        <Link to="/add">
          <div className="button">
            <img src={add} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
