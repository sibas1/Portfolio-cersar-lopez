"use client";

import React from "react";
type SectionId = "home" | "about" | "projects" | "contact";

interface NavbarProps {
  onLinkClick: (id: SectionId) => void;
  activeSection: SectionId;
  colors: {
    bg: string;
    text: string;
    accent: string;
    buttons: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({
  onLinkClick,
  activeSection,
  colors,
}) => {
  const links: { id: SectionId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "projects", label: "Projects" },
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

