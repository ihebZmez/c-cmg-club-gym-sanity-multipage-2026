// Central configuration for the gym website
// All configurable values are defined here for easy maintenance

export const gymConfig = {
  name: "CMG Club Sports",
  tagline: "L'excellence du sport tunisien",

  // Contact
  phone: "+216 71 88 96 58",
  whatsapp: "+216 71 88 96 58",
  email: "contact@cmg-clubsport.tn",
  address: "Tunis, Tunisie",

  // Social Media
  social: {
    facebook: "https://facebook.com/cmgclubsport",
    instagram: "https://instagram.com/cmgclubsport",
    youtube: "https://youtube.com/cmgclubsport",
    tiktok: "https://tiktok.com/@cmgclubsport",
    linkedin: "https://linkedin.com/company/cmgclubsport",
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
    default:
      "Bonjour, je souhaite avoir plus d'informations sur CMG Club Sports.",
    trial:
      "Bonjour, je souhaite réserver une séance d'essai à CMG Club Sports.",
    pricing:
      "Bonjour, je souhaite avoir plus d'informations sur les abonnements.",
  },
};

export default gymConfig;
