import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="hero-overlay"></div>

      {/* CONTENT */}

      <div className="hero-content">

        <h1>
          KNX Smart Home Integration
        </h1>

        <p>
          Professional automation systems for luxury villas
          in Marbella and Costa del Sol.
        </p>

        <button className="hero-button">
          Request Consultation
        </button>

      </div>

    </section>
  );
}

export default Hero;