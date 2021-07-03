import React from "react";
import "./clasament.css";

function Clasament() {
  return (
    <main>
      <section className="glass-top">
        <div className="tops">
          <div className="boys">
            <h1>Top - Baieti</h1>
            <div className="etichete">
              <div className="eticheta">
                <p>Stefanos Tsitsipas</p>
                <p>Rank: 5</p>
              </div>
              <div className="eticheta">
                <p>Stefanos Tsitsipas</p>
                <p>Rank: 5</p>
              </div>
            </div>
          </div>
          <div className="girls">
            <h1>Top - Fete</h1>
            <div className="etichete">
              <div className="eticheta">
                <p>Simona Halep</p>
                <p>Rank: 3</p>
              </div>
              <div className="eticheta">
                <p>Stefanos Tsitsipas</p>
                <p>Rank: 5</p>
              </div>
              <div className="eticheta">
                <p>Stefanos Tsitsipas</p>
                <p>Rank: 5</p>
              </div>
              <div className="eticheta">
                <p>Stefanos Tsitsipas</p>
                <p>Rank: 5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ball1"></div>
      <div className="ball2"></div>
    </main>
  );
}

export default Clasament;
