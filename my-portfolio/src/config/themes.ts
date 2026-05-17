export const themeColors = {
  tech: {
    primary: "#0ea5e9", // theme-tech-500
    secondary: "#38bdf8", // theme-tech-400
    accent: "#0284c7", // theme-tech-600
    light: "#f0f9ff", // theme-tech-50
  },
  sunset: {
    primary: "#f97316", // theme-sunset-500
    secondary: "#fb923c", // theme-sunset-400
    accent: "#ea580c", // theme-sunset-600
    light: "#fff7ed", // theme-sunset-50
  },
  forest: {
    primary: "#22c55e", // theme-forest-500
    secondary: "#4ade80", // theme-forest-400
    accent: "#16a34a", // theme-forest-600
    light: "#f0fdf4", // theme-forest-50
  },
  cosmic: {
    primary: "#a855f7", // theme-cosmic-500
    secondary: "#c084fc", // theme-cosmic-400
    accent: "#9333ea", // theme-cosmic-600
    light: "#faf5ff", // theme-cosmic-50
  },
  coral: {
    primary: "#ef4444", // theme-coral-500
    secondary: "#f87171", // theme-coral-400
    accent: "#dc2626", // theme-coral-600
    light: "#fef2f2", // theme-coral-50
  },
};

export const sectionThemes: Record<string, keyof typeof themeColors> = {
  home: "tech",
  about: "sunset",
  projects: "coral",
  contact: "cosmic",
};

export const getThemeForSection = (sectionId: string) => {
  const themeName = sectionThemes[sectionId] || "tech";
  return themeColors[themeName];
};

