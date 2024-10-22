import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="main-home">
      <div className="container-home">
        <header className="header-home">
          <img src={Logo} alt="Logo della Netflix" className="logo" />
          <a
            href="/LoginPage"
            target="_blank"
            className="btn btn-danger Button-home"
          >
            Accedi
          </a>
        </header>
        <div className="container-cont">
          <h1>Film, serie TV e tanto altro, senza limiti</h1>
          <h3>A partire da EUR 6.99. Disdici quando vuoi.</h3>
          <p>
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </p>
          <div className="enter-email">
            <div class="form-floating" style={{ width: "100%" }}>
              <input
                type="password"
                class="form-control input-enterEmail"
                id="floatingPassword"
                placeholder="Email"
              />
              <label for="floatingPassword" className="label">
                Indirizzo email
              </label>
            </div>
            <button class="btn btn-danger Button-inizia">Inizia</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
