import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="flex h-16 items-center justify-between bg-black px-4 text-white sm:h-20 sm:px-8">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <img src="./netflix.png" className="w-20 sm:w-28" />
          <nav className="hidden gap-6 sm:flex">
            <a
              href=""
              className="text-base font-medium transition hover:text-red-600"
            >
              Phim
            </a>
            <a
              href=""
              className="text-base font-medium transition hover:text-red-600"
            >
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
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 z-50 flex w-full flex-col gap-3 bg-slate-950 p-4 sm:hidden">
          <a href="" className="text-lg text-white hover:text-red-500">
            Phim
          </a>
          <a href="" className="text-lg text-white hover:text-red-500">
            Truyền Hình
          </a>
        </nav>
      )}

      <div className="relative">
        <img
          src="https://image.tmdb.org/t/p/original/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg"
          className="aspect-video w-screen xl:h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
        <div className="absolute bottom-[15%] left-8 w-2/3 text-white sm:w-1/3">
          <h1 className="mb-4 text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Avengers: Endgame
          </h1>
          <div className="mb-3 flex items-center gap-3">
            <span className="border border-gray-400 px-2 py-1 text-sm text-gray-300">
              PG13
            </span>
            <span className="text-sm text-gray-300">2024-06-11</span>
          </div>

          <p className="mb-6 hidden max-w-lg text-sm leading-relaxed text-gray-200 sm:text-base md:block">
            Avengers: Endgame là phần phim kết thúc của loạt phim siêu anh hùng
            Marvel, nơi các thành viên của Avengers cùng nhau đối mặt với thử
            thách lớn nhất...
          </p>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-sm text-black transition hover:scale-105 hover:bg-gray-200 sm:text-xs md:text-base">
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <button className="rounded-md bg-red-600/50 px-6 py-2 text-sm text-white transition hover:scale-105 hover:bg-red-700 sm:text-xs md:text-base">
              View Detail
            </button>
          </div>
        </div>
        <div className="absolute right-8 bottom-[10%]">
          <ul className="flex gap-1">
            <li className="h-1 w-4 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-4 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-4 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-4 cursor-pointer bg-slate-600"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
