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
    <div className="card" style={{ cursor: "pointer" }}>
      {gen()}
      <h1>{props.name}</h1>
      <p>Tara: {props.country}</p>
      <div className="buttons">
        <div className="button" style={{ cursor: "pointer" }}>
          <img src={edit} />
        </div>
        <div
          className="button"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.onDeletePlayer(props.id);
          }}
        >
          <img src={deletet} />
        </div>
      </div>
    </div>
  );
}

export default Carduri;
