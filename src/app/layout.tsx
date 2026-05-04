import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";


const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "BookApp",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={OutfitFont.className}>
      <body>
        <Navbar />
        <Marquee />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
       
      </body>
    </html>
  );
}