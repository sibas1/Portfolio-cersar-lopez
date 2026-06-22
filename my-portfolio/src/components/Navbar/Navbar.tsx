"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
type SectionId = "home" | "about" | "projects" | "contact";

interface NavbarProps {
  onLinkClick: (id: SectionId) => void;
  activeSection: SectionId;
  colors: { bg: string; text: string; accent: string; buttons: string };
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick, activeSection, colors }) => {
  const { t } = useLanguage();

  const links: { id: SectionId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
    { id: "projects", label: t.nav.projects },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id} className="m-1">
              <button
                type="button"
                onClick={() => onLinkClick(link.id)}
                style={{
                  backgroundColor: isActive ? colors.buttons : colors.bg,
                  color: isActive ? colors.bg : colors.text,
                  borderColor: colors.accent,
                }}
                className={`
                  px-3 py-1 rounded-md border
                  transition-all duration-300
                  hover:translate-x-1 hover:shadow-lg
                  ${isActive ? "font-semibold shadow-md" : "opacity-80 hover:opacity-100"}
                `}
              >
                {link.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

