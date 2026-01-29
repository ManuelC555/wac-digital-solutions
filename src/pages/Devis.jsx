import { useState } from "react";
import { useTranslation } from "react-i18next";
import DevisContact from "../components/Devis/DevisContact";
import { Helmet } from "react-helmet-async";
import "./Devis.css";

export default function Devis() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("web");
  const [pages, setPages] = useState("");
  const [surface, setSurface] = useState("");

  const [seo, setSeo] = useState(false);
  const [multi, setMulti] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const pagesNum = parseInt(pages, 10) || 0;
  const surfaceNum = parseFloat(surface.replace(",", ".")) || 0;

  const webPrice =
    300 +
    pagesNum * 40 +
    (seo ? 150 : 0) +
    (multi ? 120 : 0) +
    (maintenance ? 100 : 0);

  const cadPrice =
    surfaceNum * 4 + (urgent ? surfaceNum * 1.5 : 0);

  const handleDecimalInput = (value, setter) => {
    if (value === "") {
      setter("");
      return;
    }

    if (/^\d*([.,]?\d*)?$/.test(value)) {

      if (/^0\d+/.test(value)) {
        setter(String(parseFloat(value)));
      } else {
        setter(value);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Demande de devis | Web & AutoCAD</title>
        <meta
          name="description"
          content="Obtenez une estimation instantanée pour votre site web ou projet AutoCAD."
        />
      </Helmet>

      <section className="devis">
        <h1>{t("devis.title")}</h1>

        <div className="tabs">
          <button
            className={tab === "web" ? "active" : ""}
            onClick={() => setTab("web")}
          >
            {t("devis.webTab")}
          </button>
          <button
            className={tab === "cad" ? "active" : ""}
            onClick={() => setTab("cad")}
          >
            {t("devis.cadTab")}
          </button>
        </div>

        {tab === "web" && (
          <div className="panel">
            <label className="row">
              <span>{t("devis.web.pages")}</span>
              <input
                type="text"
                inputMode="decimal"
                value={pages}
                onChange={(e) =>
                  handleDecimalInput(e.target.value, setPages)
                }
              />
            </label>

            <label className="checkbox-label">
              <input type="checkbox" checked={seo} onChange={() => setSeo(!seo)} />
              {t("devis.web.seo")}
            </label>

            <label className="checkbox-label">
              <input type="checkbox" checked={multi} onChange={() => setMulti(!multi)} />
              {t("devis.web.multi")}
            </label>

            <label className="checkbox-label">
              <input type="checkbox" checked={maintenance} onChange={() => setMaintenance(!maintenance)} />
              {t("devis.web.maintenance")}
            </label>

            <div className="price">
              {t("devis.estimate")} :
              <strong> {webPrice} {t("devis.currency")}</strong>
            </div>
          </div>
        )}

        {tab === "cad" && (
          <div className="panel">
            <label className="row">
              <span>{t("devis.cad.surface")}</span>
              <input
                type="text"
                inputMode="decimal"
                value={surface}
                onChange={(e) =>
                  handleDecimalInput(e.target.value, setSurface)
                }
              />
            </label>

            <label className="checkbox-label">
              <input type="checkbox" checked={urgent} onChange={() => setUrgent(!urgent)} />
              {t("devis.cad.urgent")}
            </label>

            <div className="price">
              {t("devis.estimate")} :
              <strong> {cadPrice.toFixed(2)} {t("devis.currency")}</strong>
            </div>
          </div>
        )}

        <DevisContact
          service={tab === "web" ? "Web" : "AutoCAD"}
          price={tab === "web" ? webPrice : cadPrice}
        />
      </section>
    </>
  );
}
