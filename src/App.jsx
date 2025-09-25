import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="flex h-16 sm:h-20 items-center justify-between bg-slate-950 px-4 sm:px-8 text-white">
        {/* Left side */}
        <div className="flex items-center gap-3 sm:gap-5">
          <img src="./netflix.png" className="w-16 sm:w-20 md:w-28" />

          {/* Desktop navigation */}
          <nav className="hidden sm:flex gap-4 md:gap-6">
            <a href="" className="text-lg sm:text-xl md:text-2xl hover:text-red-500">
              Phim
            </a>
            <a href="" className="text-lg sm:text-xl md:text-2xl hover:text-red-500">
              Truyền Hình
            </a>
          </nav>
        </div>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer text-lg sm:text-xl"
          />

          {/* Hamburger button only visible on mobile */}
          <button
            className="text-2xl sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 w-full bg-slate-950 flex flex-col p-4 gap-3 z-50">
          <a href="" className="text-white text-lg hover:text-red-500">Phim</a>
          <a href="" className="text-white text-lg hover:text-red-500">Truyền Hình</a>
        </nav>
      )}
    </div>
  );
}

export default App;
