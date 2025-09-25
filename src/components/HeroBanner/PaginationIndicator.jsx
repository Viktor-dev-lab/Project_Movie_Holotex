import React from "react";

const PaginationIndicator = () => {
  return (
    <div className="absolute right-8 bottom-[10%] xl:bottom-[12%] 2xl:bottom-[15%]">
      <ul className="flex gap-2 sm:gap-3">
        <li className="h-1 w-3 cursor-pointer rounded-md bg-slate-600 sm:h-2 sm:w-8 md:h-2 md:w-10 lg:h-2.5 lg:w-12 xl:h-3 xl:w-14 2xl:h-3 2xl:w-16"></li>
        <li className="h-1 w-3 cursor-pointer rounded-md bg-slate-600 sm:h-2 sm:w-8 md:h-2 md:w-10 lg:h-2.5 lg:w-12 xl:h-3 xl:w-14 2xl:h-3 2xl:w-16"></li>
        <li className="h-1 w-3 cursor-pointer rounded-md bg-slate-600 sm:h-2 sm:w-8 md:h-2 md:w-10 lg:h-2.5 lg:w-12 xl:h-3 xl:w-14 2xl:h-3 2xl:w-16"></li>
        <li className="h-1 w-3 cursor-pointer rounded-md bg-slate-600 sm:h-2 sm:w-8 md:h-2 md:w-10 lg:h-2.5 lg:w-12 xl:h-3 xl:w-14 2xl:h-3 2xl:w-16"></li>
      </ul>
    </div>
  );
};

export default PaginationIndicator;
