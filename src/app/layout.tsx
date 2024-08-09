import { Providers } from "@/utils/providers/chakraProvider";
import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// export const metadata: Metadata = {
//   title: "Ashutosh7i.dev | Aashutosh Soni",
//   description: "Portfolio of Aashutosh Soni",
//   keywords: "Aashutosh Soni, Ashutosh7i, Portfolio, Developer, Indore, India",
//   robots: "index, follow",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://ashutosh7i.dev",
//     siteName: "Ashutosh7i.dev",
//     title: "Ashutosh7i.dev | Aashutosh Soni",
//     description: "Portfolio of Aashutosh Soni",
//     images: [
//       {
//         url: "https://ashutosh7i.dev/og.png",
//         alt: "Ashutosh7i.dev | Aashutosh Soni",
//       },
//     ],
//   },
//   twitter: {
//     title: "Ashutosh7i.dev | Aashutosh Soni",
//     description: "Portfolio of Aashutosh Soni",
//     images: [
//       {
//         url: "https://ashutosh7i.dev/og.png",
//         alt: "Ashutosh7i.dev | Aashutosh Soni",
//       },
//     ],
//     creator: "@Ashutosh7i",
//     creatorId: "@Ashutosh7i",
//     site: "@Ashutosh7i",
//     card: "summary_large_image",
//   },
// };

export const metadata: Metadata = {
  title: "Ashutosh7i.dev",
  description: "Portfolio of Aashutosh Soni",
  keywords: "Aashutosh Soni, Ashutosh7i, Portfolio, Developer, Indore, India",
  metadataBase: new URL("https://Ashutosh7i.dev"),
  openGraph: {
    url: "https://Ashutosh7i.dev",
    siteName: "Ashutosh7i.dev",
    title: "Ashutosh7i.dev",
    description: "Portfolio of Aashutosh Soni",
    images: [
      {
        url: "https://Ashutosh7i.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh7i.dev",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh7i.dev",
    description: "Portfolio of Aashutosh Soni",
    creator: "@Ashutosh7i",
    site: "@Ashutosh7i",
    images: [
      {
        url: "https://Ashutosh7i.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh7i.dev",
      },
    ],
  },
  alternates: {
    canonical: "https://Ashutosh7i.dev",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Ashutosh7i.dev",
  appleWebApp: {
    title: "Ashutosh7i.dev",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "favicon.ico",
        sizes: "57x57",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-33TTH9S3WB" />
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://ashutosh7i.dev",
              },
              headline: "Ashutosh7i.dev | Aashutosh Soni",
              description:
                "Portfolio of Aashutosh Soni, a developer from Indore, India.",
              image: "https://ashutosh7i.dev/og.png",
              author: {
                "@type": "Person",
                name: "Aashutosh Soni",
                url: "https://www.linkedin.com/in/ashutosh7i",
              },
              publisher: {
                "@type": "Person",
                name: "Aashutosh Soni",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ashutosh7i.dev/favicon.ico",
                },
              },
              inLanguage: "en-US",
              isFamilyFriendly: "true",
            }),
          }}
        />
      </body>
    </html>
  );
}
