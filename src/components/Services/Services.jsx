import { useTranslation } from "react-i18next";
import "./Services.css";

function Services() {

  const { t } = useTranslation();

  return (

    <section className="services" id="services">

      <div className="services-container">

        <h2>{t("ourServices")}</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>{t("service1Title")}</h3>
            <p>{t("service1Text")}</p>
          </div>

          <div className="service-card">
            <h3>{t("service2Title")}</h3>
            <p>{t("service2Text")}</p>
          </div>

          <div className="service-card">
            <h3>{t("service3Title")}</h3>
            <p>{t("service3Text")}</p>
          </div>

          <div className="service-card">
            <h3>{t("service4Title")}</h3>
            <p>{t("service4Text")}</p>
          </div>

        </div>

      </div>

    </section>

  );

}

export default Services;