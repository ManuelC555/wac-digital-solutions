import AutoCADHero from "../components/AutoCAD/AutoCADHero";
import AutoCADServices from "../components/AutoCAD/AutoCADServices";
import AutoCADProcess from "../components/AutoCAD/AutoCADProcess";
import AutoCADCTA from "../components/AutoCAD/AutoCADCTA";
import { Helmet } from "react-helmet-async";

export default function AutoCAD() {
  return (
    <>
  <Helmet>
    <title>Services AutoCAD | Plans & Dessins techniques professionnels</title>
      <meta
      name="description"
    content="Plans AutoCAD détaillés, rapides et précis. Adaptés aux architectes et ingénieurs."
    />
  </Helmet>
      <AutoCADHero />
      <AutoCADServices />
      <AutoCADProcess />
      <AutoCADCTA />
    </>
  );
}
