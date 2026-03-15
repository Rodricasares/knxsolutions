import "./Tech.css";

function Tech() {
  return (
    <section className="tech">

      <h2 className="tech-title">
        Technologies we work with
      </h2>

      <div className="tech-slider">

        <div className="tech-track">

          <img src="/logos/hager.png" alt="hager"/>
          <img src="/logos/comelit.gif" alt="COMELIT"/>
          <img src="/logos/control4.png" alt="Control4"/>
          <img src="/logos/junt.png" alt="JUNT"/>
          <img src="/logos/niessen.png" alt="NIESSEN"/>
          <img src="/logos/iddero.jpg" alt="Iddero"/>

          {/* duplicados para loop */}

          <img src="/logos/knx.png" alt="KNX"/>
          <img src="/logos/dali.jpg" alt="DALI"/>
          <img src="/logos/airzone.webp" alt="Airzone"/>
          <img src="/logos/gira.png" alt="Gira"/>
          <img src="/logos/abb.png" alt="ABB"/>
          <img src="/logos/schneider.png" alt="Schneider"/>

        </div>

      </div>

    </section>
  );
}

export default Tech;