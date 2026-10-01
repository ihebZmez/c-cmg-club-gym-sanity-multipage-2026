import { Helmet } from "react-helmet-async";
import { gymConfig } from "../../config/gymConfig";

const defaultTitle =
  "CMG Club Sports | Club Med Gym | Salle de sport, musculation & fitness à Mourouj et Ben Arous";
const defaultDescription =
  "CMG Club Sports, aussi connu sous le nom de Club Med Gym, est une salle de sport à Mourouj et Ben Arous spécialisée en musculation, fitness, cardio, coaching personnel et cours collectifs en Tunisie.";
const defaultKeywords =
  "CMG Club Sports, Club Med Gym, salle de sport Mourouj, salle de musculation Mourouj, salle de sport Ben Arous, salle de musculation Ben Arous, fitness Mourouj, fitness Ben Arous, club de sport Mourouj, salle de sport près de moi, salle de sport Tunis";

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  canonical = "/",
  image = `${gymConfig.siteUrl}/og-image.svg`,
  keywords = defaultKeywords,
  noIndex = false,
}) => {
  const canonicalUrl = `${gymConfig.siteUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content={
          noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large"
        }
      />
      <meta name="theme-color" content={gymConfig.accentColor} />
      <meta name="apple-mobile-web-app-title" content="CMG Club Sports" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={`${gymConfig.siteUrl}/`} hreflang="fr" />
      <link
        rel="alternate"
        href={`${gymConfig.siteUrl}/`}
        hreflang="x-default"
      />
      <link rel="alternate" href={`${gymConfig.siteUrl}/en/`} hreflang="en" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CMG Club Sports" />
      <meta property="og:locale" content="fr_TN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
