import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darwin Tangarife | Desarrollador Backend",
  description: "Portafolio profesional de Darwin Andrés Tangarife Avendaño — Desarrollador Backend con experiencia en Java, Spring Boot y Microservicios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
