import { useEffect, useState } from "react";

type Project = {
   id?: number;
   srcImage?: string;
   altImage: string;
   projectName: string;
   techStack: string[];
   description: string;
};

export const useProjectDialog = () => {
   const [openProject, setOpenProject] = useState<Project | null>(null);

   const open = (project: Project) => setOpenProject(project);
   const close = () => setOpenProject(null);

   useEffect(() => {
      const handleScroll = () => {
         if (openProject) {
            document.body.style.overflow = "hidden";
         } else {
            document.body.style.overflow = "auto";
         }
      };
      handleScroll();

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [openProject]);

   return {
      openProject,
      open,
      close,
   };
};
