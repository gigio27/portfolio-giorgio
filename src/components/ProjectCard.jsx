import '../styles/ProjectCard.css'

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="tech">{tech}</span>
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">Code</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  )
}

export default ProjectCard
