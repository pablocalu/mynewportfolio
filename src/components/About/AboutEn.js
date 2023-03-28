import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import cat from '../../Assets/pablo2.png'
import Toolstack from "./Toolstack";
import AboutCardEn from "./AboutCardEn";

function AboutEn() {

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
              I'll tell you a little bit <strong className="purple">about myself</strong>
              </h1>
              <AboutCardEn/>            
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
            My <strong className="purple">Stack </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple2">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    );
  
}

export default AboutEn;