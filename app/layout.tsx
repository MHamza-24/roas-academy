import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ROAS Academy — Apprends à faire des Meta Ads qui rapportent au Maroc",
  description: "Formation Meta Ads 5 semaines au Maroc. Méthode internationale. Lance ta première campagne rentable dès la semaine 3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body style={{ WebkitOverflowScrolling: 'touch', overflowX: 'hidden' }}>
        {children}

        {/* Umami Analytics — Self-hosted Railway */}
<Script
  defer
  src="https://umami-production-3fd5.up.railway.app/script.js"
  data-website-id="87dc5683-69ef-4ed3-bc2d-f7ab72b1e673"
  strategy="afterInteractive"
/>

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RN74JQEZYB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RN74JQEZYB');
          `}
        </Script>

      </body>
    </html>
  );
}