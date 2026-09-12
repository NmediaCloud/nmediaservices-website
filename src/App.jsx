import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import IPSeries from "./pages/IPSeries";
import Commercials from "./pages/Commercials";
import AnimationVFX from "./pages/AnimationVFX";
import MotionGraphics from "./pages/MotionGraphics";
import About from "./pages/About";
import DigitalMarketing from "./pages/DigitalMarketing";
import TinyWingsBuzz from "./pages/TinyWingsBuzz";
import WorldUnderMyBed from "./pages/WorldUnderMyBed";
import WohShaadi from "./pages/WohShaadi";
import Chimpu from "./pages/Chimpu";
import Cici from "./pages/Cici";
import DigitalConversion from "./pages/DigitalConversion";

// Reset scroll to top whenever the route changes (unless URL has #anchor).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/"                       element={<Home />} />
        <Route path="/ip-series"              element={<IPSeries />} />
        <Route path="/commercials"            element={<Commercials />} />
        <Route path="/animation-vfx"          element={<AnimationVFX />} />
        <Route path="/motion-graphics"        element={<MotionGraphics />} />
        <Route path="/about"                  element={<About />} />
        <Route path="/digital-marketing"      element={<DigitalMarketing />} />
        <Route path="/digital-conversion"     element={<DigitalConversion />} />
        <Route path="/ip/tiny-wings-buzz"     element={<TinyWingsBuzz />} />
        <Route path="/ip/world-under-my-bed"  element={<WorldUnderMyBed />} />
        <Route path="/ip/woh-shaadi"          element={<WohShaadi />} />
        <Route path="/ip/chimpu"              element={<Chimpu />} />
        <Route path="/ip/cici"                element={<Cici />} />
      </Routes>
    </Router>
  );
}
