"use client";

import React from "react";

type DialogProps = {
   isOpen: boolean;
   title?: string;
   children: React.ReactNode;
   onClose: () => void;
};

const Dialog = ({ isOpen, onClose, title, children }: DialogProps) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
         />

         <div className="relative z-10 w-full max-w-md lg:max-w-6xl max-h-svh lg:max-h-[80vh] bg-gray-900 border border-gray-700 rounded-2xl shadow-lg flex flex-col">
            <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 p-6 rounded-t-2xl">
               <div className="grid grid-cols-3 items-center">
                  <div></div>

                  <h2 className="text-lg font-semibold text-white text-center">
                     {title}
                  </h2>

                  <div className="flex justify-end">
                     <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                     >
                        ✕
                     </button>
                  </div>
               </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 no-scrollbar">{children}</div>
         </div>
      </div>
   );
};

export default Dialog;
