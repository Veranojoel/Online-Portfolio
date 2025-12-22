import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-content home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Building exceptional digital experiences
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
