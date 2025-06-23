const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-500">
          Tech stack
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <li className="bg-gray-900 border border-gray-800 p-5 rounded-lg hover:scale-[1.02] transition">
            <span className="text-green-400 font-semibold">Frontend & Backend JS</span>
            <p className="text-gray-300 mt-1 text-sm">React, Node.js, Express, MongoDB</p>
          </li>
          <li className="bg-gray-900 border border-gray-800 p-5 rounded-lg hover:scale-[1.02] transition">
            <span className="text-green-400 font-semibold">Microsoft stack</span>
            <p className="text-gray-300 mt-1 text-sm">C#, ASP.NET Core, Razor, SQL</p>
          </li>
          <li className="bg-gray-900 border border-gray-800 p-5 rounded-lg hover:scale-[1.02] transition">
            <span className="text-green-400 font-semibold">Python & Data</span>
            <p className="text-gray-300 mt-1 text-sm">Python, Pandas, Web Scraping</p>
          </li>
          <li className="bg-gray-900 border border-gray-800 p-5 rounded-lg hover:scale-[1.02] transition">
            <span className="text-green-400 font-semibold">CMS & SEO</span>
            <p className="text-gray-300 mt-1 text-sm">WordPress, WooCommerce, SEO, PHP</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
