import React from "react";
import "./AboutMe.css";
import profile from "../assets/img_profile2.png";

const AboutMe = () => {
    return (
        <section className="aboutMe">
            <div className="TextContainer">
                <img className="Image" src={profile} alt="Profil" />
                <div className="TextBlock">
                    <h1 className="aboutMeTitle">À propos de moi</h1>
                    <p className="Text">
                        Je suis actuellement en étude d’informatique, passionné par les technologies avancées comme l'intelligence artificielle,
                        leur architecture, et leurs potentielles failles.<br /><br />
                        Autodidacte, je m'adapte rapidement à de nouveaux environnements et à l'apprentissage de nouvelles technologies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
