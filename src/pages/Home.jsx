import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <div className="home-photo-frame">
          <span className="home-photo-status">Available for opportunities</span>
          <img className="home-photo" src="/pro.jpg" alt="Anbu Selvam N" />
        </div>
        <p className="home-kicker">Full Stack Developer · Designer · Tech Enthusiast</p>
        <h1 className="home-title">Hi, I'm <span>Anbu Selvam N.</span></h1>
        <p className="home-education">BE Computer Science at Kongu Engineering College</p>
        <p className="home-description">
          I build thoughtful digital experiences that balance clean design with dependable code.
        </p>
        <div className="home-actions">
          <Link to="/projects" className="home-primary-action">Explore my work <span aria-hidden="true">↗</span></Link>
          <Link to="/contact" className="home-secondary-action">Let's connect</Link>
        </div>
        <div className="home-highlights" aria-label="Portfolio highlights">
          <div><strong>05+</strong><span>Projects</span></div>
          <div><strong>03</strong><span>Certifications</span></div>
          <div><strong>∞</strong><span>Curiosity</span></div>
        </div>
      </div>
    </main>
  );
}
