import React, { useState } from "react";
import "../loading/loading.css";
import { useEffect } from "react";

export default function Loading(props) {
  const [erreur, setErreur] = useState(false);
  const [message, setMessage] = useState("");
  // on récupère les props
          
  const { setConnected, setAttente, identifiant,setJeux } = props;

  async function connexion() {
    const res = await fetch(
      `https://trankillprojets.fr/P4/?participer&identifiant=${identifiant}`
    );
    const data = await res.json();
    console.log(data);
    console.log(identifiant);

    if (data.etat === "En cours") {
      setConnected(true);
      setAttente(false);
      setJeux(true);
      //passer la variable setAttente à false
      console.log(data.etat);
    } else if (data.etat === "En attente") {
      setConnected(false);
      setAttente(true);
      //passer la variable setAttente à true
      console.log(data.etat);
    } else {

      setErreur(true);
      setMessage("Identifiant incorrect");
      console.log(data.etat);
    }
  }

  // on initialise l'intervalle
  useEffect(() => {
    const interval = setInterval(() => {
      connexion();
      //console.log("apeller chaque seconde");
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <div className="loader">
        <div className="animation">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
        <div className="text">Recherche de Joueur ...</div>
      </div>
    </div>
  );
}
