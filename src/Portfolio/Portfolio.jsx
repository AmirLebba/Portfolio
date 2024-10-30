import "./Portfolio.css";
import ProjectImg1 from "./Asset/survey-form-background.jpeg";
import ProjectImg2 from "./Asset/lpjh2nrqlvjzitl4hlhx.jpg";
import ProjectImg3 from "./Asset/edhwnh0nvy7vyhejeccf.jpg"
import ProjectImg from "./Asset/q5mhmif1tc0d9lpfaapz.jpg"

const Project = [
  {
    id: 1,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg1,
  },
  {
    id: 2,
    name: "interactive card details form-main",
    link: "https://amirlebba.github.io/interactive-card-details-form-main/",
    gitHubLink: "https://github.com/AmirLebba/interactive-card-details-form-main",
    discription: "A simple Bank Card Validation using React",
    image: ProjectImg2,
  },
  {
    id: 3,
    name: "Frontend mentor age calculator",
    link: "https://amirlebba.github.io/Frontend_mentor_age_calculator/",
    gitHubLink: "https://github.com/AmirLebba/Frontend_mentor_age_calculator",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg3,
  },
  {
    id: 4,
    name: "chat app css illustration",
    link: "https://amirlebba.github.io/chat-app-css-illustration/",
    gitHubLink: "https://github.com/AmirLebba/chat-app-css-illustration",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 5,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 6,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 7,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
];

function Portfolio() {
  return (
    <article className="portfolio-Wrapper">
      <h1>Portfolio</h1>
      <div className="container">
        {Project.map((project) => (
          <div
            className="project"
            key={project.id}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="project-content">
              <h1>{project.name}</h1>
              <p className="description">{project.discription}</p>
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Github Repo
              </a>
              <br />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn">Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Portfolio;
