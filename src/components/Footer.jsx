import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">
          <h3>KNX Solutions</h3>
          <p>
            Smart home integration and automation systems
            for luxury villas in Marbella and Costa del Sol.
          </p>
        </div>

        {/* NAVIGATION */}

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Marbella · Sotogrande</p>
          <p>info@knxsolutions.com</p>
          <p>+34 647 979 484</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KNX Solutions · All rights reserved
      </div>

    </footer>
  );
}

export default Footer;