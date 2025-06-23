const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
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
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hello, I'm Giorgio
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Full Stack Developer — MERN • C# • Python
        </p>
        <a
          href="#projects"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          Explore my work
        </a>
      </div>
    </section>
  )
}

export default HeroSection
