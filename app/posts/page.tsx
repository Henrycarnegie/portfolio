import Link from "next/link";
import React from "react";
import CardList from "../components/posts/CardList";
import Card from "../components/posts/Card";
import { ArrowLeftCircle } from "lucide-react";

type Posts = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

const Posts = async () => {
    const resp = await fetch (`${process.env.base_url}`)
    const  data: Posts[] = await resp.json()

   return (
      <div className="h-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-indigo-600 via-fuchsia-800 to-indigo-900">
         <Link href="/" className="font-semibold flex items-center gap-1 text-cyan-100">
            <ArrowLeftCircle className="size-6" />
            Kembali
         </Link>
         <h1>Halaman Postingan</h1>
         <CardList>
            {data.map((index) => (
               <Card
                  key={index.id}
                  cardId={index.userId}
                  cardTitle={index.title}
                  cardDescription={index.body}
               />
            ))}
         </CardList>
      </div>
   );
};
export default Posts;
