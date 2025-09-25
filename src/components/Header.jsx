import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex h-16 items-center justify-between bg-black px-4 text-white sm:h-20 sm:px-8">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <img src="./netflix.png" className="w-20 sm:w-28" />
        <nav className="hidden gap-6 sm:flex xl:text-2xl lg:text-xl">
          <a href="#" className="font-medium transition hover:text-red-600">
            Phim
          </a>
          <a href="#" className="font-medium transition hover:text-red-600">
            Truyền Hình
          </a>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer text-xl transition hover:text-red-600"
        />
        <button
          className="text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 z-50 flex w-full flex-col gap-3 bg-slate-950 p-4 sm:hidden">
          <a href="#" className="text-lg text-white hover:text-red-500">
            Phim
          </a>
          <a href="#" className="text-lg text-white hover:text-red-500">
            Truyền Hình
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
