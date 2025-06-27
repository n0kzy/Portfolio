import React from "react";
import "./intro.css";
import profile from "../assets/img_profile.jpg";

const Intro = () => {
  return (
    <section className="Intro">
      <div className="TextContaint">
        <span className="IntroText">Bonjour</span>
        <span className="Name">Je m'appelle Patrick Brugière</span>
        <span className="IntroText">Étudiant en 3ème année de BUT informatique</span>
      </div>
      <div className="ImageContainer">
        <img src={profile} alt="Profil" className="Image" />
      </div>
    </section>
  );
};

export default Intro;
