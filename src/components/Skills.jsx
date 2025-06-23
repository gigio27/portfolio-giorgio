import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Tech stack
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: 'Frontend & Backend JS',
              tech: 'React, Node.js, Express, MongoDB',
            },
            {
              title: 'Microsoft stack',
              tech: 'C#, ASP.NET Core, Razor, SQL',
            },
            {
              title: 'Python & Data',
              tech: 'Python, Pandas, Web Scraping',
            },
            {
              title: 'CMS & SEO',
              tech: 'WordPress, WooCommerce, SEO, PHP',
            },
          ].map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={400}
              className="bg-gray-900 border border-gray-800 p-5 rounded-lg hover:shadow-2xl transition duration-300"
            >
              <span className="text-green-400 font-semibold">{skill.title}</span>
              <p className="text-gray-300 mt-1 text-sm">{skill.tech}</p>
            </Tilt>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
