import Link from "next/link";
import React from "react";

const Albums = () => {
   return (
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-indigo-600 via-fuchsia-800 to-indigo-900">
        <Link href="/" className="font-semibold">Kembali</Link>
         <h1>Halaman Album</h1>
      </div>
   );
};

export default Albums;
