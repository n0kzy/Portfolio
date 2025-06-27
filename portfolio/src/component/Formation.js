import React from "react";
import "./Formation.css";

const Formation = () => {
  return (
    <section className="formationContainer">
      <div className="formationDivWidth">
        <h1 className="formationTitle">FORMATION</h1>
        <div className="formationDiv">
          <div className="formationBlock">
            <h2>BUT Informatique</h2>
            <h3>2022 - 2025</h3>
            <h3>IUT UCA, Cézeaux<br />63170 Aubière</h3>
          </div>

          <div className="formationBlock">
            <h2>Baccalauréat – Maths & Physique-Chimie</h2>
            <h3>2017 - 2022</h3>
            <h3>Lycée Godefroy de Bouillon<br />63000 Clermont-Ferrand</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
