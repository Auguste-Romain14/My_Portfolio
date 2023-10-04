import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsDashLg } from "react-icons/bs";
import Formulaire from "./Formulaire";

const ContactSection = () => {
  return (
    <>
      <Container>
        <div className="text-center my-5 py-5">
          <h2 className="display-5" id="">
            ME CONTACTER
          </h2>
          <BsDashLg className="display-4 dash" />
          <p className="sousTitre ">
            N'hésitez pas à me contacter en remplissant le formulaire ci-dessous{" "}
            <br />
            et je vous répondrai dans les plus brefs délais.
          </p>
        </div>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={7} className="bg-white rounded shadow">
            <Formulaire />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactSection;
