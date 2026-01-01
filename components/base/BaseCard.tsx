import React from "react";

type BaseCardProps = {
   children: React.ReactNode;
   className?: string;
};

const BaseCard = ({ children, className }: BaseCardProps) => {
   return (
      <div
         className={`rounded-2xl border border-gray-800 bg-gray-900/50 transition-all ${className}`}
      >
         {children}
      </div>
   );
};

export default BaseCard;