import React from "react";
import "./playerStatus.css";
import playerGirl from "./icons/playergirl.svg";
import playerBoy from "./icons/playerboy.svg";
import insta from "./icons/instagram.svg";
import faceb from "./icons/facebook.svg";
import twitee from "./icons/twitter.svg";

function PlayerStatus() {
  return (
    <main>
      <div className="player">
        <div className="pTop">
          <div className="textpTop">
            <h1>Simona Halep</h1>
            <p>Tara: Romania</p>
          </div>
          <div>
            <img src={playerGirl} />
          </div>
        </div>
        <div className="pInfo">
          <h1>Biografie</h1>
          <p>Inaltime: 1.68m</p>
          <p>Varsta: 29 ani</p>
          <p>Data nasterii: 27 septembrie 1991</p>
          <p>Locul nasterii: Constanta, Romania</p>
          <p>Antrenor: Darren Cahill</p>
          <p>Clasament: 3</p>
          <h1>Social Media</h1>
        </div>
        <div className="follow">
          <img
            src={insta}
            style={{ cursor: "pointer" }}
            onClick={(event) =>
              (window.location.href =
                "https://www.instagram.com/simonahalep/?hl=ro")
            }
          />
          <img
            src={faceb}
            style={{ cursor: "pointer" }}
            onClick={(event) =>
              (window.location.href = "https://ro-ro.facebook.com/simonahalep")
            }
          />
          <img
            src={twitee}
            style={{ cursor: "pointer" }}
            onClick={(event) =>
              (window.location.href = "https://twitter.com/simona_halep")
            }
          />
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default PlayerStatus;
