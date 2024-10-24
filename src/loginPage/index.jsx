import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { CrossCircledIcon } from "@radix-ui/react-icons";

import Logo from "../assets/logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messagePassword, setMessagePassword] = useState("");

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ReceiveEmail = (email) => {
    setEmail(email);
  };

  const ReceivePassword = (password) => {
    setPassword(password);
  };

  const CheckValues = () => {
    if (!email) {
      setMessageEmail(
        <>
          <h6 className="error-message" style={{marginBottom: '1rem'}}>
            <CrossCircledIcon className="icons" /> Inserisci un'e-mail.
          </h6>
        </>
      );
    } else if (!regex.test(email)) {
      setMessageEmail(
        <>
          <h6 className="error-message" style={{marginBottom: '1rem'}} >
            <CrossCircledIcon className="icons" /> Inserisci un'e-mail valida.
          </h6>
        </>
      );
    } else {
      setMessageEmail("");
    }

    if (!password) {
      setMessagePassword(
        <>
          <h6 className="error-message" style={{marginTop: '1rem'}} >
            <CrossCircledIcon className="icons" /> Inserisci la tua password
          </h6>
        </>
      );
    } else if (password.length < 4) {
      setMessagePassword(
        <>
          <h6 className="error-message"  style={{marginTop: '1rem'}} >
            <CrossCircledIcon className="icons" /> La password deve avere una
            lunghezza compresa tra 4 e 60 caratteri.
          </h6>
        </>
      );
    } else {
      setMessagePassword("");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <img src={Logo} alt="Logo della Netflix" className="logo" />
        </header>

        <div className="container-login">
          <section className="header">
            <h2 className="title-page">Accedi</h2>
          </section>

          <div class="form-floating mb-3">
            <input
              type="email"
              name="email"
              class="form-control input-custom"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => ReceiveEmail(event.target.value)}
            />
            <label for="floatingInput" className="label">
              Indirizzo email o numero di cellulare
            </label>
          </div>
          {messageEmail}
          <div class="form-floating">
            <input
              type="password"
              class="form-control input-custom"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(event) => ReceivePassword(event.target.value)}
            />
            <label for="floatingPassword" className="label">
              Password
            </label>
          </div>
          {messagePassword}

          <button
            type="button"
            class="btn btn-danger Danger ButtonAccedi-Login"
            onClick={CheckValues}
          >
            Accedi
          </button>
          <p style={{ color: "#b7b7b7" }}>OPPURE</p>
          <button type="button" class="btn btn-secondary ButtonAccedi-Login">
            Usa un codice di accesso
          </button>
          <a href="" className="links-login">
            Hai dimenticato la password?
          </a>

          <div className="infos-login">
            <div className="container-input">
              <input type="checkbox" name="" id="" /> Ricordami
            </div>

            <section>
              <p style={{ color: "#b7b7b7" }}>
                Prima volta su Netflix?{" "}
                <a href="" className="links-login">
                  Registrati
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
