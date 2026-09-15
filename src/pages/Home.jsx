// src/pages/Home.jsx
import Hero from "../components/sections/Hero";
import Promotions from "../components/sections/Promotions";
import About from "../components/sections/About";
import Activities from "../components/sections/Activities";
import Coaches from "../components/sections/Coaches";
import PersonalTraining from "../components/sections/PersonalTraining";
import SchedulePreview from "../components/sections/SchedulePreview";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import Transformations from "../components/sections/Transformations";
import CTA from "../components/sections/CTA";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
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
      <Hero /> {/* 1. Hook */}
      <Promotions /> {/* 2. Urgency / offer */}
      <About /> {/* 3. Trust: who we are */}
      <Activities /> {/* 4. What we offer */}
      <Coaches /> {/* 5. The team */}
      <PersonalTraining /> {/* 6. Premium upsell (right after Coaches) */}
      <SchedulePreview /> {/* 7. When — teaser */}
      <Pricing /> {/* 8. How much */}
      <Testimonials /> {/* 9. Proof: social */}
      <Transformations /> {/* 10. Proof: visual */}
      <CTA /> {/* 11. Close */}
    </>
  );
};

export default Home;
