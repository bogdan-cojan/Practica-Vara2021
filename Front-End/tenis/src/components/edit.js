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

  useEffect(() => {
    function getPlayer() {
      fetch(`http://localhost:5000/players/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPlayer(data);
        });
    }

    getPlayer();
  }, []);

  const [player, setPlayer] = useState([]);
  const [age, setAge] = useState("");
  const [antrenor, setAntrenor] = useState("");
  const [clasament, setClasament] = useState("");

  const edit = {
    age: age,
    antrenor: antrenor,
    clasament: clasament,
  };

  function EditPlayer() {
    alert("Salvare cu succes !");
    fetch("http://localhost:5000/players/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    });
  }

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
            <p>
              Varsta:{" "}
              <input
                className="edit-input"
                type="text"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </p>
            <p>Data nasterii: {player.data_nasterii}</p>
            <p>Locul nasterii: {player.locul_nasterii}</p>
            <p>
              Antrenor:{" "}
              <input
                className="edit-input"
                type="text"
                onChange={(event) => {
                  setAntrenor(event.target.value);
                }}
              />
            </p>
            <p>
              Clasament:{" "}
              <input
                className="edit-input"
                type="text"
                onChange={(event) => {
                  setClasament(event.target.value);
                }}
              />
            </p>
            <button
              className="save"
              style={{ cursor: "pointer" }}
              onClick={() => {
                EditPlayer();
              }}
            >
              Salveaza
            </button>
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
