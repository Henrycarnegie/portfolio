import { useState } from "react";

export const useTooltip = () => {
   const [hover, setHover] = useState(false);

   const onMouseEnter = () => setHover(true);
   const onMouseLeave = () => setHover(false);

   return { hover, onMouseEnter, onMouseLeave };
};
