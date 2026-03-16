import { useTranslation } from "react-i18next";
import "./Areas.css";

function Areas() {

  const { t } = useTranslation();

  return (

    <section className="areas">

      <div className="areas-container">

        <h2 className="areas-title">
          {t("areasTitle")}
        </h2>

        <p className="areas-description">
          {t("areasDescription")}
        </p>

        <div className="areas-grid">

          <div className="area-item">Marbella</div>
          <div className="area-item">Sotogrande</div>
          <div className="area-item">Estepona</div>
          <div className="area-item">Benahavís</div>
          <div className="area-item">Puerto Banús</div>
          <div className="area-item">Costa del Sol</div>

        </div>

      </div>

    </section>

  );

}

export default Areas;