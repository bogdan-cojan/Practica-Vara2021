import React from "react";
import "./nav.css";
import logo from "./icons/tennis32px.svg";
import search from "./icons/search.svg";
import home from "./icons/home.svg";
import top from "./icons/top.svg";
import add from "./icons/add.svg";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="searchBar">
        <div>
          <img src={search} />
        </div>
        <div>
          <input placeholder="Cauta jucator..." />
        </div>
      </div>
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
        <div className="button">
          <img src={add} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
