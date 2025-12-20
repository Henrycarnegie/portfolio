import type { Metadata } from "next";
import { Asap, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const be_vietnam_pro = Be_Vietnam_Pro({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700"],
   display: "swap",
});

const asap = Asap({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Portfolio",
   description: "NextJs Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${asap.className} ${be_vietnam_pro.className} antialiased scroll-smooth`}>
            {children}
         </body>
      </html>
   );
}
