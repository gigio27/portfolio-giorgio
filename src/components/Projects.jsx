import Tilt from 'react-parallax-tilt'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="text-white py-20 px-4">
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
            >
              <div
                className="border-2 rounded-2xl overflow-hidden p-0.5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{
                  borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6) 1',
                }}
              >
                {/* fond semi-transparent via classe arbitraire */}
                <div className="bg-[rgba(0,0,0,0.4)] p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {proj.description}
                  </p>
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
                </div>
              </div>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
