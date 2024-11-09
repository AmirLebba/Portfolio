import "./App.css";
import NavBar from "./NavBar/navBar";
import About from "./About/About";
import Skills from "./Skills/Skills.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import ContactMe from "./Contact/ContactMe.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
