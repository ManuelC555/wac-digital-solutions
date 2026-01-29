import ServicesSection from "../components/ServicesSection/ServicesSection";
import { Helmet } from "react-helmet-async";


export default function Services() {
  return (
    <>
<Helmet>
  <title>Services Web & AutoCAD | Développement & Dessin technique</title>
  <meta
    name="description"
    content="Services web sur mesure, SEO, maintenance et dessins AutoCAD précis pour vos projets."
  />
</Helmet>
    <ServicesSection />
    </>
);
}
