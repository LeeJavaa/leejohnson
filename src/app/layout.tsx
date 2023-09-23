import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Noto_Serif } from "next/font/google";
import { LoadingProvider } from "@/context/LoadingContext";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-raleway",
});

const noto_serif = Noto_Serif({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: " lee johnson 🐉",
  description:
    "The portfolio of Lee Johnson, a Cape Town based Electrical and Software Engineer working at the intersection of difficult problems. Available for hire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${noto_serif.variable} font-noto bg-black text-white`}
      >
        <div className="grain"></div>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
