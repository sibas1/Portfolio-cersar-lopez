export type PaletteMode = "dark" | "light";
export type SectionPalette = {
  bg: string;
  text: string;
  accent: string;
  buttons: string;
};

const themePalettes: Record<string, { dark: SectionPalette; light: SectionPalette }> = {
  tech: {
    dark: { bg: "#0f0a1e", text: "#f3e8ff", accent: "#a855f7", buttons: "#c084fc" },
    light: { bg: "#faf5ff", text: "#3b0764", accent: "#9333ea", buttons: "#a855f7" },
  },
  sunset: {
    dark: { bg: "#120c22", text: "#f3e8ff", accent: "#c084fc", buttons: "#d8b4fe" },
    light: { bg: "#fbf5ff", text: "#4c1d95", accent: "#7c3aed", buttons: "#8b5cf6" },
  },
  forest: {
    dark: { bg: "#150e26", text: "#f3e8ff", accent: "#d946ef", buttons: "#e879f9" },
    light: { bg: "#fdf4ff", text: "#581c87", accent: "#a21caf", buttons: "#c026d3" },
  },
  cosmic: {
    dark: { bg: "#18102a", text: "#f3e8ff", accent: "#f0abfc", buttons: "#f5d0fe" },
    light: { bg: "#fdf2ff", text: "#6b21a8", accent: "#c026d3", buttons: "#d946ef" },
  },
  coral: {
    dark: { bg: "#1b1330", text: "#f3e8ff", accent: "#f472b6", buttons: "#f9a8d4" },
    light: { bg: "#fdf2f8", text: "#831843", accent: "#db2777", buttons: "#ec4899" },
  },
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