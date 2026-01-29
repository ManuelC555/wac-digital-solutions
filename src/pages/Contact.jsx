import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
  <Helmet>
  <title>Contact | Web & AutoCAD Services</title>
  <meta
    name="description"
    content="Contactez-nous par WhatsApp ou Email. Réponse rapide garantie."
  />
  </Helmet>
    <section className="contact-page">
      <div className="contact-container">
        <h1>{t("contact.title")}</h1>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>

        <div className="contact-info">
          <div className="info-box">
            <h3>Email</h3>
            <p>emmanuelcharlesw555@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>WhatsApp</h3>
            <p>+34 643 00 64 45</p>
          </div>
        </div>

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
      </div>
    </section>
    </>
  );
}
