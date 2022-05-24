import React, { useState } from "react";
import "../jeux/jeux.css";
import { useRef, useEffect } from "react";
//import "../../assets/vide.jpg";

export default function Jeux(props) {
  const [joueur, setJoueur] = useState("");
  const [etat, setEtat] = useState("");
  const [tour, setTour] = useState("");
  const [carte, setCarte] = useState("");
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
    setCarte(data.carte);
    console.log(data);
  }

  useEffect(() => {
    console.log(cols.current);
    cols.current.forEach((col) => {
      col.addEventListener("click", handleClick);
      // on ajoute un event listener sur chaque colonne
    });
  }, []);

  // on modifie les case du tableau
  function affichage(carte) {
    console.log(carte);
    // a finir
  }


  

  // on recupère les statue du jeux
  // on initialise l'intervalle
  useEffect(() => {
    const interval = setInterval(() => {
      connexion();
      affichage(carte);
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
              <div className=" case colorwhite " id="p00"></div>
              <div className=" case colorwhite" id="p01"></div>
              <div className=" case colorwhite" id="p02"></div>
              <div className=" case colorwhite" id="p03"></div>
              <div className=" case colorwhite" id="p04"></div>
              <div className=" case colorwhite" id="p05"></div>
            </div>

            <div className="colonne" ref={addCol} id="2">
              <div className=" case colorwhite" id="p10"></div>
              <div className=" case colorwhite" id="p11"></div>
              <div className=" case colorwhite" id="p12"></div>
              <div className=" case colorwhite" id="p13"></div>
              <div className=" case colorwhite" id="p14"></div>
              <div className=" case colorwhite" id="p15"></div>
            </div>

            <div className="colonne" ref={addCol} id="3">
              <div className=" case colorwhite" id="p20"></div>
              <div className=" case colorwhite" id="p21"></div>
              <div className=" case colorwhite" id="p22"></div>
              <div className=" case colorwhite" id="p23"></div>
              <div className=" case colorwhite" id="p24"></div>
              <div className=" case colorwhite" id="p25"></div>
            </div>

            <div className="colonne" ref={addCol} id="4">
              <div className=" case colorwhite" id="p30"></div>
              <div className=" case colorwhite" id="p31"></div>
              <div className=" case colorwhite" id="p32"></div>
              <div className=" case colorwhite" id="p33"></div>
              <div className=" case colorwhite" id="p34"></div>
              <div className=" case colorwhite" id="p35"></div>
            </div>

            <div className="colonne" ref={addCol} id="5">
              <div className=" case colorwhite" id="p40"></div>
              <div className=" case colorwhite" id="p41"></div>
              <div className=" case colorwhite" id="p42"></div>
              <div className=" case colorwhite" id="p43"></div>
              <div className=" case colorwhite" id="p44"></div>
              <div className=" case colorwhite" id="p45"></div>
            </div>

            <div className="colonne" ref={addCol} id="6">
              <div className=" case colorwhite" id="p50"></div>
              <div className=" case colorwhite" id="p51"></div>
              <div className=" case colorwhite" id="p52"></div>
              <div className=" case colorwhite" id="p53"></div>
              <div className=" case colorwhite" id="p54"></div>
              <div className=" case colorwhite" id="p55"></div>
            </div>

            <div className="colonne" ref={addCol} id="7">
              <div className=" case colorwhite" id="p60"></div>
              <div className=" case colorwhite" id="p61"></div>
              <div className=" case colorwhite" id="p62"></div>
              <div className=" case colorwhite" id="p63"></div>
              <div className=" case colorwhite" id="p64"></div>
              <div className=" case colorwhite" id="p65"></div>
            </div>
          </div>
          <div className="statut">
            <div>
              <p>Etat jeux : {etat}</p>
            </div>
            <div>
              <p>joueur 1 rouge</p>
              <p>Joueur : {joueur}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
