import Link from "next/link";
import React from "react";

type HeaderProps = {
   dataHeader: HeaderItem[];
};

type HeaderItem = {
   toSection: string;
   label: string;
};

const Header = ({ dataHeader }: HeaderProps) => {
   return (
      <div className="relative h-16 mx-10">
         <div className="fixed top-0 left-0 inset-0 h-16 flex justify-between items-center rounded-full bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 py-4 px-6 mx-10 mt-4">
            <h1 className="font-bold text-xl text-gray-300">Portfolio</h1>
            <div className="flex gap-4">
               {dataHeader.map((index) => (
                  <Link
                     href={index.toSection}
                     key={index.label}
                     className="text-sm text-gray-400 hover:text-transparent w-fit hover:bg-clip-text hover:bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 cursor-pointer  transition-colors ease-linear"
                  >
                     {index.label}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Header;
