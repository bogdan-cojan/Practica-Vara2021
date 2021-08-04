import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "./icons/tennis32px.svg";
import search from "./icons/search.svg";
import home from "./icons/home.svg";
import top from "./icons/top.svg";
import add from "./icons/add.svg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Nav() {
  let history = useHistory();
  const [searchPlayer, setSearchPlayer] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  function handleKeyPress(event) {
    var find = 0;
    if (event.key === "Enter") {
      for (var i = 0; i < players.length; i++) {
        if (players[i].nume === searchPlayer) {
          find = 1;
          history.push(`/status/${players[i].id}`);
        }
      }
      if (find == 0) {
        alert("Jucatorul nu exista !");
      }
    }
  }

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
          <input
            placeholder="Cauta jucator..."
            onKeyPress={handleKeyPress}
            onChange={(event) => {
              setSearchPlayer(event.target.value);
            }}
          />
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
