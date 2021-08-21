import React from "react";
import edit from "../icons/edit.svg";
import deletet from "../icons/deletet.svg";
import playergirl from "../icons/playergirl.svg";
import playerboy from "../icons/playerboy.svg";

import { useHistory } from "react-router-dom";

function Carduri(props) {
  let history = useHistory();

  function handleClickStatus() {
    history.push(`/status/${props.id}`);
  }

  function handleClickEdit() {
    history.push(`/edit/${props.id}`);
  }

  function gen() {
    if (props.image === "masculin") {
      return <img src={playerboy} />;
    } else {
      return <img src={playergirl} />;
    }
  }

  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleClickStatus();
      }}
    >
      {gen()}
      <h1>{props.name}</h1>
      <p>Tara: {props.country}</p>
      <div className="buttons">
        <div
          className="button"
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            event.stopPropagation();
            handleClickEdit();
          }}
        >
          <img src={edit} />
        </div>
        <div
          className="button"
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            event.stopPropagation();
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
