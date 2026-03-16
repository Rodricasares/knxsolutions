import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {

  const { t } = useTranslation();

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h3>KNX Solutions</h3>

          <p>
            {t("footerDescription")}
          </p>

        </div>


        {/* NAVIGATION */}

        <div className="footer-links">

          <h4>{t("footerNavigation")}</h4>

          <a href="#services">{t("services")}</a>

          <a href="#projects">{t("projects")}</a>

          <a href="#contact">{t("contact")}</a>

        </div>


        {/* CONTACT */}

        <div className="footer-contact">

          <h4>{t("footerContact")}</h4>

          <p>Marbella · Sotogrande</p>

          <p>info@knxsolutions.com</p>

          <p>+34 XXX XXX XXX</p>

        </div>

      </div>


      <div className="footer-bottom">

        © {new Date().getFullYear()} KNX Solutions

      </div>

    </footer>

  );

}

export default Footer;