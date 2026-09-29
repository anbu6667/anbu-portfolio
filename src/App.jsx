import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";

import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// NEW — import Projects page
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      {/* Dark router bar / dark navbar */}
      <Navbar />

      {/* Router Pages */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />   {/* <-- Added */}
          <Route path="/certifications" element={<Certifications />} />
          
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
