import Tilt from 'react-parallax-tilt';

const techStack = [
  {
    title: 'Front-end',
    tech: 'HTML, CSS, Bootstrap, JavaScript (ES6+), React',
  },
  {
    title: 'Back-end',
    tech: 'Node.js, Express, Python, PHP, C# (ASP.NET), SQL (MySQL, PostgreSQL), MongoDB, Firebase',
  },
  {
    title: 'Cloud & DevOps',
    tech: 'Heroku, Vercel, OVHCloud, Docker, Redis',
  },
  {
    title: 'CMS & E-commerce',
    tech: 'WordPress, WooCommerce, Shopify, Webhooks',
  },
  {
    title: 'Marketing & SEO',
    tech: 'SEO Optimization, Google Ads, Facebook Ads',
  },
  {
    title: 'Tools & Testing',
    tech: 'Git, REST APIs, Unit Testing',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Tech stack
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {techStack.map((skill, index) => (
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
