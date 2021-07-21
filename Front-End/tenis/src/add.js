import React from "react";
import "./add.css";

function Add() {
  return (
    <main>
      <div className="add-player">
        <h1>Adauga jucator nou</h1>
        <div className="add-player2">
          <div className="add-text">
            <p>Nume: </p>
            <p>Tara: </p>
            <p>Sex: </p>
            <p>Inaltime: </p>
            <p>Varsta: </p>
            <p>Data nasterii: </p>
            <p>Locul nasterii: </p>
            <p>Antrenor: </p>
            <p>Clasament: </p>
            <p>Instagram: </p>
            <p>Facebook: </p>
            <p>Twitter: </p>
          </div>
          <div className="add-input">
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
          </div>
        </div>
        <button className="save" style={{ cursor: "pointer" }}>
          Salveaza
        </button>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Add;
