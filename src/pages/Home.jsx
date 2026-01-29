import Hero from "../components/Hero/Hero";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
  <Helmet>
    <title>Web & AutoCAD Services | Solutions digitales professionnelles</title>
    <meta
    name="description"
    content="Création de sites web modernes et services AutoCAD professionnels. Devis rapide, contact WhatsApp."
    />
  </Helmet>
      <Hero />
      <ServicesSection />
    </>
  );
}
