import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Aamir Mallick · Frontend Engineer & Design Systems Partner",
  description:
    "Portfolio of Aamir Mallick, senior frontend engineer crafting resilient, design-led digital experiences with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans bg-night text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
