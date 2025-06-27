import "./Skills.css"
const Skills = () => {
    return(
        <section>
        <div className="Skills">
            
            <div className="SkillBlock">
            <h1 className="Titles">Langages informatiques :</h1>
            <p>C, C++, C#, Shell, Java, FXML, PHP8, PL/pgSQL, .NET, Kotlin, ReactNative</p>
            </div>

            <div className="SkillBlock">
            <h1 className="Titles">IDE :</h1>
            <p>JetBrains, VisualStudio, VSCode</p>
            </div>

            <div className="SkillBlock">
            <h1 className="Titles">Méthodologies et modélisation :</h1>
            <p>Design patterns, Modèle entité–association, UML</p>
            </div>

            <div className="SkillBlock">
            <h1 className="Titles">Systèmes de gestion de bases de données :</h1>
            <p>PostgreSQL, MySQL, MongoDB</p>
            </div>

            <div className="SkillBlock">
            <h1 className="Titles">Systèmes d’exploitation :</h1>
            <p>Linux (Debian), Windows</p>
            </div>

        </div>
        </section>

    )
}

export default Skills