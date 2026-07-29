import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/contact"
import About from "./components/about"
import Home from "./components/home"
import Projects from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20"> {/* pushes content below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;