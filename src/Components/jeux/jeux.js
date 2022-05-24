import React, { useState } from "react";
import "../jeux/jeux.css";
import { useRef, useEffect } from "react";
import "../../assets/vide.jpg";

export default function Jeux(props) {
  const [joueur, setJoueur] = useState("");
  const [etat, setEtat] = useState("");
  const [tour, setTour] = useState("");
  //useRef permet de créer des reference vers des elemeent du dom (html)
  const cols = useRef([]);

  // on récupere les props
  const { identifiant } = props;

  // include envoie true si cols contient la colonne
  function addCol(col) {
    if (!cols.current.includes(col)) {
      cols.current.push(col);
    }
  }

  async function handleClick(e) {
    // on récupère la colonne cliquée
    const colonne = e.target.closest(".colonne").id;
    // on envoie la colonne au serveur
    const res = await fetch(
      `https://trankillprojets.fr/P4/?jouer&position=${colonne}&identifiant=${identifiant}`
    );
    const data = await res.json();
    setEtat(data.etat);
    setJoueur(data.joueur);
    setTour(data.tour);
    console.log(data);
  }

  // on envoie la demande de statut au serveur

  async function connexion() {
    const res = await fetch(
      `https://trankillprojets.fr/P4/?statut&identifiant=${identifiant}`
    );
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    console.log(cols.current);
    cols.current.forEach((col) => {
      col.addEventListener("click", handleClick);
      // on ajoute un event listener sur chaque colonne
    });
  }, []);

  // on recupère les statue du jeux
  // on initialise l'intervalle
  useEffect(() => {
    const interval = setInterval(() => {
      connexion();
      console.log("apeller chaque 5 seconde");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerJeux">
      <div className="containerJeux-container">
        <div className="contentJeux">
          <div className="titlejeux">
            <h1>JEUX tours: {tour}</h1>
          </div>
          <div className="zonedejeux">
            <div className="colonne" ref={addCol} id="1">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="2">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="3">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="4">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="5">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="6">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>

            <div className="colonne" ref={addCol} id="7">
              <div className="case">1</div>
              <div className="case">2</div>
              <div className="case">3</div>
              <div className="case">4</div>
              <div className="case">5</div>
              <div className="case">6</div>
            </div>
          </div>
          <div className="statut">
            <div>
              <p>Etat jeux : {etat}</p>
            </div>
            <div>
              <p>Joueur : {joueur}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
