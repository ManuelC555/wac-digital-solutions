import { useTranslation } from "react-i18next";
import "./AutoCAD.css";

export default function AutoCADHero() {
  const { t } = useTranslation();

  return (
    <section className="autocad-hero">
      <div className="overlay" />
      <div className="container">
        <h1>{t("autocad.hero.title")}</h1>
        <p>{t("autocad.hero.subtitle")}</p>
      </div>
    </section>
  );
}
