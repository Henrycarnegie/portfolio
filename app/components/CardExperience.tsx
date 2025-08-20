"use client";

import Image from "next/image";
import React from "react";

type CardExperienceProps = {
   imgSrc: string;
   imgAlt: string;
   label: string;
   instansi: string;
   tglExperience: string;
};

const CardExperience = ({ imgSrc, imgAlt, label, instansi, tglExperience }: CardExperienceProps) => {
   return (
      <div className="flex items-center justify-between bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-lg p-2">
         <div className="flex items-center gap-2">
            <Image src={imgSrc} alt={imgAlt} width={40} height={40} className="overflow-clip object-contain rounded-lg h-fit"/>{" "}
            <div className="flex-1">
               <h1 className="text-gray-400 text-sm md:text-base">{label}</h1>
               <p className="text-gray-400/80 text-xs md:text-sm">
                  {instansi}
               </p>
            </div>
         </div>
         <span className="text-gray-400 text-xs min-w-fit">{tglExperience}</span>
      </div>
   );
};

export default CardExperience;
