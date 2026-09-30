// Central configuration for the gym website
// All configurable values are defined here for easy maintenance

export const gymConfig = {
  name: "Club Med Gym",
  tagline: "L'excellence du sport tunisien",
  siteUrl: "https://club-med-gym.vercel.app",

  // Contact
  phone: "+216 53 85 31 55",
  whatsapp: "+216 53 85 31 55",
  email: "contact@club-med-gym.tn",
  address: "Tunis, Tunisie",

  // Social Media
  social: {
    facebook: "https://www.facebook.com/clubmedgym/?locale=fr_FR",
    instagram: "https://www.instagram.com/club_med_gym/?hl=fr",
    youtube: "https://youtube.com/clubmedgym",
    tiktok: "https://tiktok.com/@clubmedgym",
    linkedin: "https://linkedin.com/company/clubmedgym",
  },

  // Brand
  accentColor: "#FF5533",
  accentColorLight: "#FF5533",
  accentColorDark: "#CC4422",

  // Hero
  heroVideo: "/videos/gym-hero.mp4",
  heroPoster: "/images/gym-hero-poster.jpg",

  // Opening Hours
  hours: {
    weekday: "07:00 – 22:00",
    saturday: "07:00 – 18:00",
    sunday: "08:00 – 14:00",
  },

  // WhatsApp default messages
  whatsappMessages: {
    default: "Bonjour, je souhaite avoir plus d'informations sur Club Med Gym.",
    trial: "Bonjour, je souhaite réserver une séance d'essai à Club Med Gym.",
    pricing:
      "Bonjour, je souhaite avoir plus d'informations sur les abonnements.",
  },
};

export default gymConfig;
