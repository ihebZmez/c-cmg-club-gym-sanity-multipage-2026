import { Helmet } from "react-helmet-async";
import { gymConfig } from "../../config/gymConfig";

const Seo = ({
  title = "Club Med Gym El Mourouj 1 | Salle de Sport & Fitness",

  description = "Club Med Gym à El Mourouj 1, Ben Arous : salle de sport, fitness, musculation, cardio, cours collectifs et coaching personnalisé en Tunisie.",

  keywords = [
    "Club Med Gym El Mourouj",
    "Club Med Gym El Mourouj 1",
    "CMG Sports Club El Mourouj",
    "salle de sport El Mourouj",
    "salle de sport El Mourouj 1",
    "gym El Mourouj",
    "fitness El Mourouj",
    "musculation El Mourouj",
    "salle de sport Ben Arous",
    "fitness Ben Arous",
    "coaching sportif El Mourouj",
  ],

  canonical = "/",
  noIndex = false,
  image = "/og-image.jpg",
}) => {
  const canonicalUrl = `${gymConfig.siteUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${gymConfig.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Google does not use meta keywords for ranking.
          Kept only if your template needs it. */}
      <meta name="keywords" content={keywords.join(", ")} />

      <meta
        name="robots"
        content={
          noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large"
        }
      />

      <meta name="theme-color" content={gymConfig.accentColor} />

      <meta name="apple-mobile-web-app-title" content="Club Med Gym" />

      <link rel="canonical" href={canonicalUrl} />

      {/* French is the primary language */}
      <link rel="alternate" href={gymConfig.siteUrl} hreflang="fr" />

      <link rel="alternate" href={gymConfig.siteUrl} hreflang="x-default" />

      {/* Only keep this if /en/ actually exists */}
      <link rel="alternate" href={`${gymConfig.siteUrl}/en/`} hreflang="en" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Club Med Gym" />
      <meta property="og:locale" content="fr_TN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
