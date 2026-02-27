import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Research Navigator | From Zero to Research Excellence",
  description: "Transform your research journey through 15 interactive stages. NEP 2020 aligned experiential learning platform for students, faculty, and institutions. Master research skills from domain discovery to center of excellence.",
  keywords: ["research", "NEP 2020", "experiential learning", "research skills", "academic excellence", "student research", "faculty development"],
  authors: [{ name: "Dr. Syed Muzamil Basha", url: "https://github.com/muzabasha" }],
  creator: "REVA University",
  publisher: "REVA University",
  openGraph: {
    title: "Research Navigator | Transform Your Research Journey",
    description: "15-stage interactive research journey from zero to excellence. NEP 2020 aligned, experiential learning focused.",
    type: "website",
    locale: "en_US",
    siteName: "Research Navigator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Navigator",
    description: "Transform your research journey through experiential learning",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
