"use client";

import React from "react";

type PrimaryButtonProps = {
   className?: string;
   type?: string;
   children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({
   className = "",
   type,
   children,
   ...props
}: PrimaryButtonProps) => {
   return (
      <button
         type={type}
         className={`bg-purple-700 hover:bg-gradient-to-tl from-indigo-700 via-purple-700 to-pink-700 text-pink-400 hover:text-yellow-400 text-sm gap-2 inline-flex items-center font-semibold rounded-lg px-6 py-3 shadow-lg transition-colors cursor-pointer ${className}`}
         {...props}
      >
         {children}
      </button>
   );
};

export default PrimaryButton;
