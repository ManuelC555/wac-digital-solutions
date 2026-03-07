import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AutoCAD from "./pages/AutoCAD";
import Devis from "./pages/Devis";
import Produits from "./pages/Produits";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/autocad" element={<AutoCAD />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produits" element={<Produits />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
