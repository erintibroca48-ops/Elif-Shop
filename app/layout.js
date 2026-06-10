import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HtmlLangSync from "@/components/HtmlLangSync";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elif Shop",
  description:
    "Tek ne do të gjeni Parfume, Ora, Stoli, Çanta dhe Syze me çmime të arsyeshme dhe cilësi të lartë.",
  keywords: [
    "Elif Shop",
    "Parfume",
    "Ora",
    "Stoli",
    "Çanta",
    "Syze",
    "Aksesorë",
    "Shqipëri",
  ],
  openGraph: {
    title: "Elif Shop",
    description:
      "Tek ne do të gjeni Parfume, Ora, Stoli, Çanta dhe Syze me çmime të arsyeshme dhe cilësi të lartë.",
    type: "website",
    locale: "sq_AL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <LanguageProvider>
          <HtmlLangSync />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
