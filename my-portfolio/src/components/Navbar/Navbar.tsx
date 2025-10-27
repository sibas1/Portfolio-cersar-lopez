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
          <li key={link.id} className="m-1">
            <button className="shadow-md p-1 rounded-md"
            style={{ backgroundColor:link.color}}

              onClick={() => onLinkClick(link.id, link.color)}
              className="transition-transform hover:translate-x-1 active:translate-x-2 duration-200"
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