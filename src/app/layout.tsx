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
    default: "Atlas Hoppers Pune | atlashoppers.in | #1 Educational Tours India | School Trips, College IV Tours & Corporate Retreats",
    template: "%s | Atlas Hoppers Pune atlashoppers.in"
  },
  description: "🏆 Atlas Hoppers (atlashoppers.in) - Pune's #1 Most Trusted Educational Tour Operator since 2022. Expert school trips, college IV tours, corporate retreats & family holidays across India. 5000+ happy students. Certified safe travel. Call +91-8805948784 | Book Now!",
  
  // HYPER-CONCENTRATED Keywords - Strategically ordered for maximum impact
  keywords: [
    // TIER 1: BRAND + LOCATION (Highest Priority)
    "Atlas Hoppers Pune",
    "atlashoppers.in",
    "Atlas Hoppers atlashoppers.in",
    "Atlas Hoppers official website",
    "Atlas Hoppers India Pune",
    "Atlas Hoppers Maharashtra",
    
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
    "Atlas Hoppers reviews",
    "Atlas Hoppers testimonials",
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
    { name: "Atlas Hoppers India", url: "https://atlashoppers.in" },
    { name: "Atlas Hoppers Pune", url: "https://atlashoppers.in" }
  ],
  creator: "Atlas Hoppers - Premier Educational Tour Operator Pune India",
  publisher: "Atlas Hoppers India Private Limited",
  
  // Application Name for PWA
  applicationName: "Atlas Hoppers - Educational Tours India",
  
  // Enhanced Icons with Multiple Formats
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo2022.png", type: "image/png" },
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
    canonical: "https://atlashoppers.in",
    languages: {
      'en-IN': 'https://atlashoppers.in',
      'en-US': 'https://atlashoppers.in/en-us',
      'hi-IN': 'https://atlashoppers.in/hi',
      'mr-IN': 'https://atlashoppers.in/mr'
    }
  },
  
  // HYPER-OPTIMIZED Open Graph with Multiple Images
  openGraph: {
    title: "Atlas Hoppers Pune | atlashoppers.in | #1 Educational Tour Operator India",
    description: "🏆 India's Most Trusted Educational Tour Company. 5000+ students served. Expert school trips, college IV tours, corporate retreats. Certified Safe Travel ✓ Best Prices ✓ 24/7 Support ✓ Based in Pune. Book Now +91-8805948784",
    url: "https://atlashoppers.in",
    siteName: "Atlas Hoppers - atlashoppers.in",
    images: [
      {
        url: "https://atlashoppers.in/og-image-main.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Hoppers Pune - #1 Educational Tour Operator India | atlashoppers.in",
        type: "image/jpeg"
      },
      {
        url: "https://atlashoppers.in/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Atlas Hoppers Official Logo - Best Educational Tours Pune",
        type: "image/jpeg"
      },
      {
        url: "https://atlashoppers.in/og-image-students.jpg",
        width: 1200,
        height: 630,
        alt: "Students on Educational Tour with Atlas Hoppers",
        type: "image/jpeg"
      }
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
    phoneNumbers: ["+918805948784"],
    emails: ["info@atlashoppers.in", "atlashoppers26@gmail.com"]
  },
  
  // HYPER-OPTIMIZED Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@AtlasHoppers",
    creator: "@AtlasHoppers",
    title: "Atlas Hoppers Pune | #1 Educational Tours India 🏆",
    description: "Most Trusted Educational Tour Operator | School Trips | College IV Tours | Corporate Retreats | 5000+ Happy Students | Pune, India 🇮🇳 | Book: +91-8805948784",
    images: {
      url: "https://atlashoppers.in/twitter-card.jpg",
      alt: "Atlas Hoppers - Premier Educational Tour Company Pune India"
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
      me: ["info@atlashoppers.in", "https://atlashoppers.in"]
    }
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Apple Web App Configuration
  appleWebApp: {
    capable: true,
    title: "Atlas Hoppers",
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
              "@id": "https://atlashoppers.in/#organization",
              "name": "Atlas Hoppers",
              "legalName": "Atlas Hoppers India Private Limited",
              "url": "https://atlashoppers.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://atlashoppers.in/logo2022.png",
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
                  "email": "info@atlashoppers.in",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8805948784",
                  "contactType": "Sales",
                  "email": "atlashoppers26@gmail.com",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577991212051",
                "https://www.instagram.com/atlas_hoppers/",
                "https://twitter.com/atlashoppers",
                "https://www.linkedin.com/company/atlas-hoppers-india",
                "https://www.youtube.com/@atlashoppers",
                "https://in.pinterest.com/atlashoppers/"
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
              "@id": "https://atlashoppers.in/#travel-agency",
              "name": "Atlas Hoppers",
              "alternateName": "atlashoppers.in",
              "description": "Pune's #1 educational tour operator. Trusted by 5000+ students. Specialized in school trips, college IV tours, corporate retreats & family holidays across India.",
              "url": "https://atlashoppers.in",
              "logo": "https://atlashoppers.in/logo2022.png",
              "image": [
                "https://atlashoppers.in/office-exterior.jpg",
                "https://atlashoppers.in/team-photo.jpg",
                "https://atlashoppers.in/tour-bus.jpg"
              ],
              "telephone": "+918805948784",
              "email": "info@atlashoppers.in",
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
              "@id": "https://atlashoppers.in/#website",
              "url": "https://atlashoppers.in",
              "name": "Atlas Hoppers",
              "description": "Official website of Atlas Hoppers - India's trusted educational tour operator",
              "publisher": {
                "@id": "https://atlashoppers.in/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://atlashoppers.in/search?q={search_term_string}"
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
                  "item": "https://atlashoppers.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Educational Tours",
                  "item": "https://atlashoppers.in/educational-tours"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "School Trips",
                  "item": "https://atlashoppers.in/school-trips"
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
                "@id": "https://atlashoppers.in/#organization"
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
        <meta name="DC.title" content="Atlas Hoppers - Educational Tours Pune India" />
        <meta name="DC.creator" content="Atlas Hoppers India" />
        <meta name="DC.subject" content="Educational Tours, School Trips, College Tours" />
        <meta name="DC.description" content="India's premier educational tour operator based in Pune" />
        <meta name="DC.publisher" content="Atlas Hoppers India" />
        <meta name="DC.contributor" content="Atlas Hoppers Team" />
        <meta name="DC.date" content="2022" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://atlashoppers.in" />
        <meta name="DC.language" content="en-IN" />
        <meta name="DC.coverage" content="India" />
        <meta name="DC.rights" content="Copyright 2022-2024 Atlas Hoppers India" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Atlas Hoppers India" />
        <meta name="designer" content="Atlas Hoppers" />
        <meta name="owner" content="Atlas Hoppers India" />
        <meta name="url" content="https://atlashoppers.in" />
        <meta name="identifier-URL" content="https://atlashoppers.in" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Atlas Hoppers - Educational Tours" />
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
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://atlashoppers.in" />
        
        {/* RSS Feed (if you have one) */}
        <link rel="alternate" type="application/rss+xml" title="Atlas Hoppers Blog RSS" href="https://atlashoppers.in/rss.xml" />
        
        {/* CRITICAL: Hreflang Tags for Regional Targeting */}
        <link rel="alternate" hrefLang="en-IN" href="https://atlashoppers.in" />
        <link rel="alternate" hrefLang="hi-IN" href="https://atlashoppers.in/hi" />
        <link rel="alternate" hrefLang="mr-IN" href="https://atlashoppers.in/mr" />
        <link rel="alternate" hrefLang="x-default" href="https://atlashoppers.in" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope 
        itemType="https://schema.org/WebPage">

          {/* Hidden but SEO-valuable content */}
            <div className="sr-only" aria-hidden="true">
              <h1>Atlas Hoppers Pune - atlashoppers.in - Best Educational Tour Operator India</h1>
              <p>
                Atlas Hoppers (atlashoppers.in) is Pune&apos;s #1 most trusted educational tour operator,
                offering premium school trips, college IV tours, corporate retreats, and family holidays
                across India. Certified safe travel with 5000+ happy students since 2022.
                Contact: +91-8805948784 | Email: info@atlashoppers.in
              </p>
            </div>
         {children}
      </body>
    </html>
  );
}