import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <img src={Logo} alt="Logo della Netflix" className="logo" />
        </header>

        <div className="container-login">
          <section className="header">
            <h1 className="title-page">Accedi</h1>
          </section>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="label">
              Indirizzo email o numero di cellulare
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword" className="label">
              Password
            </label>
          </div>

          <button type="button" class="btn btn-danger">
            Accedi
          </button>
          <p style={{color: '#b7b7b7'}}>OPPURE</p>
          <button type="button" class="btn btn-secondary">
            Usa un codice di accesso
          </button>
          <a href="" className="links-login">Hai dimenticato la password?</a>

          <div className="infos-login">
            <div className="container-input">
              <input type="checkbox" name="" id="" /> Ricordami
            </div>

            <section>
              <p style={{color: '#b7b7b7'}}>
                Prima volta su Netflix? <a href="" className="links-login">Registrati</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
