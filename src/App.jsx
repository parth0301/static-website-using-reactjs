import React from "react";
import './App.css';
import ProductLandingPage from './pages/ProductLandingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/ContactMe";

function App() {
  return (
    <div>
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />\
            <Route path="/product" element={<ProductLandingPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;