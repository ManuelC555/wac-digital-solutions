import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AutoCAD.css";

export default function AutoCADCTA() {
  const { t } = useTranslation();

  return (
    <section className="autocad-cta">
      <h2>{t("autocad.cta.title")}</h2>
      <p>{t("autocad.cta.text")}</p>

      <Link to="/devis" className="btn primary">
        {t("autocad.cta.button")}
      </Link>
    </section>
  );
}
