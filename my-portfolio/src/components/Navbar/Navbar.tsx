"use client";

import React from "react";

interface NavbarProps {
  onLinkClick: (id: string, color: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const links = [
    { id: "home", label: "Home", color: "#30303B" },
    { id: "about", label: "About", color: "#302F2D" },
    { id: "contact", label: "Contact", color: "#200E18" },
    { id: "projects", label: "Projects", color: "#1E2329" },
  ];

  return (
    <nav className="flex-row justify-center items-center">
      <div>Welcome</div>
      <br />
      <ul >
        {links.map((link) => (
          <li key={link.id} >
            <button
            style={{ backgroundColor:link.color}}

              onClick={() => onLinkClick(link.id, link.color)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;