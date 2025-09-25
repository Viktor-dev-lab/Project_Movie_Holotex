import PaginationIndicator from "./PaginationIndicator";
import Movie from "./Movie";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Movie />
      <PaginationIndicator />
    </div>
  );
};

export default HeroBanner;
