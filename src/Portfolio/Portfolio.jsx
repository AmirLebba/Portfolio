import "./Portfolio.css";


const Project =[
     {
        id:1,
        name :"freeCodeCamp-Survey-Form",
        link :"https://amirlebba.github.io/freeCodeCamp-Survey-Form/",
        gitHubLink:"https://github.com/AmirLebba/freeCodeCamp-Survey-Form",
        discription :"A simple HTML and CSS Survey Form"
     }
];

function Portfolio() {
  return (
    <article className="Wrapper">
      <h1>Portfolio</h1>
      <div className="container">
        {Project.map((project) => (
          <div className="project" key={project.id}>
            <h1>{project.name}</h1>
            <a href={project.link}>Live Demo</a>
            <a href={project.gitHubLink}>GitHub</a>
            <p>{project.discription}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Portfolio;
