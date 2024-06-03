import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    // this will made your day
    <html lang="en">
      <body >
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          {/* children means your pages */}
          <div> {children} </div>
        </div>
      </body>
    </html>
  );
}