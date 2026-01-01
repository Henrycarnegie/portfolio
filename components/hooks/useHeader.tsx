import { useEffect, useState } from 'react'

export const useHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  
     const [open, setOpen] = useState(false);
  
     useEffect(() => {
        const cekMobile = () => setIsMobile(window.innerWidth <= 768);
        cekMobile();

        window.addEventListener("resize", cekMobile);
        
        return () => window.removeEventListener("resize", cekMobile);
     }, []);
    return {
        isMobile, open, setOpen
    }
}