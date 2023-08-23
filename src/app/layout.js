import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar></Navbar>
        <div className="mx-auto md:px-20">
          <div className="grid grid-cols-12">
            <div className="mainContent shadow-md col-span-12">
              {children}
              <Footer></Footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
