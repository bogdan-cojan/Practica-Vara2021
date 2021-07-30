import React, { useEffect, useState } from "react";
import "./list.css";

import Card from "./carduri";

function Home() {
  const [players, setPlayers] = useState([]);
  const [refresh, setRefresh] = useState(0);

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
      setRefresh(refresh + 1);

      // setPlayers(
      //   players.filter((value) => {
      //     return value.id != id;
      //   })
      // );
    });
  }

  return (
    <main>
      <div className="players">
        <div className="cards">
          {players.map((player, index) => (
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
