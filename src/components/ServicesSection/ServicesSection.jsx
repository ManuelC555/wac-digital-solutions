import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="services-section">
      <div className="services-container">
        <h2>{t("services.title")}</h2>
        <p className="services-subtitle">
          {t("services.subtitle")}
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>{t("services.web.title")}</h3>
            <p>{t("services.web.desc")}</p>

            <ul>
              <li>{t("services.web.items.site")}</li>
              <li>{t("services.web.items.app")}</li>
              <li>{t("services.web.items.seo")}</li>
            </ul>

            <Link to="/devis" className="service-btn">
              {t("services.cta")}
            </Link>
          </div>

          <div className="service-card highlight">
            <h3>{t("services.autocad.title")}</h3>
            <p>{t("services.autocad.desc")}</p>

            <ul>
              <li>{t("services.autocad.items.plan")}</li>
              <li>{t("services.autocad.items.devis")}</li>
              <li>{t("services.autocad.items.modif")}</li>
            </ul>

            <Link to="/devis" className="service-btn">
              {t("services.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
