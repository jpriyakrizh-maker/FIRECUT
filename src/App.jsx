import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Chicken from "./pages/Chicken";
import Mutton from "./pages/Mutton";
import Seafood from "./pages/Seafood";
import Biryani from "./pages/Biryani";
import Combos from "./pages/Combos";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/mutton" element={<Mutton />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}