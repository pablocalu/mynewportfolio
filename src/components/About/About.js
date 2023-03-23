import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import cat from '../../Assets/pablo2.png'
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Un poco mas de <strong className="purple">mi</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={cat} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mi <strong className="purple">Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple2">Herramientas</strong> que uso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;