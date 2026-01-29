import { useTranslation } from "react-i18next";
import "./ContactInfo.css";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.subtitle")}</p>

      <div className="contact-actions">
        <a
          href="https://wa.me/34643006445"
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
        >
          WhatsApp
        </a>

        <a
          href="mailto:emmanuelcharlesw555@gmail.com"
          className="btn email"
        >
          Email
        </a>
      </div>
    </section>
  );
}
