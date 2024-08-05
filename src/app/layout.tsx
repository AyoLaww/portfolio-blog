import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DockComponent } from "@/components/DockComponent";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

  const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400','700','900'],
    variable: '--font-montserrat',
   });

   const robotomono = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400','700'],
    variable: '--font-robotomono'
   });

export const metadata: Metadata = {
  title: "Law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable, montserrat.variable, robotomono.variable
        )}>
          <div className="hidden lg:flex">
          <DockComponent/>
          </div>
          {children}
          </body>
    </html>
  );
}
