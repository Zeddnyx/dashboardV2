import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex gap-2 w-full">
            <Sidebar />
            <main className="flex flex-col w-full gap-3">
              <Navbar />
              <div className="overflow-y-auto h-full px-5">{children}</div>
            </main>
          </div>
      </body>
    </html>
  );
}
