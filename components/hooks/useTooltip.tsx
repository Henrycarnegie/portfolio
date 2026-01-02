import { useState } from "react";

export const useTooltip = () => {
   const [open, setOpen] = useState(false);

   const onMouseEnter = () => setOpen(true);
   const onMouseLeave = () => setOpen(false);

   const onClick = () => setOpen((prev) => !prev);

   return { open, onMouseEnter, onMouseLeave, onClick };
};
