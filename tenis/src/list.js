import React from "react";
import "./list.css";
import playergirl from "./icons/playergirl.svg";
import playerboy from "./icons/playerboy.svg";

import Card from "./carduri";

import { Link } from "react-router-dom";

function Home() {
  const players = [
    { image: playergirl, name: "Simona Halep", country: "Romania" },
    { image: playerboy, name: "Roger Federer", country: "Elvetia" },
    { image: playergirl, name: "Serena Williams", country: "SUA" },
    { image: playerboy, name: "Novak Đoković", country: "Serbia" },
    { image: playerboy, name: "Rafael Nadal", country: "Spania" },
    { image: playergirl, name: "Elina Svitolina", country: "Ucraina" },
    { image: playerboy, name: "Stefanos Tsitsipas", country: "Grecia" },
  ];

  return (
    <main>
      <div className="players">
        <div className="cards" style={{ cursor: "pointer" }}>
          {players.map((player) => (
            <Link to="/status" style={{ textDecoration: "none" }}>
              <Card
                image={player.image}
                name={player.name}
                country={player.country}
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
