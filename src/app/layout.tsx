import type { Metadata } from "next";
import "./globals.scss";
import { monserrat } from "./ui/fonts";
import NextUIProvider from "@/app/ui/components/styles/NextUIProvider";
export const metadata: Metadata = {
  title: "Dev Interview Questions",
  description: "Generated by create next app",
  // openGraph: {
  //   title: "Next.js",
  //   description: "Your prep web for the next interview",
  //   siteName: "Dev Interview Questions",
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png",
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png",
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}