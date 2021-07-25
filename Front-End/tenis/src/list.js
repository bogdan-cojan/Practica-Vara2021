import React, { useEffect, useState } from "react";
import "./list.css";

import Card from "./carduri";

import { Link } from "react-router-dom";

function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    function getPlayers() {
      fetch("http://localhost:5000/players")
        .then((response) => response.json())
        .then((data) => setPlayers(data));
    }

    getPlayers();
  }, []);

  return (
    <main>
      <div className="players">
        <div className="cards">
          {players.map((player, index) => (
            <Link
              key={index}
              to={`status/${player.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                image={player.sex}
                name={player.nume}
                country={player.tara}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Home;
