import "./Portfolio.css";
import ProjectImg from "./Asset/survey-form-background.jpeg";

const Project = [
  {
    id: 1,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 2,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 3,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
    discription: "A simple HTML and CSS Survey Form",
    image: ProjectImg,
  },
  {
    id: 4,
    name: "Survey Form",
    link: "https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
    gitHubLink: "https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
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
