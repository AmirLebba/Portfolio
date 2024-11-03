import "./About.css";
import ProfileImg from "../Accet/Capture.PNG";
import FacebookLogo from "./logos/FacebookLogo.jsx";
import Twiter from "./logos/Twiter.jsx";
import LinkedIn from "./logos/LinkedIn.jsx";
import WhatsApp from "./logos/WhatsApp.jsx";

function About() {
  return (
    <>
      <section className="About-Wrapper">
        <div className="Wraper">
          <div id="Intro">
            <h1 id="name">
              I'm <label> Amir Lebba </label>{" "}
            </h1>
            <h1>I'm a Full Stack Web Developer </h1>
            <h1 id="contact">
              <label>Contace me</label>
            </h1>
          </div>
          <div className="profile">
            <div className="image">
              <img src={ProfileImg} alt="Profile " />
            </div>
            <div id="links">
              <div className="stik"> </div>
              <div id="facebook">
                <FacebookLogo />
              </div>
              <div id="Twiter">
                {" "}
                <Twiter />{" "}
              </div>
              <div id="WhatsApp">
                {" "}
                <WhatsApp />{" "}
              </div>
              <div id="Linkedin">
                {" "}
                <LinkedIn />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About">
        <h1>About</h1>
        <div id="DescriptionWraper">
          <div></div>
          <p>
            a passionate Front-End Developer, with a knack for creating visually
            engaging and user-centered digital experiences. With a strong
            foundation in CSS, JavaScript, React, Node.js, I enjoy bringing
            ideas to life through clean, efficient, and innovative code.
            Throughout my journey, I've worked on a variety of projects, from
            web applications and interactive websites to APIs. I believe in the
            power of collaboration and am always eager to learn new skills and
            technologies to stay at the forefront of the ever-evolving tech
            landscape. When I'm not coding, you can find me exploring new design
            trends or gaming. I'm excited to connect with like-minded
            professionals and contribute to projects that make a difference.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
