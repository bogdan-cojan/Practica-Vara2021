import React, { useState } from "react";
import "../css/add.css";

function Add() {
  const [name, setName] = useState("");
  const [tara, setTara] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [coach, setCoach] = useState("");
  const [rank, setRank] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");

  const player = {
    nume: name,
    tara: tara,
    sex: sex,
    height: height,
    age: age,
    data_nasterii: date,
    locul_nasterii: location,
    antrenor: coach,
    clasament: rank,
    instagram: insta,
    facebook: facebook,
    twitter: twitter,
  };

  function AddPlayer() {
    alert("Jucator adaugat cu succes !");
    fetch("http://localhost:5000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
  }

  return (
    <main>
      <div className="add-player" data-testid="add-player">
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
            <input
              data-testid="input-test"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setTara(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setSex(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setCoach(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setRank(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setInsta(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setFacebook(event.target.value);
              }}
            />
            <input
              type="text"
              onChange={(event) => {
                setTwitter(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="save"
          data-testid="button"
          style={{ cursor: "pointer" }}
          onClick={() => {
            AddPlayer();
          }}
        >
          Salveaza
        </button>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Add;
