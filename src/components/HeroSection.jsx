import { useEffect } from 'react'

const HeroSection = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent text-white z-[0]" >
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover brightness-[.4] -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
          Hello, I'm Giorgio
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6 animate-fade-in-up delay-200">
          Full Stack Developer — MERN • C# • Python
        </p>
<a
  href="#projects"
  className="relative inline-block text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl overflow-hidden transition duration-300 ease-in-out group"
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
  <span className="relative z-10">Explore my work</span>
</a>

      </div>
    </section>
  )
}

export default HeroSection
