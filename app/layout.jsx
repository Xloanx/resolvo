import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
//import Navbar from './navbar'


        
import {NavMenu} from "./nav-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    absolute: "Resolvo",
    default: "Resolvo",
    template: "Resolvo :: %s"
  },
  description: "Resolvo by KGIS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
