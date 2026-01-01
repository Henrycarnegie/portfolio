"use client";

import Image from "next/image";
import BaseCard from "../base/BaseCard";

type CardExperienceProps = {
   imgSrc: string;
   imgAlt: string;
   label: string;
   instansi: string;
   tglExperience: string;
};

const CardExperience = ({
   imgSrc,
   imgAlt,
   label,
   instansi,
   tglExperience,
}: CardExperienceProps) => {
   return (
      <BaseCard className="flex items-center justify-between p-2 border-gray-600/80 bg-gradient-to-t from-slate-950/10 to-slate-950/100">
         <div className="flex items-center gap-2">
            <Image
               src={imgSrc}
               alt={imgAlt}
               width={40}
               height={40}
               className="rounded-lg object-contain"
            />
            <div>
               <h1 className="text-gray-400 text-sm md:text-base">{label}</h1>
               <p className="text-gray-400/80 text-xs md:text-sm">{instansi}</p>
            </div>
         </div>

         <span className="text-gray-400 text-xs">{tglExperience}</span>
      </BaseCard>
   );
};

export default CardExperience;
