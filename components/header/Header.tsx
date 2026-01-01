"use client";

import React from "react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useHeader } from "../hooks/useHeader";

const Header = () => {
   const { isMobile, open, setOpen } = useHeader();
   return (
      <div className={`relative h-16 z-40 ${isMobile ? "mx-0" : "mx-10"}`}>
         <div className="fixed z-40 top-0 left-0 inset-0 h-16 flex justify-between items-center rounded-full bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 py-4 px-6 mx-4 lg:mx-10 mt-4">
            <h1 className="font-bold text-xl text-gray-300">Henry Carnegie</h1>
            <div className="flex gap-4">
               {isMobile ? (
                  <AlignJustify
                     className="size-8 cursor-pointer"
                     onClick={() => setOpen(true)}
                  />
               ) : (
                     <Link
                        href="/contact"
                        className="text-sm text-gray-400 hover:text-transparent w-fit hover:bg-clip-text hover:bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 cursor-pointer  transition-colors ease-linear"
                     >
                        Contact
                     </Link>
               )}
            </div>
         </div>
         <div
            className={`fixed inset-0 bg-gray-500/50 z-40 transition-opacity duration-300 ${
               open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setOpen(false)}
         />

         <div
            className={`fixed z-50 bg-gradient-to-b from-gray-950 via-gray-900 to-black min-h-screen h-full top-0 right-0 border-l border-l-yellow-400 w-60 transform transition-transform duration-300 ease-in-out ${
               open ? "translate-x-0" : "translate-x-full"
            }`}
         >
            <div className="flex flex-col gap-4 p-5">
               <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-transparent w-fit hover:bg-clip-text hover:bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 cursor-pointer  transition-colors ease-linear"
               >
                  Contact
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
