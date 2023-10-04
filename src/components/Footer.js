import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="m-5  pb-5 ">
          <Col lg={8}>
            <h4 className="pb-4">AUGUSTE AKO LATH</h4>
            <p className="footext">
              Un développeur Web Fullstack qui construit des sites Web et des
              applications Web qui mènent au succès de l'ensemble du produit.
            </p>
          </Col>
          <Col className="socialMedia text-end">
            <h4 className="pb-4">Reseaux Sociaux</h4>
            <div className="d-flex justify-content-end gap-5 fs-3">
              <a
                href="http://github.com/Auguste-Romain14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="http://gitlab.com/te.lauguste"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab />
              </a>
              <a
                href="http://www.linkedin.com/in/lath-auguste-romain-ako-98b738196"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="px-5 ">
          <p className="footext copyR text-center ">
            © Copyright 2023. Made by Auguste Ako Lath
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
