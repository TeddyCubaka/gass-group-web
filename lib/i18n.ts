export type Locale = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      projects: "Projets",
      blog: "Actualités",
      contact: "Contact",
      clientPortal: "Espace Client",
      login: "Connexion",
      signup: "Inscription",
      logout: "Déconnexion",
      dashboard: "Tableau de Bord",
    },
    hero: {
      title: "GASS Group",
      subtitle: "Group All Services Solutions",
      tagline: "Votre partenaire global en solutions de services",
      cta: "Découvrir nos services",
      contact: "Nous contacter",
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions intégrées pour votre réussite",
      technologies: {
        name: "GASS Technologies",
        desc: "Solutions IT et digitales innovantes pour accompagner votre transformation numérique.",
      },
      security: {
        name: "GASS Security",
        desc: "Gardiennage et sécurité privée, protection des biens et des personnes avec efficacité.",
      },
      building: {
        name: "GASS Building",
        desc: "Ingénierie, architecture et réalisation de projets de construction et d'aménagement.",
      },
      consulting: {
        name: "GASS Consulting",
        desc: "Cabinet de conseil pour entrepreneurs, spécialisé en création et gestion d'entreprise.",
      },
      learnMore: "En savoir plus",
    },
    about: {
      title: "À Propos de GASS",
      subtitle: "Plus qu'un incubateur, un catalyseur de réussite",
      mission: "Notre Mission",
      missionText: "Fournir à nos clients des conseils stratégiques, des formations adaptées, et un accompagnement opérationnel novateur.",
      vision: "Notre Vision",
      visionText: "Devenir le partenaire de confiance incontournable pour les professionnels et entreprises désireux d'évoluer et d'exceller.",
      values: "Nos Valeurs",
      valuesList: ["Innovation constante", "Excellence dans le service", "Partenariat durable", "Écoute et adaptabilité"],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Nous sommes à votre écoute",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      company: "Entreprise",
      subject: "Sujet",
      message: "Message",
      service: "Service concerné",
      send: "Envoyer",
      success: "Message envoyé avec succès!",
      error: "Une erreur est survenue",
    },
    footer: {
      description: "Votre partenaire global en solutions de services intégrées.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      blog: "News",
      contact: "Contact",
      clientPortal: "Client Portal",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      dashboard: "Dashboard",
    },
    hero: {
      title: "GASS Group",
      subtitle: "Group All Services Solutions",
      tagline: "Your global partner for service solutions",
      cta: "Discover our services",
      contact: "Contact us",
    },
    services: {
      title: "Our Services",
      subtitle: "Integrated solutions for your success",
      technologies: {
        name: "GASS Technologies",
        desc: "Innovative IT and digital solutions to support your digital transformation.",
      },
      security: {
        name: "GASS Security",
        desc: "Security and private guarding, protecting assets and people with efficiency.",
      },
      building: {
        name: "GASS Building",
        desc: "Engineering, architecture and construction project realization.",
      },
      consulting: {
        name: "GASS Consulting",
        desc: "Consulting firm for entrepreneurs, specialized in business creation and management.",
      },
      learnMore: "Learn more",
    },
    about: {
      title: "About GASS",
      subtitle: "More than an incubator, a catalyst for success",
      mission: "Our Mission",
      missionText: "Provide our clients with strategic advice, adapted training, and innovative operational support.",
      vision: "Our Vision",
      visionText: "Become the trusted partner of choice for professionals and businesses looking to evolve and excel.",
      values: "Our Values",
      valuesList: ["Constant innovation", "Service excellence", "Lasting partnership", "Listening and adaptability"],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      subject: "Subject",
      message: "Message",
      service: "Related Service",
      send: "Send",
      success: "Message sent successfully!",
      error: "An error occurred",
    },
    footer: {
      description: "Your global partner for integrated service solutions.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.fr;
}
