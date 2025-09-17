import type { Metadata } from "next";
import "./globals.css";
import 'animate.css';
import { JSX } from "react";
import Footer from "@/components/shared/Footer";
import NavbarWrapper from "@/components/shared/NavbarWrapper";
import MobileNavbarWrapper from "@/components/shared/MobileNavbarWrapper";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: "Terraloom",
  description: "For home not house",
};

interface LayoutProp {
  children: React.ReactNode
}

const RootLayout = ({ children }: LayoutProp): JSX.Element => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ToastContainer position="top-right" />
        <NavbarWrapper />
        <MobileNavbarWrapper />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
