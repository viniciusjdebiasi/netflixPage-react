import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Logo from "./assets/logo.png";
import { CaretRightIcon } from "@radix-ui/react-icons";

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
          <h1 className="title-home">Film, serie TV e tanto altro, senza limiti</h1>
          <h5 className="subtitle-page">A partire da 6,99 €. Disdici quando vuoi.</h5>
          <p className="paragraph-page">
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </p>
          <div className="enter-email">
            <div class="form-floating" style={{ width: "100%"}}>
              <input
                type="email"
                class="form-control input-enterEmail"
                id="floatingEmail"
                placeholder="Email"
              />
              <label for="floatingEmail" className="label">
                Indirizzo email
              </label>
            </div>
            <button class="btn btn-danger Button-inizia">Inizia <CaretRightIcon className="icons" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
