export type PaletteMode = "dark" | "light";
export type SectionPalette = {
  bg: string;
  text: string;
  accent: string;
  buttons: string;
};

const themePalettes: Record<string, { dark: SectionPalette; light: SectionPalette }> = {
  tech: {
    dark: { bg: "#0c4a6e", text: "#e0f2fe", accent: "#38bdf8", buttons: "#7dd3fc" },
    light: { bg: "#f0f9ff", text: "#0369a1", accent: "#0284c7", buttons: "#0ea5e9" },
  },
  sunset: {
    dark: { bg: "#7c2d12", text: "#ffedd5", accent: "#fb923c", buttons: "#fdba74" },
    light: { bg: "#fff7ed", text: "#9a3412", accent: "#ea580c", buttons: "#f97316" },
  },
  forest: {
    dark: { bg: "#14532d", text: "#dcfce7", accent: "#4ade80", buttons: "#86efac" },
    light: { bg: "#f0fdf4", text: "#166534", accent: "#16a34a", buttons: "#22c55e" },
  },
  cosmic: {
    dark: { bg: "#581c87", text: "#f3e8ff", accent: "#c084fc", buttons: "#d8b4fe" },
    light: { bg: "#faf5ff", text: "#6b21a8", accent: "#9333ea", buttons: "#a855f7" },
  },
  coral: {
    dark: { bg: "#7f1d1d", text: "#fee2e2", accent: "#f87171", buttons: "#fca5a5" },
    light: { bg: "#fef2f2", text: "#991b1b", accent: "#dc2626", buttons: "#ef4444" },
  },
};

const sectionThemeMap: Record<string, string> = {
  home: "tech",
  about: "sunset",
  projects: "forest",
  contact: "cosmic",
};

export const getSectionPalette = (
  section: string,
  mode: PaletteMode,
): SectionPalette => {
  const themeName = sectionThemeMap[section] || "tech";
  return themePalettes[themeName][mode];
};

export const palettes = {
  dark: {
    home: themePalettes.tech.dark,
    about: themePalettes.sunset.dark,
    projects: themePalettes.forest.dark,
    contact: themePalettes.cosmic.dark,
  },
  light: {
    home: themePalettes.tech.light,
    about: themePalettes.sunset.light,
    projects: themePalettes.forest.light,
    contact: themePalettes.cosmic.light,
  },
};
