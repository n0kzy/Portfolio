import "./Projects.css"
import React, {useState} from 'react'
import SAE from "../assets/SAE_2A_Anglais.png"
import gromp from "../assets/1.png"
    const Projects = () => {
        return (
            <section id='works' className="Projects">
                <div className="ProjectImageContainer">
                    <div className="Container1">
                        <img src={SAE} alt="description" className="ProjectImage1"/>
                        <div className="middle">
                            <div className="text">Projet qui permet de s'entrainer en anglais de manière ludique avec des quizz, memory et autres jeux</div>
                        </div>
                    </div>
                    <div className="Container2" >
                    <img src={gromp} alt="description" className="ProjectImage2"/>
                    <div className="middle">
                        <div className="text">C'est le croquis d'une application visant a donner une grandes quantités d'informations variés sur des jeux vidéos</div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
export default Projects