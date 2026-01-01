"use client";

import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";
import Dialog from "@/components/dialog/Dialog";
import { useProjectDialog } from "../hooks/useCardDIalog";
import BaseCard from "../base/BaseCard";

type Project = {
   id?: number;
   srcImage?: string;
   altImage: string;
   projectName: string;
   description: string;
};

const CardProject = ({
   id,
   srcImage,
   altImage,
   projectName,
   description,
}: Project) => {
   const { openProject, open, close } = useProjectDialog();

   return (
      <>
         <BaseCard className="group overflow-hidden hover:border-pink-500/50 hover:shadow-pink-500/20">
            <Image
               src={srcImage ?? "/favicon.ico"}
               alt={altImage}
               width={400}
               height={400}
               className="h-52 w-full object-cover group-hover:scale-105 transition"
            />

            <div className="p-5 space-y-3">
               <h2 className="text-lg font-semibold text-white group-hover:text-pink-400">
                  {projectName}
               </h2>

               <p className="text-gray-400 text-sm line-clamp-2">
                  {description}
               </p>

               <PrimaryButton
                  className="bg-transparent hover:bg-none !px-0"
                  onClick={() =>
                     open({ id, srcImage, altImage, projectName, description })
                  }
               >
                  View Project →
               </PrimaryButton>
            </div>
         </BaseCard>

         {openProject && (
            <Dialog isOpen onClose={close} title={openProject.projectName}>
               <div className="max-h-[70vh] overflow-y-auto pr-2">
                  <Image
                     src={openProject.srcImage ?? "favicon.ico"}
                     alt={openProject.altImage}
                     width={1000}
                     height={10000}
                     className="w-full rounded-lg object-contain"
                  />
               </div>

                  <p className="text-gray-300 text-base mt-5">
                     {openProject.description}
                  </p>
            </Dialog>
         )}
      </>
   );
};

export default CardProject;
