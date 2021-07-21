import React from "react";
import edit from "./icons/edit.svg";
import deletet from "./icons/deletet.svg";
import playergirl from "./icons/playergirl.svg";
import playerboy from "./icons/playerboy.svg";

function Carduri(props) {
  function gen() {
    if (props.image === "playerboy") {
      return <img src={playerboy} />;
    } else {
      return <img src={playergirl} />;
    }
  }

  return (
    <div className="card">
      {gen()}
      <h1>{props.name}</h1>
      <p>Tara: {props.country}</p>
      <div className="buttons" style={{ cursor: "pointer" }}>
        <div className="button">
          <img src={edit} />
        </div>
        <div className="button">
          <img src={deletet} />
        </div>
      </div>
    </div>
  );
}

export default Carduri;
