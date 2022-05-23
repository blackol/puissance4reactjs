import React from "react";

 

export default function loading(props) {



    const { setConnected, setIdentifiant, identifiant } = props;

    async function connexion() {
      const res = await fetch(
        `https://trankillprojets.fr/P4/?participer&identifiant=${identifiant}`
      );
      const data = await res.json();

      if (data.etat === "En cours") {
        setConnected("1");
        console.log(data.etat);
      } else {
        setErreur(true);
        setMessage("Identifiant incorrect");
        console.log(data.etat);
      }
    }
  return (
    <div className="loadingcontainer">
      <div className="center">
        <div classname="ring">
          <span>Chargement</span>
        </div>
      </div>
    </div>
  );
}
