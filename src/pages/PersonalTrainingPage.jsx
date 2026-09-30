import PersonalTraining from "../components/sections/PersonalTraining";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Seo from "../components/seo/Seo";

export default function PersonalTrainingPage() {
  return (
    <div className="pt-24">
      <Seo
        title="Coaching personnel | Club Med Gym Mourouj"
        description="Profitez d'un coaching personnel personnalisé à Club Med Gym à Mourouj pour perdre du poids, prendre du muscle et améliorer votre forme."
        canonical="/coaching-personnel"
      />
      <PersonalTraining />
      <Testimonials />
      <CTA />
    </div>
  );
}
