import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          KNX<span>Solutions</span>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>

      </div>
    </header>
  );
}