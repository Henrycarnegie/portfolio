"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import TextInput from "@/components/input/TextInput";
import InputLabel from "@/components/label/InputLabel";
import { useState } from "react";

type Experience = {
   id: number;
   label: string;
   instansi: string;
   tglExperience: string;
};

export default function AdminExperiencePage() {
   const [experiences, setExperiences] = useState<Experience[]>([]);
   const [form, setForm] = useState<Omit<Experience, "id">>({
      label: "",
      instansi: "",
      tglExperience: "",
   });
   const [editId, setEditId] = useState<number | null>(null);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = () => {
      if (!form.label || !form.instansi || !form.tglExperience) return;

      if (editId !== null) {
         setExperiences((prev) =>
            prev.map((exp) =>
               exp.id === editId ? { id: editId, ...form } : exp
            )
         );
         setEditId(null);
      } else {
         setExperiences((prev) => [...prev, { id: Date.now(), ...form }]);
      }
      setForm({ label: "", instansi: "", tglExperience: "" });
   };

   const handleEdit = (exp: Experience) => {
      setForm({
         label: exp.label,
         instansi: exp.instansi,
         tglExperience: exp.tglExperience,
      });
      setEditId(exp.id);
   };

   const handleDelete = (id: number) => {
      setExperiences((prev) => prev.filter((exp) => exp.id !== id));
   };

   return (
      <div className="flex flex-col gap-8">
         <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
            Manage Experiences
         </h1>

         {/* Form */}
         <div className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
            <div className="flex flex-col">
               <InputLabel labelFor="label">Role / Position</InputLabel>
               <TextInput
                  id="label"
                  type="text"
                  name="label"
                  placeholder="Masukkan role atau posisi"
                  value={form.label}
                  onChange={handleChange}
                  className="p-2 rounded-md bg-gray-700 text-white"
               />
            </div>
            <div className="flex flex-col">
               <InputLabel labelFor="instansi">
                  Instansi / Company / School
               </InputLabel>
               <TextInput
                  id="instansi"
                  type="text"
                  name="instansi"
                  placeholder="Masukkan nama instansi"
                  value={form.instansi}
                  onChange={handleChange}
                  className="p-2 rounded-md bg-gray-700 text-white"
               />
            </div>
            <div className="flex flex-col">
               <InputLabel labelFor="tglExperience">
                  Tanggal / Duration
               </InputLabel>
               <TextInput
                  id="tglExperience"
                  type="text"
                  name="tglExperience"
                  placeholder="Masukkan tanggal atau durasi"
                  value={form.tglExperience}
                  onChange={handleChange}
                  className="p-2 rounded-md bg-gray-700 text-white"
               />
            </div>

            <PrimaryButton
               type="button"
               onClick={handleSubmit}
               className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
            >
               {editId !== null ? "Update" : "Add"} Experience
            </PrimaryButton>
         </div>

         {/* List */}
         <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
               <div
                  key={exp.id}
                  className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
               >
                  <div>
                     <h2 className="font-semibold">{exp.label}</h2>
                     <p className="text-gray-400">{exp.instansi}</p>
                     <p className="text-gray-500 text-sm">
                        {exp.tglExperience}
                     </p>
                  </div>
                  <div className="flex gap-2">
                     <button
                        onClick={() => handleEdit(exp)}
                        className="bg-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-500"
                     >
                        Edit
                     </button>
                     <button
                        onClick={() => handleDelete(exp.id)}
                        className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-500"
                     >
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
