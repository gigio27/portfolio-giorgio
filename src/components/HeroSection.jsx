const HeroSection = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-bg">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Hello, I'm Giorgio</h1>
        <p>Full Stack Developer — MERN / C# / Python</p>
        <a href="#projects" className="btn">Explore my work</a>
      </div>
    </section>
  )
}
export default HeroSection
