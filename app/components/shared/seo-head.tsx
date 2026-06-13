import { Helmet } from "react-helmet-async";
import type { SEOData } from "~/types";
import { buildCanonical, buildOrganizationSchema, buildWebPageSchema } from "~/lib/seo";
import { siteConfig } from "~/content/site";

interface SEOHeadProps extends SEOData {
  noIndex?: boolean;
}

export function SEOHead({ title, description, path, image, type = "website", noIndex }: SEOHeadProps) {
  const canonical = buildCanonical(path);
  const ogImage = image ?? `${siteConfig.url}/og-default.jpg`;
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.shortName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.shortName} />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(buildOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(buildWebPageSchema({ title: fullTitle, description, path }))}
      </script>
    </Helmet>
  );
}
