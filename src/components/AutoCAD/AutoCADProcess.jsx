import { useTranslation } from "react-i18next";
import "./AutoCAD.css";

export default function AutoCADProcess() {
  const { t } = useTranslation();

  return (
    <section className="autocad-process">
      <h2>{t("autocad.process.title")}</h2>

      <ol>
        <li>{t("autocad.process.step1")}</li>
        <li>{t("autocad.process.step2")}</li>
        <li>{t("autocad.process.step3")}</li>
        <li>{t("autocad.process.step4")}</li>
      </ol>
    </section>
  );
}
