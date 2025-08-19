"use client";

import React from "react";

type PrimaryButtonProps = {
   className?: string;
   cardId?: number;
   children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({
   className = "",
   children,
   cardId,
   ...props
}: PrimaryButtonProps) => {
   const handleClick = () => {
        alert(`Data Post ${cardId}`)
    }
   return (
      <button
         className={`bg-cyan-50/30 text-white border border-white/55 hover:bg-gray-800 font-semibold rounded-lg px-6 py-3 shadow-lg transition-colors ${className}`}
         onClick={handleClick}
         {...props}
      >
         {children}
      </button>
   );
};

export default PrimaryButton;
