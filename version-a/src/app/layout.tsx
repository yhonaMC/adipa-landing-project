import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ADIPA | Cursos de Psicologia y Salud Mental",
  description:
    "Plataforma de educacion continua especializada en psicologia y salud mental. Explora nuestros cursos, diplomados y especializaciones.",
  keywords: [
    "psicologia",
    "salud mental",
    "cursos",
    "diplomados",
    "ADIPA",
    "educacion continua",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "ADIPA | Cursos de Psicologia y Salud Mental",
    description:
      "Plataforma de educacion continua especializada en psicologia y salud mental.",
    url: "https://adipa.cl",
    siteName: "ADIPA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
