import Header from "@/components/header/Header";
import Tooltip from "@/components/tooltip/Tooltip";
import techStack from "./lib/TechStack";
import Image from "next/image";
import CardExperience from "@/components/card/CardExperience";
import CardProject from "@/components/card/CardProject";

export default function Home() {
   return (
      <main className="min-h-screen flex flex-col bg-gray-950 text-gray-300 py-4">
         <Header />
         <section
            id="beranda"
            className="px-4 md:px-56 pt-24 flex flex-col justify-center items-center"
         >
            <div className="flex flex-col gap-24 text-center">
               <div className="flex flex-col justify-center items-center">
                  <span className="font-be_vietnam_pro text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-emerald-300 font-bold">
                     Designer & Frontend Developer
                  </span>
                  <span className="font-be_vietnam_pro text-lg text-gray-500 font-bold">
                     I design and code to solve the problem, and I love what I
                     do.
                  </span>
               </div>
            </div>

            <div className="flex max-w-fit pt-28">
               <Image
                  className="mx-auto"
                  src="/hero-devices.svg"
                  alt="Logo"
                  width={1000}
                  height={150}
               />
            </div>
         </section>
         <section
            id="intro"
            className="mx-6 md:mx-14 xl:mx-80 py-10 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border-t-8 border-purple-500 rounded-2xl flex flex-col justify-center items-center"
         >
            <div className="flex justify-between">
               <div className="md:w-[60%] flex flex-col gap-4">
                  <h1 className="text-center text-sm font-be_vietnam_pro">
                     something <br />
                     <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-yellow-300 font-bold">
                        About Me
                     </span>
                  </h1>
                  <span className="text-gray-100 text-base text-justify max-w-[65rem] leading-8">
                     Hello! My name is Henry Carnegie, and I enjoy creating
                     beautifull things that goes around internet. My interest in
                     web development started back when i join college and try
                     creating my portfolio website — Fast-forward to today,
                     I&apos;ve been graduated with Bachelor of Computer Science
                     Degree. My main focus these days is building digital
                     experience for client and Pursue master degree for my
                     academic.
                     <br />
                     <br />I have experience building dynamic, responsive
                     websites using{" "}
                     {techStack.map((index) => (
                        <Tooltip
                           image={index.image}
                           label={index.label}
                           key={index.label}
                        />
                     ))}
                     Skilled in designing interactive interfaces, implementing
                     CRUD functionality, and solving problem for stakeholder
                     also creating great user experience for modern web
                     applications.
                  </span>
               </div>
               <div className="w-2/6 hidden md:flex justify-center items-center z-0">
                  <div className="relative w-[300px] h-[300px] group ">
                     <div
                        className="before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-purple-500/90 group-hover:before:translate-x-0.5 group-hover:before:translate-y-0.5 before:transition-transform before:duration-300 before:ease-out before:z-[1]"
                     >
                        <Image
                           src="/profile-picture.png"
                           alt="Profile"
                           fill
                           className="bg-emerald-400 rounded-lg object-cover relative z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 "
                        />
                        <div className="absolute inset-0 rounded-lg border-2 border-purple-500 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section
            id="pengalaman"
            className="px-6 md:px-14 xl:px-80 py-40 flex flex-col justify-center items-center"
         >
            <div className="pt-10 flex flex-col gap-4 w-full ">
               <h1 className="font-be_vietnam_pro text-center text-sm">
                  Sneak Peak <br />
                  <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-emerald-300 font-bold">
                     My Experience
                  </span>
               </h1>
               <div className="grid gap-6">
                  <div className="md:col-span-4 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border-l-8 border-purple-500 rounded-2xl p-4">
                     <h2 className="text-gray-400 mb-4">Education :</h2>
                     <div className="flex flex-col gap-3">
                        <CardExperience
                           imgSrc="/logo_itera.svg"
                           imgAlt="Logo Itera"
                           label="S1 Teknik Informatika"
                           instansi="Institut Teknologi Sumatera"
                           tglExperience="Aug 2021 - Aug 2025"
                        />
                     </div>
                  </div>
                  <div className="md:col-span-4 bg-gradient-to-t from-slate-950/10 to-slate-950/100 border-l-8 border-purple-500 rounded-2xl p-4">
                     <h2 className="text-gray-400 mb-4">Experience :</h2>
                     <div className="flex flex-col gap-3">
                        <CardExperience
                           imgSrc="/favicon.ico"
                           imgAlt=""
                           label="Frontend Developer"
                           instansi="PT. Jann Azzam Mandiri"
                           tglExperience="Feb 2024 - Jul 2024"
                        />
                        <CardExperience
                           imgSrc="/logo_celerates.svg"
                           imgAlt="Logo Celerates School"
                           label="UI Design & Frontend Developer"
                           instansi="Celerates School"
                           tglExperience="Feb 2024 - Jul 2024"
                        />
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
            className="px-6 md:px-14 xl:px-80 py-40 flex flex-col justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black"
         >
            <div className="text-start mb-12">
               <h1 className="font-be_vietnam_pro text-sm text-gray-400">
                  enjoy
               </h1>
               <span className="font-be_vietnam_pro text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-emerald-300 font-bold">
                  My Recent Work
               </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <CardProject
                  id={1}
                  srcImage="/project/harmony.png"
                  altImage="Thesis"
                  projectName="Harmony FTI ITERA - Administration Management System"
                  techStack={[
                     "React.js",
                     "Laravel",
                     "Tailwind CSS",
                     "Google API",
                  ]}
                  description="A project developed for Thesis. Harmony FTI ITERA is a web-based application designed to facilitate the management and organization of thesis-related activities within the Faculty of Information Technology at Institut Teknologi Sumatera (ITERA)."
               />
               <CardProject
                  id={1}
                  srcImage="/project/portfolio.png"
                  altImage="Portfolio"
                  projectName="Portfolio Website"
                  techStack={["Next.js", "Tailwind CSS"]}
                  description="A personal portfolio website to showcase my skills, projects, and experiences as a designer and frontend developer. The website is built using Next.js for optimized performance, along with Tailwind CSS for styling and responsive design."
               />
               <CardProject
                  id={1}
                  srcImage="/project/treasurehunt.png"
                  altImage="Treasure Hunt"
                  projectName="Treasure Hunt"
                  techStack={["Laravel", "MySQL", "Tailwind CSS"]}
                  description="A project developed for challenge event. Treasure Hunt is an engaging web application designed to provide users with an interactive and adventurous experience as they embark on a virtual treasure hunt journey. The platform offers a series of clues, puzzles, and challenges that users must solve to progress through various levels and ultimately discover hidden treasures. Treasure Hunt combines elements of gamification, problem-solving, and exploration to create an immersive and entertaining experience for users of all ages."
               />
               <CardProject
                  id={1}
                  srcImage="/project/texas-college.png"
                  altImage="Texas College"
                  projectName="LMS Texas College"
                  techStack={["Laravel", "MySQL", "Tailwind CSS"]}
                  description="A project developed for Client. Texas College is a learning management system designed to provide an interactive and engaging educational experience. It offers a variety of features to facilitate online learning, including course management, student enrollment, and progress tracking."
               />
               <CardProject
                  id={1}
                  srcImage="/project/pip-kemenhub.png"
                  altImage="PIP-Kemenhub"
                  projectName="Penilaian Informasi Publik - KEMENHUB"
                  techStack={["Laravel", "MySQL", "Tailwind CSS"]}
                  description="A project developed for Client. Penilaian Informasi Publik (PIP) is an online platform designed to facilitate the assessment and evaluation of public information services provided by government agencies. The system aims to enhance transparency, accountability, and citizen engagement by allowing users to rate and provide feedback on the quality and accessibility of public information."
               />
            </div>
         </section>
      </main>
   );
}
