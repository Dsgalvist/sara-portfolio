export type ProjectCategory =
  | "branding"
  | "graphic-design"
  | "audiovisual"
  | "sound"
  | "motion"
  | "editorial";

export type Project = {
  id: string;
  year: string;
  title: string;

  category: ProjectCategory;

  type: {
    en: string;
    es: string;
  };

  description: {
    en: string;
    es: string;
  };

  role?: {
    en: string;
    es: string;
  };

  image?: string;
  video?: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "dialac",
    year: "2026",
    title: "DIALAC",

    category: "graphic-design",

    type: {
      en: "Visual Design",
      es: "Diseño Visual",
    },

    description: {
      en: "Project details coming soon.",
      es: "Detalles del proyecto próximamente.",
    },

    featured: true,
  },

  {
    id: "dona-leche",
    year: "2026",
    title: "Doña Leche",

    category: "branding",

    type: {
      en: "Brand & Product Content",
      es: "Marca & Contenido de Producto",
    },

    description: {
      en: "Project details coming soon.",
      es: "Detalles del proyecto próximamente.",
    },

    featured: true,
  },

  {
    id: "filminuto",
    year: "2025",
    title: "Filminuto",

    category: "audiovisual",

    type: {
      en: "Audiovisual",
      es: "Audiovisual",
    },

    description: {
      en: "Project details coming soon.",
      es: "Detalles del proyecto próximamente.",
    },

    featured: true,
  },

  {
    id: "foley",
    year: "2025",
    title: "Foley",

    category: "sound",

    type: {
      en: "Sound Design",
      es: "Diseño Sonoro",
    },

    description: {
      en: "Project details coming soon.",
      es: "Detalles del proyecto próximamente.",
    },

    featured: true,
  },
];
