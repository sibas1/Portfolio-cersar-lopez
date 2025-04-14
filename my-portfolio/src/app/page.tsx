"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Sections/Sections";

const Page = () => {
  const [color, setColor] = useState<string>("black");
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  const handleLinkClick = (id: string, color: string) => {
    setActiveSection(id);
    setColor(color);
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen">
      <div
        style={{ backgroundColor: color }}
        className="flex flex-col border-2 border-white m-2 min-h-[95vh] max-h-[95vh]"
      >
        <div className="flex flex-col p-4 w-full">
          <h1 className="items-start mb-4 font-bold text-4xl">Cesar Lopez</h1>
          <span className="items-start font-bold text-2xl italic">Back-end - Front-end</span>
        </div>
        <div className="flex-1 overflow-auto">
          <Section
            id="home"
            title=""
            content=""
            isVisible={activeSection === "home"}
          />
          <Section
            id="about"
            title="About Section"
            content="This is the about section content."
            isVisible={activeSection === "about"}
          />
          <Section
            id="contact"
            title="Contact Section"
            content="This is the contact section content."
            isVisible={activeSection === "contact"}
          />
          <Section
            id="projects"
            title="Projects Section"
            content="This is the projects section content."
            isVisible={activeSection === "projects"}
          />
        </div>
        <div className="flex flex-col justify-end items-end mr-10 mb-10 text-4xl">
          <Navbar onLinkClick={handleLinkClick} />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <button className="mx-4" >Ligth</button><button className="mx-4" >Dark</button>
        </div>
        <div>
          <button className="mx-4" >Español</button><button className="mx-4" >Inglish</button>
        </div>
      </div>
    </div>
  );
};

export default Page;