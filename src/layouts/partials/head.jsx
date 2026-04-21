import siteConfig from "@/config/siteConfig.js";

export default function Head({
  title = siteConfig.title,
  description = siteConfig.description,
}) {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={siteConfig.url} />
      <meta name="robots" content={siteConfig.robots} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteConfig.mainImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteConfig.lang} />

      <meta name="twitter:card" content={siteConfig.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteConfig.mainImage} />

      <link rel="icon" type="image/svg+xml" href={siteConfig.favicon} />
    </head>
  );
}
