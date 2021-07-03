import React from "react";
import "./playerStatus.css";
import playerGirl from "./icons/playergirl.svg";
import playerBoy from "./icons/playerboy.svg";
import insta from "./icons/instagram.svg";

function PlayerStatus() {
  return (
    <main>
      <div className="bg">
        <div className="player"></div>
        <div className="jocuri">
          <div className="total"></div>
          <div className="castigate"></div>
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default PlayerStatus;
