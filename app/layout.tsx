import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Krisna Joko Purjianto | Software Engineer",
  keywords: [
    "software engineer",
    "backend development",
    "PHP",
    "Laravel",
    "Golang",
    "REST API",
    "MySQL",
    "transaction systems",
    "JavaScript",
    "Vue.js",
    "React.js",
    "Next.js",
  ],
  description: "Software Engineer with 2+ years of experience building production web applications, REST APIs, and transaction systems with PHP, Laravel, and Golang, with experience across JavaScript, Vue.js, React, and Next.js.",
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
