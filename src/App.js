import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./test.js";
function App() {
  return (
    <BrowserRouter basename="/route-assignment-13-portfolio">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
