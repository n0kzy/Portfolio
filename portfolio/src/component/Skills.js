import "./Skills.css"
import React from 'react';
const Skills = () => {
    return(
        <section>
            <div className="Skills">
                <span>
                    <h1 className="Titles" >Langages informatiques :</h1> <br/>
                C, C++, C#, Shell, Java, FXML, PHP8, PL/pgSQL, .NET, Kotlin, ReactNative<br/>

                <h1 className="Titles" >IDE :</h1><br/>
                JetBrains, VisualStudio, VSCode<br/>

                <h1 className="Titles" >Méthodologies et modélisation :</h1> <br/>
                design patterns, Modèle entité – association, UML<br/>

                <h1 className="Titles" >Systèmes de gestion de bases de données : </h1> <br/>
                PostgreSQL, MySQL, MongoDB<br/>

                <h1 className="Titles" >Systèmes d’exploitation :</h1><br/>
                    Linux (debian) et Windows<br/>
                </span>
            </div>
        </section>
    )
}

export default Skills