import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/ui/SectionTitle";
import ActivityCard from "../components/ui/ActivityCard";
import { useActivities } from "../hooks/useActivities";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const ActivitiesPage = () => {
  const sectionRef = useRef(null);
  const { data: activities = [], loading } = useActivities();

  useEffect(() => {
    if (!loading && activities?.length) {
      gsap.fromTo(
        ".activity-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".activities-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, [loading, activities]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen pt-8 pb-20 px-4 md:px-8 bg-gym-bg"
    >
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
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Toutes nos disciplines"
          title="Votre"
          highlight="Programme"
          subtitle="Des activités variées pour tous les niveaux et tous les objectifs"
        />

        {loading ? (
          <LoadingSkeleton count={6} />
        ) : activities?.length ? (
          <div className="activities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity._id} activity={activity} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white/30 py-16">
            Aucune activité disponible
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivitiesPage;
