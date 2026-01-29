import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-container">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>

        <div className="hero-actions">
          <Link to="/devis" className="btn primary">
            {t("hero.cta_primary")}
          </Link>

          <Link to="/services" className="btn secondary">
            {t("hero.cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
