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

         <div className="relative z-10 w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
               {title && (
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
               )}
               <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
               >
                  ✕
               </button>
            </div>

            <div className="text-gray-300">{children}</div>
         </div>
      </div>
   );
};

export default Dialog;
