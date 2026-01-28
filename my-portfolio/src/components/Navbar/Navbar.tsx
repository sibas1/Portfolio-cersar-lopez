"use client";

import React from "react";
type SectionId = "home" | "about" | "projects" | "contact";

interface NavbarProps {
  onLinkClick: (id: SectionId) => void;
  activeSection: SectionId;
  accentColor: string;
  buttonColor: string;
}


const Navbar: React.FC<NavbarProps> = ({
  onLinkClick,
  activeSection,
  accentColor,
  buttonColor,
}) => {
const links: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
];

  return (<nav>

      <ul>
        {links.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <li key={link.id} className="m-1">
              <button
                onClick={() => onLinkClick(link.id)}
                style={{
                  backgroundColor: buttonColor,
                  color: isActive ? accentColor : "inherit",
                }}
                className={`
                  px-3 py-1 rounded-md border
                  border-transparent 
                  transition-all duration-300
                  hover:translate-x-1
                  ${isActive ? "font-semibold" : "opacity-70"}
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