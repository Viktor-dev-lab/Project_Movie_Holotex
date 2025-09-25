import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
  return (
    <div>
      <img
        src="https://image.tmdb.org/t/p/original/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg"
        className="aspect-video w-screen object-cover xl:h-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      <div className="absolute bottom-[15%] left-8 w-2/3 text-white sm:w-1/3">
        <h1 className="mb-4 text-lg font-extrabold sm:text-xl md:text-2xl xl:text-5xl">
          Avengers: Endgame
        </h1>
        <div className="mb-3 flex items-center gap-3">
          <span className="border border-gray-400 px-2 py-1 text-sm text-gray-300">
            PG13
          </span>
          <span className="text-sm text-gray-300">2024-06-11</span>
        </div>

        <p className="mb-6 hidden max-w-lg text-sm leading-relaxed text-gray-200 sm:text-base md:block xl:text-2xl">
          Avengers: Endgame là phần phim kết thúc của loạt phim siêu anh hùng
          Marvel, nơi các thành viên của Avengers cùng nhau đối mặt với thử
          thách lớn nhất...
        </p>

        <div className="flex gap-2 sm:gap-3">
          <button className="flex items-center gap-1 rounded-md bg-white/80 px-3 py-1 text-xs text-black transition hover:scale-105 hover:bg-gray-200 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm md:px-6 md:py-2 md:text-base">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <button className="rounded-md bg-red-600/50 px-3 py-1 text-xs text-white transition hover:scale-105 hover:bg-red-700 sm:px-4 sm:py-1.5 sm:text-sm md:px-6 md:py-2 md:text-base">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
