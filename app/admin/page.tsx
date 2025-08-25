import CardExperience from "@/app/components/CardExperience";
import CardProject from "@/app/components/CardProject";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
        Welcome, Henry
      </h1>

      {/* Section Summary Experiences */}
      <section>
        <h2 className="text-xl text-gray-400 mb-4">Experiences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <CardExperience
            imgSrc="/logo_itera.svg"
            imgAlt="Logo Itera"
            label="S1 Teknik Informatika"
            instansi="Institut Teknologi Sumatera"
            tglExperience="Aug 2021 - Aug 2025"
          />
          <CardExperience
            imgSrc="/logo_hmif.jpeg"
            imgAlt="Logo HMIF"
            label="Staff Divisi Pengembangan Anggota HMIF ITERA"
            instansi="Himpunan Mahasiswa Informatika ITERA"
            tglExperience="Aug 2021 - Aug 2025"
          />
        </div>
      </section>

      {/* Section Summary Projects */}
      <section>
        <h2 className="text-xl text-gray-400 mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardProject />
          <CardProject />
        </div>
      </section>

      {/* Section Contact Messages */}
      <section>
        <h2 className="text-xl text-gray-400 mb-4">Contact Messages</h2>
        <div className="bg-gray-800 rounded-xl p-4 max-h-80 overflow-y-scroll custom-scrollbar">
          <p>Example message from guest user 1...</p>
          <p>Example message from guest user 2...</p>
        </div>
      </section>
    </div>
  );
}
