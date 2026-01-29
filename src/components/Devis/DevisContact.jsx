import { useTranslation } from "react-i18next";
import "./DevisContact.css";

export default function DevisContact({ price, service }) {
  const { t } = useTranslation();

  const message = encodeURIComponent(
    t("whatsapp.message", { price, service })
  );

  return (
    <div className="devis-contact">
      <h3>{t("devis.contactTitle")}</h3>
      <p>{t("devis.contactText")}</p>

      <div className="actions">
        <a
          href={`https://wa.me/34643006445?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
        >
          WhatsApp
        </a>

        <a
          href={`mailto:emmanuelcharlesw555@gmail.com?subject=Devis&body=${message}`}
          className="btn email"
        >
          Email
        </a>
      </div>
    </div>
  );
}
