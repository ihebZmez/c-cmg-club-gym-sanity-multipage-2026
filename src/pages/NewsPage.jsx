import News from "../components/sections/News";
import CTA from "../components/sections/CTA";
import SectionTitle from "../components/ui/SectionTitle";
import { Helmet } from "react-helmet-async";

export default function NewsPage() {
  return (
    <div className="pt-24 pb-20 bg-gym-bg">
      <Helmet>
        <title>
          CMG club sports | Salle de sport & fitness à Mourouj, Tunis
        </title>
        <meta
          name="description"
          content="Salle de sport premium à Mourouj, Tunis. Musculation, cardio, coaching personnel, cours collectifs. Réservez votre séance d'essai."
        />
        <link rel="canonical" href="https://cmgclubsports.tn/" />
        <link rel="alternate" hreflang="fr" href="https://cmgclubsports.tn/" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://cmgclubsports.tn/en/"
        />
        {/* <link
          rel="alternate"
          hreflang="ar"
          href="https://cmgclubsports.tn/ar/"
        /> */}
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://cmgclubsports.tn/"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          badge="Actualités"
          title="Ce qui se passe au"
          highlight="Club"
          subtitle="Nouvelles activités, événements et annonces de nos coachs"
        />
      </div>
      <News />
      <CTA />
    </div>
  );
}
