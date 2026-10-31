import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Krisna Joko Purjianto | Backend Developer & Team Lead",
  keywords: "software engineer, senior software engineer, backend engineer, fullstack, php developer, golang developer, node js developer, php, golang, node js, go, go lang, next js, react js",
  description: "Backend Developer and Team Lead building production web applications, APIs, and transaction-driven systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="relative h-dvh w-full overflow-hidden">
        {children}
      </body>
    </html>
  );
}
