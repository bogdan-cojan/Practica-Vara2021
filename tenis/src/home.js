import React from "react";
import "./home.css";
import playergirl from "./icons/playergirl.svg";
import playerboy from "./icons/playerboy.svg";
import edit from "./icons/edit.svg";
import deletet from "./icons/deletet.svg";

function Home() {
  return (
    <main>
      <div className="players">
        <div className="cards" style={{ cursor: "pointer" }}>
          <div className="card">
            <img src={playergirl} />
            <h1>Simona Halep</h1>
            <p>Tara: Romania</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={playerboy} />
            <h1>Roger Federer</h1>
            <p>Tara: Elvetia</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={playergirl} />
            <h1>Serena Williams</h1>
            <p>Tara: SUA</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={playerboy} />
            <h1>Novak Đoković</h1>
            <p>Tara: Serbia</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={playerboy} />
            <h1>Rafael Nadal</h1>
            <p>Tara: Spania</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={playergirl} />
            <h1>Elina Svitolina</h1>
            <p>Tara: Ucraina</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={playerboy} />
            <h1>Stefanos Tsitsipas</h1>
            <p>Tara: Grecia</p>
            <div className="buttons" style={{ cursor: "pointer" }}>
              <div className="button">
                <img src={edit} />
              </div>
              <div className="button">
                <img src={deletet} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Home;
