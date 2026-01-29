import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
        <img src="/images/logo.jpg" alt="Logo Web & AutoCAD" />
          Web & AutoCAD
        </Link>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/services" onClick={() => setOpen(false)}>
            {t("nav.services")}
          </Link>

          <Link to="/autocad" onClick={() => setOpen(false)}>
            {t("nav.autocad")}
          </Link>

          <Link to="/devis" onClick={() => setOpen(false)}>
            {t("nav.devis")}
          </Link>

          <Link to="/contact" className="cta" onClick={() => setOpen(false)}>
            {t("nav.contact")}
          </Link>
          
          <div className="lang-switch">
            <button onClick={() => changeLang("fr")}>FR</button>
            <button onClick={() => changeLang("en")}>EN</button>
            <button onClick={() => changeLang("es")}>ES</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
