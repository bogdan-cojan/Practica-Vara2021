import React, { useEffect, useState } from "react";
import "./playerStatus.css";
import playergirl from "./icons/playergirl.svg";
import playerboy from "./icons/playerboy.svg";
import insta from "./icons/instagram.svg";
import faceb from "./icons/facebook.svg";
import twitee from "./icons/twitter.svg";
import { useParams } from "react-router-dom";

function PlayerStatus() {
  let { id } = useParams();

  useEffect(() => {
    function getPlayer() {
      fetch(`http://localhost:5000/players/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPlayer(data);
          console.log(data);
        });
    }

    getPlayer();
  }, []);

  const [player, setPlayer] = useState();

  function gen() {
    if (player.image === "playerboy") {
      return <img src={playerboy} />;
    } else {
      return <img src={playergirl} />;
    }
  }

  if (player == null) {
    return null;
  } else {
    return (
      <main>
        <div className="player">
          <div className="pTop">
            <div className="textpTop">
              <h1>{player.name}</h1>
              <p>Tara: {player.tara}</p>
            </div>
            <div>{gen()}</div>
          </div>
          <div className="pInfo">
            <h1>Biografie</h1>
            <p>Inaltime: {player.height}</p>
            <p>Varsta: {player.age}</p>
            <p>Data nasterii: {player.data_nasterii}</p>
            <p>Locul nasterii: {player.locul_nasterii}</p>
            <p>Antrenor: {player.antrenor}</p>
            <p>Clasament: {player.clasament}</p>
            <h1>Social Media</h1>
          </div>
          <div className="follow">
            <img
              src={insta}
              style={{ cursor: "pointer" }}
              onClick={(event) =>
                (window.location.href = `${player.instagram}`)
              }
            />
            <img
              src={faceb}
              style={{ cursor: "pointer" }}
              onClick={(event) => (window.location.href = `${player.facebook}`)}
            />
            <img
              src={twitee}
              style={{ cursor: "pointer" }}
              onClick={(event) => (window.location.href = `${player.twitee}`)}
            />
          </div>
        </div>
        <div className="ball1"></div>
        <div className="ball2"></div>
      </main>
    );
  }
}

export default PlayerStatus;
