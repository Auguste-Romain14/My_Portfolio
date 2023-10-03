import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsDashLg } from "react-icons/bs";

const ProjectSection = () => {
  return (
    <>
      <Container>
        <div className="text-center my-5">
          <h2 className="display-5" id="project">
            MES PROJETS
          </h2>
          <BsDashLg className="display-4 dash" />
          <p className="sousTitre ">
            Vous trouverez ici quelques-uns des projets personnels et <br /> de
            clients que j'ai créés, chaque projet contenant sa propre étude de
            cas.
          </p>
        </div>

        <Row className="projetPortfolio p-5">
          <Col lg={6}>
            <img
              src="CaptureHomePortfolio.jpg"
              alt="image du portfolio"
              className="w-100"
            />
          </Col>
          <Col lg={6} className="p-5">
            <h3 className="fw-bold">Portfolio</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              officiis enim consequatur repellendus. Delectus officiis suscipit,
              recusandae, autem modi quasi incidunt cum voluptate in numquam
              voluptatem, nesciunt ab hic obcaecati.
              <br />
              <br />
              <a
                type="button"
                target="_blank"
                href="https://portfolio-omega-bay-45.vercel.app/"
                className="btn btn-primary btn-voir shadow"
              >
                VOIR
              </a>
            </p>
          </Col>
        </Row>

        <Row className="projetDashboard p-5">
          <Col lg={6}>
            <img
              src="/assets/CaptureHomeDashboard.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={6} className="p-5">
            <h3 className="fw-bold">Dashboard DigiKool</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              officiis enim consequatur repellendus. Delectus officiis suscipit,
              recusandae, autem modi quasi incidunt cum voluptate in numquam
              voluptatem, nesciunt ab hic obcaecati.
              <br />
              <br />
              <a
                type="button"
                target="_blank"
                href="https://final-project-gomycode.vercel.app/"
                className="btn btn-primary btn-voir shadow"
              >
                VOIR
              </a>
            </p>
          </Col>
        </Row>

        <Row className="projetVSP p-5">
          <Col lg={6}>
            <img src="/assets/CaptureHomeVSP.jpg" alt="" className="w-100" />
          </Col>
          <Col lg={6} className="p-5">
            <h3 className="fw-bold">VSP Sécurité</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              officiis enim consequatur repellendus. Delectus officiis suscipit,
              recusandae, autem modi quasi incidunt cum voluptate in numquam
              voluptatem, nesciunt ab hic obcaecati.
              <br />
              <br />
              <a
                type="button"
                target="_blank"
                href="https://vsp-securite.com"
                className="btn btn-primary btn-voir shadow"
              >
                VOIR
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectSection;
