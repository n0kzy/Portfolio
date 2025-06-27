import React from 'react';
import something from '../assets/logo-somethingelse.png';
import cnfpt from '../assets/cnfpt.png';
import './Experience.css';

const Experience = () => {
  return (
    
    <section className="Experience">
  <div className="ExperienceTitle">
    <h1>Expérience Professionnelle</h1>
  </div>
    <div className="ExperienceContainer">
      <div className="ExperienceCard">
        <img src={something} alt="Logo SomethingElse" className="ExperienceLogo" />
        <div className="ExperienceText">
          <h2>SomethingElse</h2>
          <p>
           <strong> Pendant 11 semaines d’avril à juin 2024 </strong> <br />
            - Développement de différents Web Services avec des assurances et/ou des laboratoires d'analyse.<br />
            - Création de nouveaux états au format Fast Report en remplacement des anciens Crystal Report.<br />
            - Développement d'un outil d'exportation de données pour des enquêtes de satisfaction clients.
          </p>
        </div>
      </div>

      <div className="ExperienceCard">
        <img src={cnfpt} alt="Logo CNFPT" className="ExperienceLogo" />
        <div className="ExperienceText">
          <h2>CNFPT</h2>
          <p>
            <strong>Pendant 10 mois, d’octobre 2024 à août 2025 </strong><br />
            - Ajout de nouvelles fonctionnalités dans les applications locales<br />
            - Déplacement de ces dernières sur une machine virtuelle<br />
          </p>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Experience;
