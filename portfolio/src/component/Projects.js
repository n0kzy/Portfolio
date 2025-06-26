import "./Projects.css"
import { useState, useEffect, useRef } from 'react'
import SAE from "../assets/SAE_2A_Anglais.png"
import gromp from "../assets/1.png"
import ffgo from "../assets/FFGO_logo2.png"
import power4 from "../assets/power4.png"
import mvvm from "../assets/MVVM.png"

const Projects = () => {
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [modal5, setModal5] = useState(false)

    const toggleModal = () => setModal(!modal)
    const toggleModal2 = () => setModal2(!modal2)
    const toggleModal3 = () => setModal3(!modal3)
    const toggleModal4 = () => setModal4(!modal4)
    const toggleModal5 = () => setModal5(!modal5)

    const modalRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal(false)
                setModal2(false)
                setModal3(false)
                setModal4(false)
                setModal5(false)
            }
        }

        const handleScroll = () => {
            setModal(false)
            setModal2(false)
            setModal3(false)
            setModal4(false)
            setModal5(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className="Projects">
            <div className="ProjectImageContainer">
                <div className="Container">
                    <img src={SAE} alt="description" className="ProjectImage" onClick={toggleModal} />
                    {modal && (
                        <div className="middle" ref={modalRef}>
                            <span className="close" onClick={toggleModal}>&times;</span>
                            <div className="text">
                                Pendant mes 175 heures de projet SAÉ, nous avons collaboré à une initiative visant à renforcer les compétences linguistiques en anglais à travers des quiz, des jeux de mémoire et un mode examen. Notre équipe, composée de quatre membres, a œuvré ensemble pour optimiser la sécurité des données en améliorant la base de données. Grâce à une approche agile, nous avons répondu de manière efficace aux besoins métiers et veillé à la satisfaction des parties prenantes. J'ai joué un rôle actif dans l'équipe en contribuant à la définition des rôles et à la réalisation des objectifs communs. Nos compétences en langages de programmation, notamment PHP, Android, JavaScript et EntityFramework (.NET), ainsi que notre utilisation de la méthodologie Scrum et des tableaux Kanban, ont facilité notre travail collaboratif.

Parallèlement, j'ai assumé la responsabilité individuelle du développement de l'API utilisée dans l'application, en tant que seul membre ayant suivi la spécialité mobile. J'ai travaillé à partir de la base de données que nous avions élaborée en groupe plus tôt dans l'année pour créer une API complète, que j'ai ensuite déployée grâce à Docker. J'ai également ajouté un jeton d'authentification (bearer token) pour renforcer la sécurité de l'application.

Cette expérience a été enrichissante à bien des égards, tant sur le plan technique que sur le plan organisationnel, et a également contribué à l'amélioration des compétences linguistiques des utilisateurs.

                                <br/><br/> <a href="https://github.com/n0kzy/In_english_please">REPOS</a></div>
                        </div>
                    )}
                </div>
                <div className="Container">
                    <img src={gromp} alt="description" className="ProjectImage" onClick={toggleModal2} />
                    {modal2 && (
                        <div className="middle" ref={modalRef}>
                            <span className="close" onClick={toggleModal2}>&times;</span>
                            <div className="text">
                                Dans le cadre de mes SAÉ de 175 heures, j'ai réalisé seul un projet MAUI, une application fournissant une large gamme d'informations sur les jeux vidéo. Malgré les imprévus dus à l'absence de mon coéquipier, j'ai su m'adapter et mener à bien le projet. Cette application offre des détails sur les personnages (champions), les cartes et les modes de jeu disponibles, comme illustré dans l'image fournie. J'ai optimisé la base de données pour gérer efficacement les vastes quantités d'informations sur les jeux vidéo. Malgré les défis, j'ai appliqué une démarche de suivi de projet en utilisant des kanbans. Enfin, j'ai assumé le rôle complet de l'équipe pour mener à bien le projet, démontrant ma capacité à travailler de manière autonome et à m'adapter aux circonstances imprévues.

Dans le cadre de la conception de ce projet MAUI, j'ai également été amené à réaliser trois diagrammes essentiels avant la phase de développement. Tout d'abord, j'ai conçu un diagramme de classe pour représenter la structure des données et des objets de l'application. Ensuite, j'ai élaboré un autre diagramme de classe mettant en avant la partie persistance, détaillant la manière dont les données seraient stockées et récupérées dans la base de données. Enfin, j'ai créé un diagramme de paquetage pour organiser et visualiser la structure globale de l'application. Concernant l'architecture du projet, j'ai fait le choix d'adopter une architecture en couches, avec une séparation claire entre la présentation, la logique métier et la persistance des données. J'ai également élaboré des user stories, des esquisses et des storyboards pour visualiser et planifier les fonctionnalités de l'application, en assurant une cohérence entre les différentes parties du projet. Toutes ses réalisations sont disponibles dans le dépôt ci-dessous.

                                <br/><br/><a href="https://github.com/n0kzy/IHM_Application">REPOS</a></div>
                        </div>
                    )}
                </div>
                <div className="Container">
                    <img src={ffgo} alt="description" className="ProjectImage" onClick={toggleModal3} />
                    {modal3 && (
                        <div className="middle" ref={modalRef}>
                            <span className="close" onClick={toggleModal3}>&times;</span>
                            <div className="text">
                                Pendant mes 110 heures de projet SAÉ, nous avons créé un projet permettant de capturer des animaux en les prenant en photos. Ce projet a pour but de faire sortir les utilisateurs de chez eux pour aller dans des endroits où ils n'iraient pas d'habitude afin de capturer des animaux. Le projet a été réalisé en équipe de 5 personnes, avec une partie application mobile et une partie API. J'ai travaillé sur la partie mobile, en utilisant React Native pour développer l'application.
                                <br/><br/> <a href="https://github.com/n0kzy/FFGO">REPOS</a></div>
                        </div>
                    )}
                </div>
                <div className="Container">
                    <img src={power4} alt="description" className="ProjectImage" onClick={toggleModal4} />
                    {modal4 && (
                        <div className="middle" ref={modalRef}>
                            <span className="close" onClick={toggleModal4}>&times;</span>
                            <div className="text">
                                J'ai réalisé ce projet dans le cadre de ma troisième année de BUT informatique dans un temps réduit de 2 mois. Le projet consiste en une application en SwiftUI pour jouer au puissance 4, en utilisant une bibliothèque extérieure comme modèle à utiliser sans connaître le code de ce modèle. J'ai pu réaliser un jeu jouable avec les différents types de joueurs ainsi que des joueurs persistants.
                                <br/><br/> <a href="https://github.com/n0kzy/Swift_UI">REPOS</a></div>
                        </div>
                    )}
                </div>
                <div className="Container">
                    <img src={mvvm} alt="description" className="ProjectImage" onClick={toggleModal5} />
                    {modal5 && (
                        <div className="middle" ref={modalRef}>
                            <span className="close" onClick={toggleModal5}>&times;</span>
                            <div className="text">
                                J'ai réalisé cette application dans le cadre de ma troisième année de BUT informatique dans un temps réduit de 2 mois. Ce projet en .NET consiste à implémenter l'architecture MVVM (Model-View-ViewModel) dans une application qui a pour objectif de louer du matériel informatique.
<br/><br/> <a href="https://github.com/n0kzy/MVVM">REPOS</a></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Projects
