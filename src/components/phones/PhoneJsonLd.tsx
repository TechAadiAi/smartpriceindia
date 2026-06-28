import { Phone } from "@/types/phone";

interface JsonLdProps {
  phone: Phone;
  url: string;
}

export default function PhoneJsonLd({ phone, url }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: phone.name,
        image: phone.image,
        description: phone.shortDescription,
        brand: {
          "@type": "Brand",
          name: phone.brand,
        },
        offers: {
          "@type": "Offer",
          url: phone.affiliateLink,
          priceCurrency: "INR",
          price: phone.price,
          priceValidUntil: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          )
            .toISOString()
            .split("T")[0],
          availability: phone.isAvailable
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          seller: {
            "@type": "Organization",
            name: "Amazon India",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: phone.rating,
          reviewCount: phone.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: phone.rating,
            bestRating: 5,
          },
          author: {
            "@type": "Organization",
            name: "SmartPriceIndia",
          },
          reviewBody: phone.fullDescription,
          datePublished: phone.publishedAt,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://smartpriceindia.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Phones",
            item: "https://smartpriceindia.com/latest",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: phone.name,
            item: url,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${phone.name} Review, Price & Specs in India`,
        description: phone.shortDescription,
        publisher: {
          "@type": "Organization",
          name: "SmartPriceIndia",
          url: "https://smartpriceindia.com",
          logo: {
            "@type": "ImageObject",
            url: "https://smartpriceindia.com/logo.png",
          },
        },
        datePublished: phone.publishedAt,
        dateModified: phone.updatedAt,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
