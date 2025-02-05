import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import "@radix-ui/themes/styles.css";

import NavMenu from "../nav-menu";

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
            <main className="flex h-screen flex-col items-center justify-center 
                      font-[family-name:var(--font-geist-sans)]
                      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                      from-sky-400 to-blue-800">
              {children}
            </main>
          </body>
      </html>
  )
}
