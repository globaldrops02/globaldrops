import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "GlobalDrops", description: "Marketplace global de dropshipping para revendedores." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt" data-scroll-behavior="smooth"><body>{children}</body></html>; }
