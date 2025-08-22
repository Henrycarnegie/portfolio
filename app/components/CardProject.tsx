"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import Dialog from "@/components/dialog/Dialog";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Project = {
   id: number;
   srcImage: string;
   altImage: string;
   projectName: string;
   description: string;
};

const CardProject = () => {
   const [openProject, setOpenProject] = useState<Project | null>(null);
   const [projects, setProjects] = useState<Project[]>([]);

   useEffect(() => {
      getProject();
   }, []);

   const getProject = async () => {
      const response = await axios.get(
         `${process.env.NEXT_PUBLIC_BASE_URL}/admin`
      );
      setProjects(response.data);
   };

   return (
      <>
         {projects.map((project) => (
            <div
               key={project.id}
               className="group relative z-0 overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
               <Image
                  width={100}
                  height={100}
                  src={project.srcImage ?? "logo_celerates.svg"}
                  alt={project.altImage ?? "Tidak ada"}
                  className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
               />
               <div className="p-5 flex flex-col gap-3">
                  <h2 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                     {project.projectName}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-2">
                     {project.description}
                  </p>
                  <PrimaryButton type="button" onClick={() => setOpenProject(project)} className="bg-transparent hover:!bg-none !px-0">
                     View Project →
                  </PrimaryButton>
               </div>
            </div>
         ))}

         {openProject && (
            <Dialog
               isOpen={true}
               onClose={() => setOpenProject(null)}
               title={openProject.projectName}
            >
               <div className="space-y-4">
                  <Image
                     src={openProject.srcImage}
                     alt={openProject.altImage}
                     width={500}
                     height={300}
                     className="w-full rounded-lg object-cover"
                  />
                  <p className="text-gray-300 text-sm">
                    Desc :<br />
                     {openProject.description}
                  </p>
               </div>
            </Dialog>
         )}
      </>
   );
};

export default CardProject;
