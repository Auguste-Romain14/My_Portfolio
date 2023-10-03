import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsDashLg } from "react-icons/bs";
import ProjectSection from "../components/ProjectSection";

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
          <button className="btn fs-4 shadow btn-accueil btn-lg text-white ">
            PROJETS
          </button>
        </div>
      </div>

      {/* section 2 : A propos */}

      <div className="about py-5">
        <Container>
          <div className="text-center py-5">
            <h2 className="display-5" id="about">
              A PROPOS DE MOI
            </h2>
            <BsDashLg className="display-4 dash" />
            <p className="sousTitre">
              Vous trouverez ici plus d'informations sur moi, ce que je fais, et
              mes compétences actuelles, <br /> principalement en termes de
              programmation et de technologie.
            </p>
          </div>
          <Row>
            <Col lg={6}>
              <div className=" presentation">
                <h3 className="fs-3 fw-bold my-5">Apprenez à me connaître !</h3>
                <p>
                  Je suis un développeur Web Fullstack qui construit des sites
                  Web et des applications Web qui mènent au succès de l'ensemble
                  du produit.
                  <br />
                  <br />
                  Jetez un coup d'œil à certains de mes travaux dans la section
                  Projets. J'aime aussi partager du contenu lié à ce que j'ai
                  appris au fil des ans dans le domaine du développement Web
                  afin d'aider les autres membres de la communauté des
                  développeurs. N'hésitez pas à vous connecter ou à me suivre
                  sur &emsp;
                  <a
                    href="http://www.linkedin.com/in/lath-auguste-romain-ako-98b738196"
                    target="_blank"
                    className="lienProfil fw-bold"
                  >
                    Linkedin
                  </a>
                  &emsp;où je publie du contenu utile lié au développement web
                  et à la programmation.
                  <br />
                  <br />
                  Je suis ouvert aux opportunités d'emploi où je peux
                  contribuer, apprendre et grandir. Si vous avez une bonne
                  opportunité qui correspond à mes compétences et à mon
                  expérience, n'hésitez pas à me contacter.
                  <br />
                  <br />
                  <button className="btn btn-contact btn-lg shadow text-white ">
                    CONTACT
                  </button>
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className=" skills mx-lg-5">
                <h3 className="fs-3 fw-bold my-5">Compétences</h3>
                <p className="d-flex flex-wrap gap-3">
                  <button type="button" class="btn btn-secondary" disabled>
                    HTML 5
                  </button>
                  <button type="button" class="btn btn-secondary" disabled>
                    CSS 3
                  </button>
                  <button type="button" class="btn btn-secondary" disabled>
                    JAVASCRIPT
                  </button>
                  <button type="button" class="btn btn-secondary" disabled>
                    REACT JS
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    BOOTSTRAP
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    EXPRESS JS
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    MONGODB
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    GIT
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    GITHUB
                  </button>
                  <button type="button" class="btn btn-secondary " disabled>
                    PYTHON Basics
                  </button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 3 : Projects */}
      <div className="projets">
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
