"use client";

import React, { useState } from "react";

type TooltipProps = {
   image: React.ReactNode;
   label: string;
};

const Tooltip = ({ label, image }: TooltipProps) => {
   const [hover, setHover] = useState(false);

   return (
      <div className="relative group inline-block">
         <span
            className="cursor-pointer text-base text-emerald-400 hover:text-transparent w-fit hover:bg-clip-text hover:bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 transition-colors ease-linear mr-1 border-b border-b-purple-500"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {label}
         </span>

         <div
            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white rounded-lg shadow-lg transition-opacity duration-200 z-30 w-fit ${
               hover ? "opacity-100" : "opacity-0"
            }`}
         >
            <div className="flex justify-center items-center text-center w-10 h-10">
               {image}
            </div>
         </div>
      </div>
   );
};

export default Tooltip;
