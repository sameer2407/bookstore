import { Inter } from "next/font/google";
import "./globals.css";
import { dbConnect } from "../services/mongo";

export const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  // console.log(conn);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
