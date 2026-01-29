import { useTranslation } from "react-i18next";
import "./AutoCAD.css";

export default function AutoCADServices() {
  const { t } = useTranslation();

  return (
    <section className="autocad-services">
      <h2>{t("autocad.services.title")}</h2>

      <div className="services-grid">
        <div className="card">
          <h3>{t("autocad.services.plan")}</h3>
          <p>{t("autocad.services.plan_desc")}</p>
        </div>

        <div className="card">
          <h3>{t("autocad.services.devis")}</h3>
          <p>{t("autocad.services.devis_desc")}</p>
        </div>

        <div className="card">
          <h3>{t("autocad.services.modif")}</h3>
          <p>{t("autocad.services.modif_desc")}</p>
        </div>
      </div>
    </section>
  );
}
