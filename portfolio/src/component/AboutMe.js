import React from "react";
import "./AboutMe.css"
import profile from "../assets/img_profile2.png";
const AboutMe = () => {
    return(
        <section className="aboutMe">
            <div className="TextContainer">
                <img className="Image" src={profile} alt="Profile"/>
                <span className="Text">Je suis actuellement en étude d’informatique, je suis intéressé par les technologies avancées comme l'intelligence artificielle ainsi que leurs structures et possibles failles.
                 En tant qu'autodidacte, je suis capable de m'adapter rapidement à de nouvelles situations et de nouvelles technologies.
                </span>
            </div>
        </section>
    )
}
export default AboutMe