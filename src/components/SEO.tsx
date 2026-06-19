import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SITE_NAME = "Urban Pest Dial Services";
const DEFAULT_DESCRIPTION =
  "Trusted pest control in Mahavir Enclave, New Delhi. Anti-termite, cockroach, bed bugs, rodent, ant, lizard & mosquito control. Safe, eco-friendly, government-approved treatments with warranty.";
const BASE_URL = "https://urbanpestdialservices.in";
const DEFAULT_OG_IMAGE = "https://urbanpestdialservices.in/og-image.jpg";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = BASE_URL + "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | #1 Pest Control in Mahavir Enclave, New Delhi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}