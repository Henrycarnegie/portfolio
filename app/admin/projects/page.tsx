"use client";

import { useEffect, useState } from "react";
import TextInput from "@/components/input/TextInput";
import InputLabel from "@/components/label/InputLabel";
import PrimaryButton from "@/components/button/PrimaryButton";
import {
   createProject,
   deleteProject,
   fetchProjects,
   updateProject,
} from "@/app/services/projectService";

type Project = {
   id: number;
   projectName: string;
   category: string;
   description: string;
};

export default function AdminProjectPage() {
   const [loading, setLoading] = useState(false);
   const [projects, setProjects] = useState<Project[]>([]);
   const [form, setForm] = useState<Omit<Project, "id">>({
      projectName: "",
      category: "",
      description: "",
   });
   const [editId, setEditId] = useState<number | null>(null);

   const loadProjects = async () => {
      setLoading(true);
      try {
         const data = await fetchProjects();
         setProjects(data);
      } catch (err) {
         console.error(err);
      }
      setLoading(false);
   };

   useEffect(() => {
      loadProjects();
   }, []);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async () => {
      try {
         if (editId !== null) {
            await updateProject(editId, form);
            setEditId(null);
         } else {
            await createProject(form);
         }
         setForm({ projectName: "", description: "", category: "" });
         loadProjects();
      } catch (err) {
         console.error(err);
      }
   };

   const handleEdit = (proj: Project) => {
      setForm({ projectName: proj.projectName, description: proj.description, category: proj.category });
      setEditId(proj.id);
   };

   const handleDelete = async (id: number) => {
      try {
         await deleteProject(id);
         loadProjects();
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div className="flex flex-col gap-8">
         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
            Manage Projects
         </h1>

         {/* Form */}
         <div className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
            <div className="flex flex-col">
               <InputLabel labelFor="name">Project Name</InputLabel>
               <TextInput
                  id="name"
                  name="projectName"
                  placeholder="Masukkan nama project"
                  value={form.projectName}
                  onChange={handleChange}
               />
            </div>
            <div className="flex flex-col">
               <InputLabel labelFor="category">Category</InputLabel>
               <TextInput
                  id="category"
                  name="category"
                  placeholder="Masukkan nama project"
                  value={form.category}
                  onChange={handleChange}
               />
            </div>
            <div className="flex flex-col">
               <InputLabel labelFor="description">
                  Project Description
               </InputLabel>
               <TextInput
                  textArea
                  id="description"
                  name="description"
                  placeholder="Masukkan deskripsi project"
                  value={form.description}
                  onChange={handleChange}
               />
            </div>
            <PrimaryButton onClick={handleSubmit}>
               {editId !== null ? "Update" : "Add"} Project
            </PrimaryButton>
         </div>

         {/* List */}
         <div className="flex flex-col gap-4">
            {loading ? (
               <p>Loading...</p>
            ) : (
               projects.map((proj) => (
                  <div
                     key={proj.id}
                     className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
                  >
                     <div>
                        <h2 className="font-semibold">{proj.projectName}</h2>
                        <p className="text-gray-400">{proj.category}</p>
                        <p className="text-gray-400">{proj.description}</p>
                     </div>
                     <div className="flex gap-2">
                        <button
                           onClick={() => handleEdit(proj)}
                           className="bg-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-500"
                        >
                           Edit
                        </button>
                        <button
                           onClick={() => handleDelete(proj.id)}
                           className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-500"
                        >
                           Delete
                        </button>
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}
