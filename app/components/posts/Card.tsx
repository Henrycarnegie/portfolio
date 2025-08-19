import React from "react";
import CardButton from "./CardButton";

type CardProps = {
   cardId: number;
   cardTitle: string;
   cardDescription?: string;
};

const Card = ({ cardId, cardTitle, cardDescription }: CardProps) => {
   return (
      <div
         className="flex flex-col justify-between gap-4 bg-cyan-50/30 border border-white/55 rounded-lg px-6 py-3 shadow-lg transition-colors h-full min-w-64"
         id={`${cardId}`}
      >
         <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">{cardTitle}</h1>
            <p className="text-justify">{cardDescription}</p>
         </div>
         <CardButton cardId={cardId}>Lihat User</CardButton>
      </div>
   );
};

export default Card;
