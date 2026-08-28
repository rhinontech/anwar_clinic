import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "QHT Hair Care & Clinical Medicines | Official Store",
  description:
    "Explore clinical hair care formulations, post-transplant care serums, natural growth oils, and dermatologist-recommended hair restoration products by QHT Clinic.",
  icons: {
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/cropped-Fav-Icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f8faf8] text-[#1b221d] min-h-screen flex flex-col">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
