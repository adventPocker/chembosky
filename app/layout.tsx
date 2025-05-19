import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://chembosky.com"),
  title: {
    default: "Chembosky Motion Pictures | Visionary Filmmaking",
    template: "%s - Chembosky Motion Pictures",
  },
  description:
    "Chembosky Motion Pictures is a leading film production company dedicated to pushing the boundaries of storytelling. Known for blockbuster hits and Oscar nominations, we redefine Indian cinema with creativity, innovation, and excellence.",
  keywords: [
    "Chembosky Motion Pictures",
    "Indian cinema",
    "film production",
    "blockbuster hits",
    "Oscar nominations",
    "innovative storytelling",
    "Chemban Vinod Jose",
    "dramas",
    "action adventures",
  ],
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
