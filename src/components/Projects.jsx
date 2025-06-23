import Tilt from 'react-parallax-tilt';

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Selected projects
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: 'Twitter Clone',
              tech: 'MERN Stack, Auth, MongoDB',
            },
            {
              title: 'AI Dashboard',
              tech: 'Python, Streamlit, Pandas',
            },
            {
              title: 'Insurance Portal',
              tech: 'WordPress, PHP, Webhooks',
            },
          ].map((proj) => (
            <Tilt
              key={proj.title}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={400}
              className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:shadow-2xl transition duration-300"
            >
              <strong className="text-green-400">{proj.title}</strong>
              <p className="text-gray-300 text-sm mt-1">{proj.tech}</p>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
