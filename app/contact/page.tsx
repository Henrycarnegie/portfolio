"use client";

import TextInput from "@/components/input/TextInput";
import InputLabel from "@/components/label/InputLabel";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
   return (
      <main className="min-h-screen flex flex-col bg-gray-950 text-gray-300 py-4">
         <div className="flex justify-end lg:mx-10 mt-4">
            <Link href="/" className="p-4">
               <X />
            </Link>
         </div>
         <section
            id="contact"
            className="px-6 lg:px-40 pt-10 flex flex-col justify-center items-center"
         >
            <div className="pt-10 flex flex-col gap-4 w-full">
               <h1 className="!font-be_vietnam_pro text-center text-xl">
                  c&apos;mon <br />
                  <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-emerald-300 font-bold">
                     Contact Me
                  </span>
               </h1>
               <h2 className="text-5xl text-center font-medium text-gray-300/90 py-12">
                  Thanks for taking time to reach out. <br /> How can i help
                  you? :
               </h2>
               <div className="md:col-span-3 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-2xl p-4">
                  <div className="flex flex-col gap-3 ">
                     <form
                        action="mailto:henrycarnegie23@gmail.com"
                        method="POST"
                        className="grid grid-cols-2 gap-4"
                     >
                        <div className="flex flex-col">
                           <InputLabel labelFor="name">Your Name?</InputLabel>
                           <TextInput
                              id="name"
                              name="name"
                              placeholder="..."
                           />
                        </div>

                        <div className="flex flex-col">
                           <InputLabel labelFor="email">And email?</InputLabel>
                           <TextInput
                              id="email"
                              name="email"
                              placeholder="..."
                           />
                        </div>

                        <div className="col-span-2 flex flex-col">
                           <InputLabel labelFor="message">
                              Tell me what you need?
                           </InputLabel>
                           <TextInput
                              textArea
                              id="message"
                              name="message"
                              placeholder="..."
                           />
                        </div>

                        <button
                           type="submit"
                           className="col-span-2 bg-purple-700 hover:bg-gradient-to-tl from-indigo-700 via-purple-700 to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                        >
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Contact;
