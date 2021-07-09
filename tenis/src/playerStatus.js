import React from "react";
import "./playerStatus.css";
import playerGirl from "./icons/playergirl.svg";
import playerBoy from "./icons/playerboy.svg";
import insta from "./icons/instagram.svg";
import faceb from "./icons/facebook.svg";
import twitee from "./icons/twitter.svg";
import { useParams } from "react-router-dom";

function PlayerStatus() {
  let { id } = useParams();

  const info = [
    {
      image: <img src={playerGirl} />,
      name: "Simona Halep",
      country: "Romania",
      height: "1.68m",
      age: "29 ani",
      data_nasterii: "27 septembrie 1991",
      locul_nasterii: "Constanta, Romania",
      antrenor: "Darren Cahill",
      clasament: "3",
      instagram: (
        <img
          src={insta}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href =
              "https://www.instagram.com/simonahalep/?hl=ro")
          }
        />
      ),
      facebook: (
        <img
          src={faceb}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href = "https://ro-ro.facebook.com/simonahalep")
          }
        />
      ),
      twitee: (
        <img
          src={twitee}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href = "https://twitter.com/simona_halep")
          }
        />
      ),
    },
    {
      image: <img src={playerBoy} />,
      name: "Roger Federer",
      country: "Elvetia",
      height: "1.85m",
      age: "39 ani",
      data_nasterii: "08 august 1981",
      locul_nasterii: "Basel, Elvetia",
      antrenor: "Ivan Ljubicic",
      clasament: "8",
      instagram: (
        <img
          src={insta}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href = "https://www.instagram.com/rogerfederer/")
          }
        />
      ),
      facebook: (
        <img
          src={faceb}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href = "https://www.facebook.com/Federer")
          }
        />
      ),
      twitee: (
        <img
          src={twitee}
          style={{ cursor: "pointer" }}
          onClick={(event) =>
            (window.location.href = "https://twitter.com/rogerfederer")
          }
        />
      ),
    },
  ];

  function getIndex(findName) {
    return info.findIndex((obj) => obj.name === findName);
  }

  return (
    <main>
      <div className="player">
        <div className="pTop">
          <div className="textpTop">
            <h1>{info[getIndex(id)].name}</h1>
            <p>Tara: {info[getIndex(id)].country}</p>
          </div>
          <div>{info[getIndex(id)].image}</div>
        </div>
        <div className="pInfo">
          <h1>Biografie</h1>
          <p>Inaltime: {info[getIndex(id)].height}</p>
          <p>Varsta: {info[getIndex(id)].age}</p>
          <p>Data nasterii: {info[getIndex(id)].data_nasterii}</p>
          <p>Locul nasterii: {info[getIndex(id)].locul_nasterii}</p>
          <p>Antrenor: {info[getIndex(id)].antrenor}</p>
          <p>Clasament: {info[getIndex(id)].clasament}</p>
          <h1>Social Media</h1>
        </div>
        <div className="follow">
          {info[getIndex(id)].instagram}
          {info[getIndex(id)].facebook}
          {info[getIndex(id)].twitee}
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default PlayerStatus;
