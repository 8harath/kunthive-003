export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kunthive",
    description:
      "Digital solutions provider offering web applications, SEO optimization, social media management, business digitization, and AI-powered workflow automation. Based in Bangalore.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://kunthive.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://kunthive.com"}/Logo/android-chrome-512x512.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/Kunthive",
      "https://twitter.com/Kunthive",
      "https://instagram.com/Kunthive",
      "https://linkedin.com/company/Kunthive",
      "https://youtube.com/@Kunthive",
      "https://github.com/Kunthive",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Solutions",
    provider: {
      "@type": "Organization",
      name: "Kunthive",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Digitization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration & Workflow Automation",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kunthive",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://kunthive.com",
    description:
      "Digital solutions for modern businesses - Web applications, SEO, social media management, business digitization, and AI integration.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://kunthive.com"}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

