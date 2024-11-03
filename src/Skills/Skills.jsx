import "./Skills.css";
import ReactLogo from "./Asset/ReactLogo.jsx";
import JavaScript from "./Asset/JavaScript.jsx";
import Html from './Asset/Html.jsx';
import Css from './Asset/Css.jsx';
import Git from './Asset/Git.jsx';
import TailWind from './Asset/TailWind.jsx';
import Bootstrap from './Asset/Bootstrap.jsx';

const skills = {
  "React Js": ReactLogo,
  javascript: JavaScript,
  html: Html,
  css: Css,
  Git : Git,
  "Tailwind css": TailWind,
  Bootstrap: Bootstrap,
};

function Skills() {
  return (
    <>
      <section className="Wrapper">
        <h1> My Skills </h1>
        <div className="container">
          {Object.entries(skills).map(([key, Component]) => (
            <div className="skill" key={key}>
              <Component /> {/* Render the component directly */}
              <p>{key}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
