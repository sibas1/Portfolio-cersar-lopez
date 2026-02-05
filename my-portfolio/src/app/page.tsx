"use client";
import { palettes } from "@/styles/palettes";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Sections/Sections";
type SectionId = "home" | "about" | "projects" | "contact";

const Page = () => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const currentPalette = palettes[mode][activeSection];

  // Ya no necesitamos scroll automático porque las secciones se muestran/ocultan

  const handleLinkClick = (id: SectionId) => {
    setActiveSection(id);
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen">
      <div
        style={{
          backgroundColor: currentPalette.bg,
          color: currentPalette.text,
        }}
        className="flex flex-col m-2 border-2 border-white min-h-[95vh] max-h-[95vh] transition-colors duration-1000 ease-in-out"
      >
        <div className="flex flex-col p-4 w-full">
          <h1
            style={{ color: currentPalette.accent }}
            className="items-start mb-4 font-bold text-4xl"
          >
            Cesar Lopez
          </h1>
          <span className="items-start font-bold text-2xl italic">
            Back-end - Front-end
          </span>
        </div>
        <div className="flex-1 transition-colors duration-1000 ease-in-out">
          <Section
            id="home"
            title=""
            content=""
            isVisible={activeSection === "home"}
            colors={palettes[mode].home}
          />
          <Section
            id="about"
            title="About Section"
            content="This is the about section content."
            isVisible={activeSection === "about"}
            colors={palettes[mode].about}
          />
          <Section
            id="contact"
            title="Contact Section"
            content="This is the contact section content."
            isVisible={activeSection === "contact"}
            colors={palettes[mode].contact}
          />
          <Section
            id="projects"
            title="Projects Section"
            content="This is the projects section content."
            isVisible={activeSection === "projects"}
            colors={palettes[mode].projects}
          />
        </div>
        <div className="flex flex-col justify-end items-end mr-10 mb-10 text-4xl">
          <Navbar
            onLinkClick={handleLinkClick}
            activeSection={activeSection}
            colors={currentPalette}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <button
            type="button"
            className={`mx-4 ${mode === "light" ? "font-bold underline" : ""}`}
            onClick={() => setMode("light")}
          >
            Light
          </button>

          <button
            type="button"
            className={`mx-4 ${mode === "dark" ? "font-bold underline" : ""}`}
            onClick={() => setMode("dark")}
          >
            Dark
          </button>
        </div>
        <div>
          <button type="button" className="mx-4">
            Español
          </button>
          <button type="button" className="mx-4">
            Inglish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
