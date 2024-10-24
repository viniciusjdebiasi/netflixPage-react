import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Logo from "./assets/logo.png";
import { CaretRightIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export default function App() {
  const [email, setEmail] = useState("");
  const [messageCheckEmail, setMessageCheckEmail] = useState("");

  const ReceiveEmail = (email) => {
    setEmail(email);
  };

  const CheckEmail = (event) => {
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessageCheckEmail(
        <>
          <h6 className="error-message">
            <CrossCircledIcon className="icons" /> Inserisci un'e-mail.
          </h6>
        </>
      );
    } else if (!regex.test(email)) {
      setMessageCheckEmail(
        <>
          <h6 className="error-message">
            <CrossCircledIcon className="icons" /> Inserisci un'e-mail valida.
          </h6>
        </>
      );
    } else {
      setMessageCheckEmail("");
    }
  };

  return (
    <div className="main-home">
      <div className="container-home">
        <header className="header-home">
          <img src={Logo} alt="Logo della Netflix" className="logo" />
          <Link to="/LoginPage" className="btn btn-danger Button-home">
            Accedi
          </Link>
        </header>
        <div className="container-cont">
          <h1 className="title-home">
            Film, serie TV e tanto altro, senza limiti
          </h1>
          <h5 className="subtitle-page">
            A partire da 6,99 €. Disdici quando vuoi.
          </h5>
          <p className="paragraph-page">
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </p>
          <div className="enter-email">
            <div class="form-floating" style={{ width: "100%" }}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => ReceiveEmail(event.target.value)}
                class="form-control input-enterEmail"
                id="floatingEmail"
                placeholder="Email"
                maxLength={200}
              />
              <label for="floatingEmail" className="label">
                Indirizzo email
              </label>
            </div>
            <button onClick={CheckEmail} class="btn btn-danger Button-inizia">
              Inizia <CaretRightIcon className="icons" />
            </button>
          </div>
          {messageCheckEmail}
        </div>
      </div>
    </div>
  );
}
