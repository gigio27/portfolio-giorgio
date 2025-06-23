const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Selected projects
        </h2>

        <ul className="space-y-6 text-left">
          <li className="border border-gray-800 rounded-lg p-5 hover:shadow-xl transition duration-300">
            <strong className="text-green-400">Twitter Clone</strong>
            <p className="text-gray-300 text-sm mt-1">MERN Stack, Auth, MongoDB</p>
          </li>
          <li className="border border-gray-800 rounded-lg p-5 hover:shadow-xl transition duration-300">
            <strong className="text-green-400">AI Dashboard</strong>
            <p className="text-gray-300 text-sm mt-1">Python, Streamlit, Pandas</p>
          </li>
          <li className="border border-gray-800 rounded-lg p-5 hover:shadow-xl transition duration-300">
            <strong className="text-green-400">Insurance Portal</strong>
            <p className="text-gray-300 text-sm mt-1">WordPress, PHP, Webhooks</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
