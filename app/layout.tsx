import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import site from "@/data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: site.site.name,
    template: `%s | ${site.site.name}`,
  },
  description: site.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${montserrat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        {/* Scroll-reveal content starts hidden; keep it readable when scripts are off */}
        <noscript>
          <style>{".reveal{opacity:1}"}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
