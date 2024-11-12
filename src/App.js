import "./App.css";
import NavBar from "./NavBar/navBar";
import About from "./About/About";
import Skills from "./Skills/Skills.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import ContactMe from "./Contact/ContactMe.jsx";
import Thanks from "./Thanks/Thanks";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Thanks />
    </div>
  );
}

export default App;
