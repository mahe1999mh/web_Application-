import "./App.scss";
import Into from "./pages/into/Into";
import Topbar from "./pages/Topbar/Topbar";
import Contact from "./pages/contact/Contact";
import Works from "./pages/works/Works";
import Portfolio from "./pages/portfolio/Portfolio";
import { useState } from "react";
import Menu from "./pages/menu/Menu";
import Slider from "./pages/sildes/Slider";
import { slidesData } from "./pages/sildes/slidesData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Slider slides={slidesData} />;
        <Into />
        <Works />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
