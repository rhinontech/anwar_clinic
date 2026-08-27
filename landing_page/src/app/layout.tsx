import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Hair Transplant Clinic In India | QHT Clinic",
  description: "Discover India’s leading hair-transplant clinic. Advanced QHT technique & 15,000 + results. Book now.",
  keywords: "hair transplant India, QHT clinic, best hair transplant Delhi, hair restoration, FUE hair transplant, celebrity hair transplant India",
  openGraph: {
    title: "Best Hair Transplant Clinic In India | QHT Clinic",
    description: "Discover India’s leading hair-transplant clinic. Advanced QHT technique & 15,000 + results. Book now.",
    url: "https://www.qhtclinic.com",
    siteName: "QHT Clinic",
    images: [
      {
        url: "https://www.qhtclinic.com/wp-content/uploads/2026/03/delhi-6.jpg",
        width: 900,
        height: 560,
        alt: "QHT Clinic Hair Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/cropped-Fav-Icon-192x192.png",
    apple: "https://www.qhtclinic.com/wp-content/uploads/2025/11/cropped-Fav-Icon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-white selection:bg-[#1b392b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
