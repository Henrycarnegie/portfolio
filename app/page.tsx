import Header from "@/components/header/Header";
import Tooltip from "@/components/tooltip/Tooltip";
import CardExperience from "./components/CardExperience";
import techStack from "./lib/TechStack";

export default function Home({}) {
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
            className="px-4 md:px-40 pt-10 flex flex-col justify-center items-center"
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
                        <CardExperience
                           imgSrc="/logo_new_school.svg"
                           imgAlt="Finding.."
                           label="Finding new education.."
                           instansi="Finding new school"
                           tglExperience="Not identified yet"
                        />
                     </div>
                  </div>
                  <div className="md:col-span-4 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border border-gray-600/80 rounded-2xl p-4 max-h-80 overflow-y-scroll">
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
            id="pengalaman"
            className="px-4 md:px-40 pt-10 flex flex-col justify-center items-center"
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
                           <label htmlFor="name" className="text-gray-400 mb-1">
                              Name
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                              className="bg-gray-900 text-gray-200 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                           />
                        </div>

                        <div className="flex flex-col">
                           <label
                              htmlFor="email"
                              className="text-gray-400 mb-1"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="you@example.com"
                              required
                              className="bg-gray-900 text-gray-200 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                           />
                        </div>

                        <div className="flex flex-col">
                           <label
                              htmlFor="subject"
                              className="text-gray-400 mb-1"
                           >
                              Subject
                           </label>
                           <input
                              type="text"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              className="bg-gray-900 text-gray-200 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                           />
                        </div>

                        <div className="flex flex-col">
                           <label
                              htmlFor="message"
                              className="text-gray-400 mb-1"
                           >
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              placeholder="Your message..."
                              rows={5}
                              required
                              className="bg-gray-900 text-gray-200 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                           />
                        </div>

                        <button
                           type="submit"
                           className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
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
