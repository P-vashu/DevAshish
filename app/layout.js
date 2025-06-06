import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Topbar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevAshish",
  description: "Leading exporter of quality products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-black text-[15px] leading-[1.8]">
        <Topbar />
        <Navbar />
        <main className="min-h-screen px-4 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
