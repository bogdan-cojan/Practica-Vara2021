import React, { useEffect, useState } from "react";
import "./list.css";
import lupa from "./icons/search.svg";

import Card from "./carduri";

function Home() {
  const [players, setPlayers] = useState([]);
  const [refresh, setRefresh] = useState({});
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nume"]);

  useEffect(() => {
    function getPlayers() {
      fetch("http://localhost:5000/players")
        .then((response) => response.json())
        .then((data) => setPlayers(data));
    }

    getPlayers();
  }, [refresh]);

  function handleOnDeletePlayer(id) {
    fetch("http://localhost:5000/players/" + id, {
      method: "DELETE",
    }).then((response) => {
      setRefresh({});
    });
  }

  function search(players) {
    return players.filter((player) => {
      return searchParam.some((newItem) => {
        return (
          player[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <main>
      <div className="searchBar">
        <div>
          <img src={lupa} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Cauta jucator..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <div className="players">
        <div className="cards">
          {search(players).map((player, index) => (
            <Card
              key={index}
              id={player.id}
              image={player.sex}
              name={player.nume}
              country={player.tara}
              onDeletePlayer={handleOnDeletePlayer}
            />
          ))}
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Home;
