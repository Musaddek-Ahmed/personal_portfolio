import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import Header from "@/components/header";
import PageTransition from "@/components/page_transition";
import StairTransition from "@/components/ui/stair_transition";

const jetbrainsMono = JetBrains_Mono({
   subsets: ["latin"],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
   variable: '--font-jetbrainsMono'
  });

export const metadata = {
  title: "Musaddek Ahmed",
  description: "Portfolio of Musaddek Ahmed, a web developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
