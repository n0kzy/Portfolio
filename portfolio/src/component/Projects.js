import "./Projects.css"
import React, {useState} from 'react'
import SAE from "../assets/SAE_2A_Anglais.png"
import gromp from "../assets/1.png"
import Popup from "reactjs-popup";
    const Projects = () => {
        const [modal, setModal] = useState(false)
        const [modal2, setModal2] = useState(false)
        const toggleModal = () => {
            setModal(!modal)
        }
        const toggleModal2 = () => {
            setModal2(!modal2)
        }

        return (
            <section id='works' className="Projects">

                <div className="ProjectImageContainer">
                    <div className="Container1">
                        <img src={SAE} alt="description" className="ProjectImage1" onClick={toggleModal}/>
                        {modal && (
                            <div className="middle">
                                <span className="close" onClick={toggleModal}>&times;</span>
                                <div className="text">Dans le cadre de mes Saé de 175 heures, j'ai développé un projet
                                    pour
                                    améliorer les compétences linguistiques en anglais, incluant des quiz, jeux de
                                    mémoire
                                    et mode examen. Nous avons (avec mes 3 coéquipiers) optimisé la base de données pour
                                    garantir la sécurité des données. Grâce à une démarche agile, nous avons assuré la
                                    satisfaction des parties prenantes en répondant aux besoins métiers. J'ai collaboré
                                    avec
                                    mon équipe pour situer mon rôle et contribuer à la réalisation des objectifs. Les
                                    langages PHP, Android, JavaScript et EntityFramework (.NET) ont été utilisés. Nous
                                    avons
                                    suivi la méthode Scrum et utilisé des tableaux Kanban pour organiser notre travail
                                    en
                                    équipe. Cette expérience a enrichi mes compétences techniques et organisationnelles,
                                    tout en contribuant à l'amélioration des compétences linguistiques des
                                    utilisateurs. <br/><br/> <a
                                        href="https://codefirst.iut.uca.fr/git/antoine.jourdain/sae_2a_anglais">REPOS</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="Container2">
                        <img src={gromp} alt="description" className="ProjectImage2" onClick={toggleModal2}/>
                        { modal2 && (
                            <div className="middle">
                                <span className="close" onClick={toggleModal2}>&times;</span>
                                <div className="text">Dans le cadre de mes Saé de 175 heures, j'ai réalisé seul un
                                    projet en
                                    MAUI,
                                    une application fournissant une large gamme d'informations sur les jeux vidéo.
                                    Malgré
                                    les
                                    imprévus
                                    dus à l'absence de mon coéquipier, j'ai su m'adapter et mener à bien le projet.
                                    Cette
                                    application
                                    offre des détails sur les personnages (champions), les cartes et les modes de jeu
                                    disponibles,
                                    comme illustré dans l'image fournie. J'ai optimisé la base de données pour gérer
                                    efficacement
                                    les vastes quantités d'informations sur les jeux vidéo. Malgré les défis, j'ai
                                    appliqué
                                    une
                                    démarche de suivi de projet en utilisant des kanbans. Enfin, j'ai assumé le rôle
                                    complet
                                    de
                                    l'équipe pour mener à bien le projet, démontrant ma capacité à travailler de manière
                                    autonome
                                    et à m'adapter aux circonstances imprévues. <br/><br/>
                                    <a
                                        href="https://codefirst.iut.uca.fr/git/alexandre.bouvot/SAE_2.01_BOUVOT_BRUGIERE.git">REPOS</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
export default Projects