import { themeColors } from "../config/themes";

export const palettes = {
  dark: {
    home: {
      bg: "#4d515a", // gris-800 - fondo como estaba
      text: "#f3f4f6", // gris-100 - texto como estaba
      accent: "#ffffff", // blanco puro - título blanco
      buttons: "#ffffff", // blanco puro - botones blancos
    },
    about: {
      bg: "#1f2937", // gris-900
      text: "#e5e7eb", // gris-200
      accent: "#9ca3af", // gris-400
      buttons: "#6b7280", // gris-500
    },
    projects: {
      bg: "#111827", // gris-950
      text: "#f9fafb", // gris-50
      accent: "#d1d5db", // gris-300
      buttons: "#9ca3af", // gris-400
    },
    contact: {
      bg: "#4b5563", // gris-600
      text: "#f9fafb", // gris-50
      accent: "#e5e7eb", // gris-200
      buttons: "#d1d5db", // gris-300
    },
  },

  light: {
    home: {
      bg: "#ffffff", // blanco puro - máximo contraste
      text: "#030712", // gris-950 - texto muy oscuro
      accent: "#6b7280", // gris-500 - acento gris
      buttons: "#6b7280", // gris-500 - botones del mismo color que el título
    },
    about: {
      bg: "#cedd21", // amarillo-400 - punto medio brillante
      text: "#ffffff", // blanco puro - texto blanco
      accent: "#ffffff", // blanco puro - título blanco
      buttons: "#ffffff", // blanco puro - botones blancos
    },
    projects: {
      bg: "#f0fdf4", // verde-50 - fondo muy claro
      text: "#14532d", // verde-900 - texto muy oscuro
      accent: "#16a34a", // verde-600 - acento verde
      buttons: "#15803d", // verde-700 - botones verdes
    },
    contact: {
      bg: "#faf5ff", // púrpura-50 - fondo muy claro
      text: "#7c3aed", // púrpura-600 - texto más suave
      accent: "#a78bfa", // púrpura-400 - acento más suave
      buttons: "#8b5cf6", // púrpura-500 - botones más suaves
    },
  },
};
