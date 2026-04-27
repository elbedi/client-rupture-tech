import siteConfig from "@/config/siteConfig.js";

export default function Head({
  title = siteConfig.title,
  description = siteConfig.description,
  canonical = siteConfig.url,
  keywords = siteConfig.keywords,
  noindex = false,
  schema,
}) {
  const normalizedCanonical = canonical || siteConfig.url;
  const socialImage = siteConfig.mainImage.startsWith("http")
    ? siteConfig.mainImage
    : `${siteConfig.url}${siteConfig.mainImage}`;
  const robots = noindex ? "noindex,nofollow" : siteConfig.robots;
  const keywordsContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;
  const normalizedSchema = Array.isArray(schema) ? schema : [];

  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.author} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="keywords" content={keywordsContent} />
      <link rel="canonical" href={normalizedCanonical} />
      <meta name="robots" content={robots} />

      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:url" content={normalizedCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={siteConfig.mainImageAlt} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteConfig.lang} />

      <meta name="twitter:card" content={siteConfig.twitterCard} />
      <meta name="twitter:site" content={siteConfig.twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <link rel="icon" type="image/svg+xml" href={siteConfig.favicon} />
      {normalizedSchema.map((entry, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          key={`schema-${index}`}
          type="application/ld+json"
        />
      ))}
    </head>
  );
}
