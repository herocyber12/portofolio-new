import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krisn Joko Purjianto",
  keywords: "software engineer, senior software engineer, backend engineer, fullstack, php developer, golang developer, node js developer, php, golang, node js, go, go lang, next js, react js",
  description: "Sofware Engineer with 3+ years of experienced",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="relative w-full h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
