import React, { useEffect, useState } from "react";
import "../css/playerStatus.css";
import playergirl from "../icons/playergirl.svg";
import playerboy from "../icons/playerboy.svg";
import insta from "../icons/instagram.svg";
import faceb from "../icons/facebook.svg";
import twitee from "../icons/twitter.svg";
import { useParams } from "react-router-dom";

function PlayerStatus() {
  let { id } = useParams();
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/players/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayer(data);
      });
  }, []);

  function gen() {
    if (player.sex === "masculin") {
      return <img src={playerboy} />;
    } else {
      return <img src={playergirl} />;
    }
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  if (player == null) {
    return null;
  } else {
    return (
      <main>
        <div className="player">
          <div className="pTop">
            <div className="textpTop">
              <h1>{player.nume}</h1>
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
              onClick={() => openInNewTab(`${player.instagram}`)}
            />
            <img
              src={faceb}
              style={{ cursor: "pointer" }}
              onClick={() => openInNewTab(`${player.facebook}`)}
            />
            <img
              src={twitee}
              style={{ cursor: "pointer" }}
              onClick={() => openInNewTab(`${player.twitter}`)}
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
