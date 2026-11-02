import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  variable: "--font-montserrat",
});

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

const fontVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.title}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1440px design (1rem = 1/90 of the screen, at most 16px),
      // so zooming in or out on a desktop keeps the same layout instead of reflowing it.
      // scroll-pt: Next.js scrolls new pages into view past the sticky header; keep the banner clear of it.
      // Everything clickable gets the pointer.
      className={`${poppins.variable} ${montserrat.variable} text-[16px] lg:text-[length:min(16px,calc(100vw/90))] scroll-smooth scroll-pt-[4.5rem] antialiased md:scroll-pt-[8.375rem] lg:scroll-pt-[8.625rem] xl:scroll-pt-[9.5rem] [&_:where(a[href],button:not(:disabled),select,summary,label[for],[role=button])]:cursor-pointer motion-reduce:scroll-auto motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!duration-[0.01ms]`}
    >
      <body className="min-h-screen">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the
          screen, so nothing changes; on wider screens or when the browser is zoomed out the page stays
          in the middle with equal space on both sides instead of stretching.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-bg-main)]">
          <Header data={sectionData.Header?.variants?.InsuranceHeader1} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} />
        </div>
      </body>
    </html>
  );
}
