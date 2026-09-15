import ShopPartners from "../components/sections/ShopPartners";
import CTA from "../components/sections/CTA";
import SectionTitle from "../components/ui/SectionTitle";
import { Helmet } from "react-helmet-async";

export default function ShopPage() {
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
        <link rel="canonical" href="https://cmg-club-sport.vercel.app/" />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://cmg-club-sport.vercel.app/"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://cmg-club-sport.vercel.app/en/"
        />
        {/* <link
          rel="alternate"
          hreflang="ar"
          href="https://cmg-club-sport.vercel.app/ar/"
        /> */}
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://cmg-club-sport.vercel.app/"
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          badge="Shop & Partenaires"
          title="Recommandé par"
          highlight="nos coachs"
          subtitle="Produits testés et approuvés · Livraison via nos partenaires"
        />
      </div>
      <ShopPartners />
      <CTA />
    </div>
  );
}
