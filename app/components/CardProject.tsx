"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import Dialog from "@/components/dialog/Dialog";
import Image from "next/image";
import React, { useState } from "react";

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
   const [openProject, setOpenProject] = useState<Project | null>(null);

   return (
      <>
         <div
            key={id}
            className="group relative z-0 overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
         >
            <Image
               width={400}
               height={400}
               src={srcImage ?? "/favicon.ico"}
               alt={altImage ?? "Tidak ada"}
               className="w-full h-52 rounded-t-2xl object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5 flex flex-col gap-3">
               <h2 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {projectName}
               </h2>
               <p className="text-gray-400 text-sm line-clamp-2">
                  {description}
               </p>
               <PrimaryButton
                  type="button"
                  onClick={() =>
                     setOpenProject({
                        id,
                        srcImage,
                        altImage,
                        projectName,
                        description,
                     })
                  }
                  className="bg-transparent hover:!bg-none !px-0"
               >
                  View Project →
               </PrimaryButton>
            </div>
         </div>

         {openProject && (
            <Dialog
               isOpen={true}
               onClose={() => setOpenProject(null)}
               title={openProject.projectName}
            >
               <div className="space-y-4">
                  <Image
                     src={openProject.srcImage ?? "/logo_celerates.svg"}
                     alt={openProject.altImage}
                     width={1000}
                     height={1000}
                     className="w-full rounded-lg object-cover"
                  />
                  <p className="text-gray-300 text-sm">
                     Description :<br />
                     {openProject.description}
                  </p>
               </div>
            </Dialog>
         )}
      </>
   );
};

export default CardProject;
