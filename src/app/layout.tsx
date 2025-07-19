// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Primary SEO
  title: {
    default: "Atlas Hoppers India - Educational Tours & Adventure Travel | School College Corporate Trips",
    template: "%s | Atlas Hoppers India"
  },
  description: "Atlas Hoppers India: Leading educational tour operator for school trips, college IV tours, family holidays & corporate retreats across India. Expert-guided, safe, memorable experiences since inception.",
  
  // Enhanced Keywords for India-specific ranking
  keywords: [
    "Atlas Hoppers India",
    "educational tours India",
    "school trips India operator",
    "college IV tours India",
    "student travel company India",
    "educational travel India",
    "school excursion India",
    "corporate retreats India",
    "family adventure tours India",
    "guided educational trips",
    "Indian heritage tours students",
    "school tour packages India",
    "college study tours",
    "adventure learning trips",
    "educational tourism India",
    "school outing organizer",
    "Atlas Hoppers travel company"
  ],
  
  // Author and publisher info
  authors: [{ name: "Atlas Hoppers India" }],
  creator: "Atlas Hoppers India",
  publisher: "Atlas Hoppers India",
  
  // Enhanced icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo2022.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  },
  
  // Canonical and alternate URLs
  alternates: {
    canonical: "https://atlashoppers.netlify.app",
    languages: {
      'en-IN': 'https://atlashoppers.netlify.app',
      'hi-IN': 'https://atlashoppers.netlify.app/hi'
    }
  },
  
  // Enhanced Open Graph
  openGraph: {
    title: "Atlas Hoppers India - Educational Tours & Adventure Travel Company",
    description: "India's trusted educational tour operator specializing in school trips, college IV tours, family holidays & corporate retreats. Safe, guided, memorable experiences across incredible India.",
    url: "https://atlashoppers.netlify.app",
    siteName: "Atlas Hoppers India",
    images: [
      {
        url: "/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Hoppers India - Educational Tours & Adventure Travel",
        type: "image/jpeg"
      },
      {
        url: "/og-image-square.jpg",
        width: 400,
        height: 400,
        alt: "Atlas Hoppers India Logo",
        type: "image/jpeg"
      }
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India"
  },
  
  // Enhanced Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    site: "@AtlasHoppersIN", // Add your Twitter handle
    creator: "@AtlasHoppersIN",
    title: "Atlas Hoppers India - Educational & Adventure Tours",
    description: "India's premier educational tour operator. School trips, college tours, family holidays & corporate retreats across incredible India. Safe, guided, unforgettable experiences.",
    images: {
      url: "/og-image-main.jpg",
      alt: "Atlas Hoppers India - Educational Tours"
    }
  },
  
  // Additional meta tags for better SEO
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE", // Add your verification code
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE", // Add Bing verification
  },
  
  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Geographic targeting
  category: "travel",
  classification: "Educational Travel Services",
  
  // Verification and schema prep
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN"> {/* Specific to Indian English */}
      <head>
        {/* Additional schema markup for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Atlas Hoppers India",
              "description": "Educational tour operator specializing in school trips, college IV tours, family holidays and corporate retreats across India",
              "url": "https://atlashoppers.netlify.app",
              "logo": "https://atlashoppers.netlify.app/logo2022.png",
              "sameAs": [
                "https://facebook.com/atlashoppersindia", // Add your social media URLs
                "https://instagram.com/atlashoppersindia",
                "https://twitter.com/atlashoppersin",
                "https://linkedin.com/company/atlas-hoppers-india"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India",
                "addressRegion": "YOUR_STATE", // Add your state
                "addressLocality": "YOUR_CITY" // Add your city
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": [
                "Educational Tours",
                "School Trips",
                "College IV Tours",
                "Corporate Retreats",
                "Family Holidays",
                "Adventure Tours"
              ],
              "priceRange": "$$",
              "telephone": "YOUR_PHONE_NUMBER", // Add your contact number
              "email": "YOUR_EMAIL", // Add your email
              "foundingDate": "YOUR_FOUNDING_YEAR", // Add founding year
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational & Adventure Tours",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "School Educational Tours"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "College IV Tours"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional meta tags for Indian market */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="DC.title" content="Atlas Hoppers India - Educational Tours" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Atlas Hoppers India" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}