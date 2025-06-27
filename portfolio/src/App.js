import NavBar from "./component/NavBar"
import Intro from "./component/intro"
import AboutMe from "./component/AboutMe"
import Skills from "./component/Skills"
import Contact from "./component/Contact"
import './App.css';
import Projects from "./component/Projects";
import Formation from "./component/Formation";
import Experience from "./component/Experience";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro />
        <AboutMe/>
        <Formation />
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
