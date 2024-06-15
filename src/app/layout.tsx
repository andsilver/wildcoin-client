import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import 'react-toastify/dist/ReactToastify.css';

import Web3ModalProvider from "@/contexts/Web3ModalProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastContainer } from 'react-toastify';

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiLD Coin",
  description: "WiLD Coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-[white]">
      <body className={font.className}>
        <Web3ModalProvider>
          <AuthProvider>{children}</AuthProvider>
        </Web3ModalProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
