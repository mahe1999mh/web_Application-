import "./App.scss";
import Into from "./pages/into/Into";
import Topbar from "./pages/Topbar/Topbar";
import Contact from "./pages/contact/Contact";
import Testimonials from "./pages/testimonials/Testimonials";
import Works from "./pages/works/Works";
import Portfolio from "./pages/portfolio/Portfolio";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Into />
        <Contact />
        <Testimonials />
        <Works />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
