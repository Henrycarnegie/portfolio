import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>)  {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-300">
      <aside className="w-64 bg-gray-950 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
          Control Page
        </h1>
        <nav className="flex flex-col gap-3">
          <Link href="/admin" className="hover:text-white">Dashboard</Link>
          <Link href="/admin/experiences" className="hover:text-white">Experiences</Link>
          <Link href="/admin/projects" className="hover:text-white">Projects</Link>
          <Link href="/admin/contact" className="hover:text-white">Contacts</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}