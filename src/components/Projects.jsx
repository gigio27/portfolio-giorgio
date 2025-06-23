import Tilt from 'react-parallax-tilt'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Selected projects
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-left">
          {projects.map((proj) => (
            <Tilt
              key={proj.title}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={400}
              className="bg-[#111827]/40 p-6 rounded-xl border border-gray-800 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{proj.description}</p>
              <p className="text-green-400 text-xs">{proj.tech}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition text-sm"
                >
                  Code
                </a>
                {proj.demo && proj.demo !== '#' && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition text-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
