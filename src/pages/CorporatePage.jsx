import Corporate from "../components/sections/Corporate";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import { Helmet } from "react-helmet-async";

export default function CorporatePage() {
  return (
    <div className="pt-24">
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
      <Corporate />
      <Testimonials />
      <CTA />
    </div>
  );
}
