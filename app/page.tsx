import Header from "@/components/header/Header";
import Tooltip from "@/components/tooltip/Tooltip";
import CardExperience from "./components/CardExperience";
import techStack from "./lib/TechStack";
import InputLabel from "@/components/label/InputLabel";
import CardProject from "./components/CardProject";
import TextInput from "@/components/input/TextInput";

export default function Home() {
   const header = [
      { toSection: "#beranda", label: "Beranda" },
      { toSection: "#pengalaman", label: "Experience" },
      { toSection: "#projects", label: "Projects" },
      { toSection: "#contact", label: "Contact" },
   ];

   return (
      <main className="min-h-screen flex flex-col bg-gray-950 text-gray-300 py-4">
         <Header dataHeader={header} />
         <section
            id="beranda"
            className="px-4 md:px-40 pt-10 flex flex-col justify-center items-center"
         >
            <div className="border">Software Developer</div>
            <div className="pt-10 flex flex-col gap-4 max-w-fit">
               <h1 className="text-center text-4xl">
                  Hello! <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-yellow-300 font-bold">
                     I&apos;m, Henry Carnegie
                  </span>
               </h1>
               <div className="text-gray-400 text-base text-center max-w-[65rem] leading-8">
                  I’m Henry Carnegie, a Software Developer and UI/UX Designer.
                  Currently pursuing my studies at Institut Teknologi Sumatera
                  (ITERA), Faculty of Technology and Industry, I have experience
                  building dynamic, responsive websites using{" "}
                  {techStack.map((index) => (
                     <Tooltip
                        image={index.image}
                        label={index.label}
                        key={index.label}
                     />
                  ))}
                  Skilled in designing interactive interfaces, implementing CRUD
                  functionality, and solving problem for stakeholder also
                  creating great user experience for modern web applications.
               </div>
            </div>
         </section>

         <section
            id="pengalaman"
            className="px-6 lg:px-40 pt-10 flex flex-col justify-center items-center"
         >
            <div className="pt-10 flex flex-col gap-4 w-full">
               <h1 className="text-center text-xl">
                  Sneak Peak <br />
                  <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-yellow-300 font-bold">
                     My Experience
                  </span>
               </h1>
               <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                  <div className="md:col-span-3 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-2xl p-4">
                     <h2 className="text-gray-400 mb-4">Education :</h2>
                     <div className="flex flex-col gap-3">
                        <CardExperience
                           imgSrc="/logo_itera.svg"
                           imgAlt="Logo Itera"
                           label="S1 Teknik Informatika"
                           instansi="Institut Teknologi Sumatera"
                           tglExperience="Aug 2021 - Aug 2025"
                        />
                        <CardExperience
                           imgSrc="/logo_celerates.svg"
                           imgAlt="Logo Celerates School"
                           label="Web Development & UI/UX"
                           instansi="Celerates School"
                           tglExperience="Feb 2024 - Jul 2024"
                        />
                        {/* <CardExperience
                           imgSrc="/logo_new_school.svg"
                           imgAlt="Finding.."
                           label="Finding new education.."
                           instansi="Finding new school"
                           tglExperience="Not identified yet"
                        /> */}
                     </div>
                  </div>
                  <div className="md:col-span-4 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-2xl p-4 max-h-80 overflow-y-scroll custom-scrollbar">
                     <h2 className="text-gray-400 mb-4">Experience :</h2>
                     <div className="flex flex-col gap-3">
                        <CardExperience
                           imgSrc="/logo_hmif.jpeg"
                           imgAlt="Logo HMIF"
                           label="Staff Divisi Pengembangan Anggota HMIF ITERA"
                           instansi="Himpunan Mahasiswa Informatika ITERA"
                           tglExperience="Aug 2021 - Aug 2025"
                        />
                        <CardExperience
                           imgSrc="/logo_km.png"
                           imgAlt="Logo KM"
                           label="Staff Divisi Teknologi Infomasi KM ITERA"
                           instansi="Keluarga Mahasiswa ITERA"
                           tglExperience="Aug 2021 - Aug 2025"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section
            id="projects"
            className="px-6 lg:px-40 py-20 flex flex-col justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black"
         >
            <div className="text-start mb-12">
               <h1 className="text-xl text-gray-400">enjoy</h1>
               <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 font-bold">
                  My Projects
               </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <CardProject />
            </div>
         </section>

         <section
            id="contact"
            className="px-6 lg:px-40 pt-10 flex flex-col justify-center items-center"
         >
            <div className="pt-10 flex flex-col gap-4 w-full">
               <h1 className="text-center text-xl">
                  c&apos;mon <br />
                  <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-yellow-300 font-bold">
                     Contact Me
                  </span>
               </h1>
               <div className="md:col-span-3 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-2xl p-4">
                  <h2 className="text-gray-400 mb-4">Email :</h2>
                  <div className="flex flex-col gap-3">
                     <form
                        action="mailto:henrycarnegie23@gmail.com"
                        method="POST"
                        className="flex flex-col gap-4"
                     >
                        <div className="flex flex-col">
                           <InputLabel labelFor="name">Your Name?</InputLabel>
                           <TextInput
                              id="name"
                              name="name"
                              placeholder="Write it in here..."
                           />
                        </div>

                        <div className="flex flex-col">
                           <InputLabel labelFor="email">And email?</InputLabel>
                           <TextInput
                              id="email"
                              name="email"
                              placeholder="Drop your email..."
                           />
                        </div>

                        <div className="flex flex-col">
                           <InputLabel labelFor="subject">
                              What&apos;s the topic?
                           </InputLabel>
                           <TextInput
                              id="subject"
                              name="subject"
                              placeholder="Spill the topic..."
                           />
                        </div>

                        <div className="flex flex-col">
                           <InputLabel labelFor="message">
                              Write your intention?
                           </InputLabel>
                           <TextInput
                              textArea
                              id="message"
                              name="message"
                              placeholder="Tell me all your intention or everything..."
                           />
                        </div>

                        <button
                           type="submit"
                           className="bg-purple-700 hover:bg-gradient-to-tl from-indigo-700 via-purple-700 to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
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
}
