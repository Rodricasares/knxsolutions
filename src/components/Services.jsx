import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-container">

        <h2 className="services-title">
          Our Services
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>KNX Integration</h3>
            <p>
              Complete KNX automation systems for luxury villas
              and smart homes across Marbella and Costa del Sol.
            </p>
          </div>

          <div className="service-card">
            <h3>Smart Home Repair</h3>
            <p>
              Diagnosis and repair of malfunctioning KNX
              and home automation installations.
            </p>
          </div>

          <div className="service-card">
            <h3>Retrofit Automation</h3>
            <p>
              Upgrade existing homes with modern smart
              home technology without major renovations.
            </p>
          </div>

          <div className="service-card">
            <h3>System Maintenance</h3>
            <p>
              Ongoing monitoring and maintenance
              for KNX and automation systems.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;