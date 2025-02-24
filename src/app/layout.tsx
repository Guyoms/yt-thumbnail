// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ThumbSnatch - Capture your YouTube thumbnails</title>
        <meta
          name="description"
          content="Transform any YouTube link into a high-quality thumbnail with ThumbSnatch."
        />
        <meta
          name="keywords"
          content="YouTube thumbnail, capture YouTube thumbnail, download video thumbnail"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:title"
          content="ThumbSnatch - Instant YouTube Thumbnails"
        />
        <meta
          property="og:description"
          content="Get high-quality thumbnails from any YouTube link."
        />
        <meta property="og:image" content="/public/thumbnail-preview.png" />
        <meta property="og:url" content="https://get-youtube-thumbnail.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
