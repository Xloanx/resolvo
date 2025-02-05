import { Geist, Geist_Mono } from "next/font/google";

// import "./globals.css";

import NavMenu from "@/nav-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auth",
  description: "Resolvo by KGIS",
};

export default function RootLayout({ children }) {
  return (

      // <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <main className="flex h-screen flex-col items-center justify-center 
                                  font-[family-name:var(--font-geist-sans)]
                                  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                                  from-sky-400 to-blue-800">
            {children}
            </main>
          </body>

      // </html>

  );
}
