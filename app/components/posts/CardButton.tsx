"use client";

import React, { useState } from "react";

type CardButtonProps = {
   className?: string;
   cardId?: number;
   children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CardButton = ({
   className = "",
   children,
   cardId,
   ...props
}: CardButtonProps) => {
   const [open, setOpen] = useState(false);

   const handleClick = () => setOpen((prev) => !prev);
   return (
      <>
         <button
            className={`bg-cyan-50/30 text-white border border-white/55 hover:bg-gray-800 font-semibold rounded-lg px-6 py-3 shadow-lg transition-colors ${className}`}
            onClick={handleClick}
            {...props}
         >
            {children}
         </button>
         {open && (
            <div className="bg-black/50 absolute inset-0 w-full h-screen flex items-center justify-center">
               <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <p>Data Post {cardId}</p>
                  <button
                     onClick={handleClick}
                     className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                     Tutup
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default CardButton;
