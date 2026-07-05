// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // HYPER-OPTIMIZED Primary SEO - Keyword-rich, location-specific
  title: {
    default: "Hoppico Pune | hoppico.in | #1 Educational Tours India | School Trips, College IV Tours & Corporate Retreats",
    template: "%s | Hoppico Pune hoppico.in"
  },
  description: "🏆 Hoppico (hoppico.in) - Pune's #1 Most Trusted Educational Tour Operator since 2022. Expert school trips, college IV tours, corporate retreats & family holidays across India. 5000+ happy students. Certified safe travel. Call +91-8805948784 | Book Now!",

  // HYPER-CONCENTRATED Keywords - Strategically ordered for maximum impact
  keywords: [
    // TIER 1: BRAND + LOCATION (Highest Priority)
    "Hoppico Pune",
    "hoppico.in",
    "Hoppico hoppico.in",
    "Hoppico official website",
    "Hoppico India Pune",
    "Hoppico Maharashtra",

    // TIER 2: PRIMARY SERVICES + PUNE (High Competition)
    "best educational tour operator Pune",
    "top travel company Pune",
    "most trusted travel agency Pune",
    "number 1 school trip organizer Pune",
    "best college IV tour operator Pune",
    "top corporate retreat planner Pune",
    "best travel company Pune 2024",
    "affordable educational tours Pune",
    "safe school trips Pune",
    "certified tour operator Pune",

    // TIER 3: PRIMARY SERVICES + INDIA
    "best educational tour operator India",
    "top travel company India",
    "most trusted travel agency India",
    "leading school trip organizer India",
    "best college IV tours India",
    "top corporate retreat planner India",
    "premier educational travel company India",

    // TIER 4: SERVICE-SPECIFIC LONG-TAIL (High Intent)
    "school educational tours Pune",
    "college industrial visit tours Pune",
    "corporate team building retreats Pune",
    "family holiday packages Pune",
    "adventure travel tours Pune",
    "guided educational trips Pune",
    "student group tours Pune",
    "customized school trips Pune",
    "educational tour packages Pune",
    "school excursion planner Pune",

    // TIER 5: COMPETITIVE DIFFERENTIATION
    "trusted educational tour operator",
    "experienced travel company Pune",
    "professional tour organizer India",
    "reliable school trip planner",
    "safe and secure tours Pune",
    "licensed tour operator Maharashtra",
    "government approved travel agency",
    "ISO certified tour company",

    // TIER 6: DESTINATION-SPECIFIC
    "Pune to Goa educational tours",
    "Pune to Rajasthan school trips",
    "Pune to Himachal adventure tours",
    "Pune to Kerala family tours",
    "Pune to North India tours",
    "Maharashtra heritage tours",
    "Western India tour packages",

    // TIER 7: INTENT-BASED (Ready to Book)
    "book school trip Pune",
    "plan educational tour India",
    "organize college IV tour",
    "educational tour booking online",
    "school trip quotation Pune",
    "instant tour package pricing",
    "book family holiday India",
    "reserve corporate retreat",

    // TIER 8: PROBLEM-SOLUTION
    "affordable school tours Pune",
    "budget friendly educational trips",
    "safe school excursions India",
    "hassle free tour packages",
    "all inclusive educational tours",
    "door to door travel service Pune",
    "customizable tour itineraries",
    "flexible payment tour packages",

    // TIER 9: SPECIALIZED TOURS
    "cultural heritage tours India",
    "wildlife safari tours students",
    "adventure learning expeditions",
    "photography tours India",
    "nature exploration tours",
    "historical monument tours",
    "science museum educational tours",
    "industrial visit arrangements",

    // TIER 10: SEASONAL & TRENDING
    "summer vacation tours 2024",
    "winter educational trips",
    "monsoon adventure packages",
    "Diwali holiday tours",
    "Christmas family vacations",
    "new year celebration tours",

    // TIER 11: LOCAL SEO VARIATIONS
    "travel company near Pimpri Chinchwad",
    "tour operator Deccan Gymkhana",
    "educational tours near me Pune",
    "best travel agency Shivajinagar",
    "tour company Kothrud Pune",

    // TIER 12: COMPARISON & REVIEW KEYWORDS
    "best travel companies Pune comparison",
    "top 10 tour operators India",
    "Hoppico reviews",
    "Hoppico testimonials",
    "trusted tour operator ratings",
    "5 star travel company Pune",

    // TIER 13: VOICE SEARCH OPTIMIZATION
    "which is the best educational tour company in Pune",
    "who organizes school trips in India",
    "how to book educational tour in Pune",
    "what is the cost of school trip",
    "where to book college IV tour",

    // TIER 14: LEGACY KEYWORDS (From original list)
    "educational tours pune",
    "school trips pune",
    "college iv tours pune",
    "corporate retreats pune",
    "family holidays pune",
    "adventure travel pune",
    "guided tours pune",
    "student tours pune",
    "travel agency pune",
    "educational tour operators pune",
    "school trip organizers Pune",
    "college IV tours Pune",
    "family holiday packages Pune",
    "corporate retreat planners Pune",
    "student travel company India",
    "educational travel India",
    "school excursion India",
    "college industrial visits India",
    "corporate team building India",
    "family vacation packages India",
    "family adventure tours India",
    "guided educational trips",
    "Indian heritage tours students",
    "school tour packages India",
    "college study tours",
    "adventure learning trips",
    "educational tourism India",
    "school outing organizer",
    "college excursion planner",
    "customized educational tours",
    "cultural tours India",
    "heritage tours India",
    "nature tours India",
    "wildlife tours India",
    "photography tours India",
    "adventure tours India"
  ],

  // Enhanced Author Information
  authors: [
    { name: "Hoppico India", url: "https://hoppico.in" },
    { name: "Hoppico Pune", url: "https://hoppico.in" }
  ],
  creator: "Hoppico - Premier Educational Tour Operator Pune India",
  publisher: "Hoppico India Private Limited",

  // Application Name for PWA
  applicationName: "Hoppico - Educational Tours India",

  // Enhanced Icons with Multiple Formats
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    shortcut: "/favicon.ico"
  },

  // CRITICAL: Canonical and Alternate URLs - NEW DOMAIN
  alternates: {
    canonical: "https://hoppico.in",
    languages: {
      'en-IN': 'https://hoppico.in',
      'en-US': 'https://hoppico.in/en-us',
      'hi-IN': 'https://hoppico.in/hi',
      'mr-IN': 'https://hoppico.in/mr'
    }
  },

  // HYPER-OPTIMIZED Open Graph with Multiple Images
  openGraph: {
    title: "Hoppico Pune | hoppico.in | #1 Educational Tour Operator India",
    description: "🏆 India's Most Trusted Educational Tour Company. 5000+ students served. Expert school trips, college IV tours, corporate retreats. Certified Safe Travel ✓ Best Prices ✓ 24/7 Support ✓ Based in Pune. Book Now +91-8805948784",
    url: "https://hoppico.in",
    siteName: "Hoppico - hoppico.in",
    images: [
      {
        url: "https://hoppico.in/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "Hoppico Pune - #1 Educational Tour Operator India | hoppico.in",
        type: "image/jpeg"
      },
      {
        url: "https://hoppico.in/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Hoppico Official Logo - Best Educational Tours Pune",
        type: "image/jpeg"
      },
      {
        url: "https://hoppico.in/og-image-students.jpg",
        width: 1200,
        height: 630,
        alt: "Students on Educational Tour with Hoppico",
        type: "image/jpeg"
      }
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
    phoneNumbers: ["+918805948784"],
    emails: ["info@hoppico.in", "thehoppico@gmail.com"]
  },

  // HYPER-OPTIMIZED Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@AtlasHoppers",
    creator: "@AtlasHoppers",
    title: "Hoppico Pune | #1 Educational Tours India 🏆",
    description: "Most Trusted Educational Tour Operator | School Trips | College IV Tours | Corporate Retreats | 5000+ Happy Students | Pune, India 🇮🇳 | Book: +91-8805948784",
    images: {
      url: "https://hoppico.in/twitter-card.jpg",
      alt: "Hoppico - Premier Educational Tour Company Pune India"
    }
  },

  // CRITICAL SEO Meta Tags
  other: {
    "google-site-verification": "ltavbw6JdKKvJVBIJ94Wr9ilaT97to5aZj-FVKOjRS8",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "yandex-verification": "YOUR_YANDEX_CODE",
    "facebook-domain-verification": "YOUR_FB_CODE",
    "p:domain_verify": "YOUR_PINTEREST_CODE"
  },

  // AGGRESSIVE Robots Configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Geographic and Category Targeting
  category: "Travel and Tourism",
  classification: "Educational Tours, Adventure Travel, Student Tours, Corporate Travel, Family Vacations, School Trips, College Tours",

  // Multi-Platform Verification
  verification: {
    google: "ltavbw6JdKKvJVBIJ94Wr9ilaT97to5aZj-FVKOjRS8",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE",
    other: {
      me: ["info@hoppico.in", "https://hoppico.in"]
    }
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Apple Web App Configuration
  appleWebApp: {
    capable: true,
    title: "Hoppico",
    statusBarStyle: "black-translucent"
  },

  // Format Detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" prefix="og: https://ogp.me/ns#">
      <head>
        {/* HYPER-ADVANCED Schema Markup - Multiple Schemas */}

        {/* 1. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://hoppico.in/#organization",
              "name": "Hoppico",
              "legalName": "Hoppico India Private Limited",
              "url": "https://hoppico.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hoppico.in/favicon.ico.png",
                "width": 600,
                "height": 600
              },
              "description": "India's premier educational tour operator specializing in school trips, college IV tours, corporate retreats, and family holidays since 2022.",
              "foundingDate": "2022",
              "foundingLocation": "Pune, Maharashtra, India",
              "slogan": "Explore. Learn. Experience.",
              "numberOfEmployees": "50-100",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "885, Bhandarkar Road, Deccan Gymkhana",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411004",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8805948784",
                  "contactType": "Customer Service",
                  "email": "info@hoppico.in",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8805948784",
                  "contactType": "Sales",
                  "email": "thehoppico@gmail.com",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577991212051",
                "https://www.instagram.com/atlas_hoppers/",
                "https://twitter.com/hoppico",
                "https://www.linkedin.com/company/atlas-hoppers-india",
                "https://www.youtube.com/@hoppico",
                "https://in.pinterest.com/hoppico/"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* 2. Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "@id": "https://hoppico.in/#travel-agency",
              "name": "Hoppico",
              "alternateName": "hoppico.in",
              "description": "Pune's #1 educational tour operator. Trusted by 5000+ students. Specialized in school trips, college IV tours, corporate retreats & family holidays across India.",
              "url": "https://hoppico.in",
              "logo": "https://hoppico.in/favicon.ico.png",
              "image": [
                "https://hoppico.in/office-exterior.jpg",
                "https://hoppico.in/team-photo.jpg",
                "https://hoppico.in/tour-bus.jpg"
              ],
              "telephone": "+918805948784",
              "email": "info@hoppico.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "885, Bhandarkar Road, Deccan Gymkhana",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411004",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5204",
                "longitude": "73.8567"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "₹₹",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
              "currenciesAccepted": "INR",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "State",
                  "name": "Maharashtra"
                },
                {
                  "@type": "City",
                  "name": "Pune"
                }
              ],
              "serviceType": [
                "Educational Tours",
                "School Trips",
                "College Industrial Visits",
                "Corporate Retreats",
                "Team Building Activities",
                "Family Holiday Packages",
                "Adventure Tours",
                "Cultural Heritage Tours",
                "Wildlife Tours",
                "International Tours",
                "Customized Tour Packages"
              ],
              "knowsAbout": [
                "Educational Tourism",
                "Student Travel",
                "Corporate Travel Management",
                "Adventure Travel Planning",
                "Cultural Tour Curation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tour Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "School Educational Tours",
                      "description": "Safe, supervised educational trips for school students",
                      "touristType": "Students"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "College IV Tours",
                      "description": "Industrial visit tours for college students",
                      "touristType": "College Students"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Corporate Retreats",
                      "description": "Team building and corporate offsite packages",
                      "touristType": "Corporate Groups"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Family Holidays",
                      "description": "Customized family vacation packages",
                      "touristType": "Families"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* 3. WebSite Schema with Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://hoppico.in/#website",
              "url": "https://hoppico.in",
              "name": "Hoppico",
              "description": "Official website of Hoppico - India's trusted educational tour operator",
              "publisher": {
                "@id": "https://hoppico.in/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://hoppico.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-IN"
            })
          }}
        />

        {/* 4. BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://hoppico.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Educational Tours",
                  "item": "https://hoppico.in/educational-tours"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "School Trips",
                  "item": "https://hoppico.in/school-trips"
                }
              ]
            })
          }}
        />

        {/* 5. Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Educational Tour Services",
              "provider": {
                "@id": "https://hoppico.in/#organization"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Tour Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "School Tours",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Primary School Tours"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Secondary School Tours"
                        }
                      }
                    ]
                  }
                ]
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "5000",
                "highPrice": "50000",
                "offerCount": "50"
              }
            })
          }}
        />

        {/* CRITICAL: Additional Advanced Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Hoppico - Educational Tours Pune India" />
        <meta name="DC.creator" content="Hoppico India" />
        <meta name="DC.subject" content="Educational Tours, School Trips, College Tours" />
        <meta name="DC.description" content="India's premier educational tour operator based in Pune" />
        <meta name="DC.publisher" content="Hoppico India" />
        <meta name="DC.contributor" content="Hoppico Team" />
        <meta name="DC.date" content="2022" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://hoppico.in" />
        <meta name="DC.language" content="en-IN" />
        <meta name="DC.coverage" content="India" />
        <meta name="DC.rights" content="Copyright 2022-2024 Hoppico India" />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Hoppico India" />
        <meta name="designer" content="Hoppico" />
        <meta name="owner" content="Hoppico India" />
        <meta name="url" content="https://hoppico.in" />
        <meta name="identifier-URL" content="https://hoppico.in" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Hoppico - Educational Tours" />
        <meta name="category" content="Travel, Education, Tours" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="audience" content="all" />
        <meta name="resourcetype" content="document" />
        <meta name="page-type" content="Travel Services" />
        <meta name="audience" content="Students, Parents, Teachers, Corporate" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
        <meta name="msapplication-navbutton-color" content="#0066cc" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0066cc" />

        {/* Preconnect to Critical Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

        {/* Alternate Links for Mobile */}
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://hoppico.in" />

        {/* RSS Feed (if you have one) */}
        <link rel="alternate" type="application/rss+xml" title="Hoppico Blog RSS" href="https://hoppico.in/rss.xml" />

        {/* CRITICAL: Hreflang Tags for Regional Targeting */}
        <link rel="alternate" hrefLang="en-IN" href="https://hoppico.in" />
        <link rel="alternate" hrefLang="hi-IN" href="https://hoppico.in/hi" />
        <link rel="alternate" hrefLang="mr-IN" href="https://hoppico.in/mr" />
        <link rel="alternate" hrefLang="x-default" href="https://hoppico.in" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage">

        {/* Hidden but SEO-valuable content */}
        <div className="sr-only" aria-hidden="true">
          <h1>Hoppico Pune - hoppico.in - Best Educational Tour Operator India</h1>
          <p>
            Hoppico (hoppico.in) is Pune&apos;s #1 most trusted educational tour operator,
            offering premium school trips, college IV tours, corporate retreats, and family holidays
            across India. Certified safe travel with 5000+ happy students since 2022.
            Contact: +91-8805948784 | Email: info@hoppico.in
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}