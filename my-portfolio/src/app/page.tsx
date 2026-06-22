"use client";
import { palettes } from "@/styles/palettes";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Sections/Sections";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
type SectionId = "home" | "about" | "projects" | "contact";

function PageContent() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const { language, setLanguage, t } = useLanguage();

  const currentPalette = palettes[mode][activeSection];

  const handleLinkClick = (id: SectionId) => {
    setActiveSection(id);
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <div
        style={{
          backgroundColor: currentPalette.bg,
          color: currentPalette.text,
        }}
        className="flex flex-col flex-1 m-2 border-2 border-white overflow-hidden transition-colors duration-1000 ease-in-out"
      >
        <div className="flex flex-col p-4 w-full">
          <h1
            style={{ color: currentPalette.accent }}
            className="items-start mb-4 font-bold text-4xl"
          >
            Cesar Lopez
          </h1>
          <span className="items-start font-bold text-2xl italic">
            {t.hero.subtitle}
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
            title={t.sections.about.title}
            content={t.sections.about.content}
            isVisible={activeSection === "about"}
            colors={palettes[mode].about}
          />
          <Section
            id="contact"
            title={t.sections.contact.title}
            content={t.sections.contact.content}
            isVisible={activeSection === "contact"}
            colors={palettes[mode].contact}
          />
          <Section
            id="projects"
            title={t.sections.projects.title}
            content={t.sections.projects.content}
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
        <div className="flex gap-1 items-baseline">
          <button
            type="button"
            className={`${mode === "light" ? "font-bold underline" : ""}`}
            onClick={() => setMode("light")}
          >
            {t.ui.light}
          </button>
          <span className="font-bold">/</span>
          <button
            type="button"
            className={`${mode === "dark" ? "font-bold underline" : ""}`}
            onClick={() => setMode("dark")}
          >
            {t.ui.dark}
          </button>
        </div>
        <div className="flex gap-1 items-baseline">
          <button
            type="button"
            className={`${language === "es" ? "font-bold underline" : ""}`}
            onClick={() => setLanguage("es")}
          >
            Español
          </button>
          <span className="font-bold">/</span>
          <button
            type="button"
            className={`${language === "en" ? "font-bold underline" : ""}`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
