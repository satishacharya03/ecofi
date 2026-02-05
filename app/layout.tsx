import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

const tailwindConfig = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#13ec5b",
          "background-light": "#f6f8f6",
          "background-dark": "#102216",
          "card-light": "#ffffff",
          "card-dark": "#1a3322",
          "text-main-light": "#0d1b12",
          "text-main-dark": "#e7f3eb",
          "text-muted-light": "#4c9a66",
          "text-muted-dark": "#88c29b"
        },
        fontFamily: {
          "display": ["Inter", "sans-serif"]
        },
        borderRadius: {
          "DEFAULT": "1rem",
          "lg": "2rem",
          "xl": "3rem",
          "full": "9999px"
        }
      }
    }
  };
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-display antialiased transition-colors duration-200">
        <Script id="tailwind-config" strategy="beforeInteractive">
          {tailwindConfig}
        </Script>
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
