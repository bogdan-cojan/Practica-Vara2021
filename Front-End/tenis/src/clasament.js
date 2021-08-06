import React, { useEffect, useState } from "react";
import "./clasament.css";

function Clasament() {
  const [players, setPlayers] = useState([]);
  const boys = players.filter((player) => player.sex == "masculin");
  const girls = players.filter((player) => player.sex == "feminin");
  const sortedBoys = boys.sort(
    (firstItem, secondItem) => firstItem.clasament - secondItem.clasament
  );
  const sortedGirls = girls.sort(
    (firstItem, secondItem) => firstItem.clasament - secondItem.clasament
  );

  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <main>
      <section className="glass-top">
        <div className="tops">
          <div className="boys">
            <h1>Top - Baieti</h1>
            <div className="etichete">
              {sortedBoys.map((sortboy, i) => (
                <div className="eticheta" key={i}>
                  <p>{sortboy.nume}</p>
                  <p>Rank: {sortboy.clasament}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="girls">
            <h1>Top - Fete</h1>
            <div className="etichete">
              {sortedGirls.map((sortgirl, i) => (
                <div className="eticheta" key={i}>
                  <p>{sortgirl.nume}</p>
                  <p>Rank: {sortgirl.clasament}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Clasament;
