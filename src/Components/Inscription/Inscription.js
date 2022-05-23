import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Inscription/Inscription.css";

export default function Inscription(props) {
  //on déclare les variables
  const [pseudo, setPseudo] = useState("");
  const [erreur, setErreur] = useState(false);
  const [message, setMessage] = useState("");

  // on récupère les props
  const { setConnected, setIdentifiant, identifiant } = props;

  // on récupere le pseudo saisi par l'utilisateur
  function inputHandler(e) {
    if (e.target.name === "pseudo") {
      setPseudo(e.target.value);
    } else if (e.target.name === "identifiant") {
      setIdentifiant(e.target.value);
    }
  }
  // on envoie le pseudo saisi par l'utilisateur au serveur
  async function register() {
    const response = await fetch(
      `https://trankillprojets.fr/P4/?inscription&pseudo=${pseudo}`
    );
    const data = await response.json();

    if (data.etat === "OK") {
      setIdentifiant(data.identifiant);
      setErreur(false);
      setMessage();
    } else {
      setErreur(true);
      // le serveur répond KO car le pseudo est déjà affecté
      setMessage("Pseudo deja utilisé");
      setPseudo("Erreur");
    }
  }

  async function connexion() {
    const res = await fetch(
      `https://trankillprojets.fr/P4/?participer&identifiant=${identifiant}`
    );
    const data = await res.json();

    if (data.etat === "En cours") {
      setConnected(true);
      console.log(data.etat);
    } else {
      setErreur(true);
      setMessage("Identifiant incorrect");
      console.log(data.etat);
    }
  }

  return (
    <div className="Inscription">
      <div className="Inscription-container">
        <div className="contentinscription">
          <div className="titleinscription">
            <h1>Inscription</h1>
          </div>
        </div>
        <div className="contenta">
          <div className="form">
            <div className="form-center">
              <input
                type="text"
                name="pseudo"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="Pseudo"
                placeholder="Pseudo"
                onChange={inputHandler}
                value={pseudo}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={register}
              >
                Inscription
              </button>
              <p>{message}</p>

              <input
                type="text"
                name="identifiant"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="Pseudo"
                placeholder="identifiant"
                onChange={inputHandler}
                value={identifiant}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={connexion}
              >
                connexion
              </button>
            </div>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}
