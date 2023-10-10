import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import CandlePreloader from './components/CandlePreloader';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useScrollDirection from "./components/scrollbar";
import TradingViewWidget from "./components/tickertape";

function App() {
  const [load, upadateLoad] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Router>
     {load ? (
        <CandlePreloader />
      ) : (
        <div className="App">
          {/* Overlay to close sidebar */}
          <div 
            className={`overlay ${sidebarVisible ? 'show' : ''}`}
            onClick={toggleSidebar}
          ></div>
          
          <Navbar 
            sidebarVisible={sidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
