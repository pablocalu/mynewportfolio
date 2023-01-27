import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons2">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons2">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons2">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons2">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;