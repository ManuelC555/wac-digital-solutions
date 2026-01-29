import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Emmanuel — Web & AutoCAD</p>
      <p>{t("footer.rights")}</p>
    </footer>
  );
}
