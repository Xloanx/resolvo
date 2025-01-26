import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";
import TicketProvider from "@/contexts/tickets/ticketProvider";
import TicketFetcher from "@/components/customs/ticketFetcher";


        
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
      <TicketProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <TicketFetcher /> {/* Fetch tickets from DB and update context*/}
          <NavMenu />
          {children}
        </body>
      </TicketProvider>
    </html>
  );
}
