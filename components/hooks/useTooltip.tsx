import React from "react";

export const useTooltip = () => {
   const [hover, setHover] = React.useState(false);

   const onMouseEnter = () => setHover(true);
   const onMouseLeave = () => setHover(false);

   return { hover, onMouseEnter, onMouseLeave };
};
