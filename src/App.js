import "./App.css";
import NavBar from "./NavBar/navBar";
import About from "./About/About";
import Skills from './Skills/Skills.jsx'
import Portfolio from "./Portfolio/Portfolio.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
