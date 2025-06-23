const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div
      className="group bg-neutral-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>
      <span className="inline-block mt-3 text-sm text-green-400">{tech}</span>
      
      <div className="flex gap-4 mt-5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition text-sm"
        >
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition text-sm"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
