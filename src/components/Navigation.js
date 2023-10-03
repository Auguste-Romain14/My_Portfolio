import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid ">
          <img src="/assets/Ma-photo.jpg" className="maPhoto mx-lg-5" alt="" />
          <a class="navbar-brand fs-6" href="#">
            Auguste AKO LATH
          </a>
          <button
            class="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto fs-6 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" onClick={toggleMenu}>
                  A PROPOS
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#project"
                  aria-disabled="true"
                  onClick={toggleMenu}
                >
                  PROJETS
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#contact"
                  aria-disabled="true"
                  onClick={toggleMenu}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
