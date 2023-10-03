import React from "react";

const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid ">
          <img src="/assets/Ma-photo.jpg" className="maPhoto" alt="" />
          <a class="navbar-brand fw-5 fs-4" href="#">
            Auguste AKO LATH
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto fs-6 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  A PROPOS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  PROJETS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
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
