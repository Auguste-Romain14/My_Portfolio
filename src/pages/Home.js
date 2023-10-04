import React from "react";

import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* section 1 : Accueil */}

      <div className="accueil d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-2 ">HEY, JE SUIS AUGUSTE AKO LATH</h1>
          <p className="text-center fs-4 mb-5">
            Developpeur d'application Fullstack spécialiste de la stack MERN
          </p>
          <a
            href="#project"
            className="btn fs-4 shadow btn-accueil btn-lg text-white "
          >
            PROJETS
          </a>
        </div>
      </div>

      {/* section 2 : A propos */}

      <div className="about py-5" id="about">
        <AboutSection />
      </div>

      {/* Section 3 : Projects */}
      <div className="projets" id="project">
        <ProjectSection />
      </div>

      {/* Section 4 : Contacts */}
      <div className="contact py-5" id="contact">
        <ContactSection />
      </div>

      {/* Section 5 : Footer */}
      <div className="footer py-5 bg-dark text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
