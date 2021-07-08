import React from "react";
import edit from "./icons/edit.svg";
import deletet from "./icons/deletet.svg";

function Carduri(props) {
  return (
    <div className="card">
      <img src={props.image} />
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
