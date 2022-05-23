import React from "react";
import "../loading/loading.css";

export default function Loading() {
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
