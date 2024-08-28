import "./App.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Veryveg from "./pages/veryveg/Veryveg";
import { useEffect, useState } from "react";
import Pizzeria from "./pages/pizzeria/Pizzeria";
import Camping from "./pages/camping/Camping";

function App() {

  const location = useLocation();
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setAnimateLogo(true);
    }
  }, [location])

  return (
    <div>
      <div className="containerHeader">
        <Header animate={animateLogo} />
        <Navbar />
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/veryveg" element={<Veryveg />} />
        <Route path="/pizzeria" element={<Pizzeria />} />
        <Route path="/camping" element={<Camping />} />
      </Routes>
      <Footer />
    </div>
  );
}

const AppWrapper: React.FC = () => {
  return (
    <Router basename="portfolio">
      <App />
    </Router>
  );
}

export default AppWrapper;

