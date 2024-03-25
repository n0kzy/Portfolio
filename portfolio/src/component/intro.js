import React from "react";
import "./intro.css"
import profile from"../assets/img_profile.jpg"
const intro = () =>{
    return (
        <section className="Intro">
            <div className="TextContaint">
                <span className="IntroText">Bonjour</span> <br/>
                <span className="Name">Je m'appelle Patrick Brugière</span> <br/>
                <span className="IntroText">Etudiant en 2ème année de BUT informatique</span> <br/>
            </div>
            <div className="ImageContainer">
            <img src={profile} alt="Profile" className="Image" />
            </div>
        </section>
    )

}
export default intro;