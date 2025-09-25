import { useState } from "react";
import "./index.css";
import  Header from './components/Header'
import  HeroBanner from './components/HeroBanner'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <HeroBanner />
    </div>
  );
}

export default App;
