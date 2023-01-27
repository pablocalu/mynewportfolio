import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kinema from '../../Assets/Kinema.png'
import recipes from '../../Assets/recipesapp.png'
import poker from '../../Assets/poker3.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estan algunos de mis proyectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kinema}
              isBlog={false}
              title="Kinema"
              description="Aplicacion de Streaming de peliculas y series, con diferentes tipos de usuarios y distintas funcionabilidades para cada uno. Realizada con React.js, Material-UI, Firebase, MongoDB, Express y Node."
              ghLink="https://github.com/PG-Movies-Group-1/Kinema-Project"
              demoLink="https://kinema-entertainment.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poker}
              isBlog={false}
              title="Poker Data"
              description="App para gestion de usuarios y jugadores de poker, con exhibicion de estadisticas en tiempo real. Realizada con React.js, Chakra-UI, MongoDB, Node, Express. (Aplicacion de uso interno, no se puede compartir deploy)."
              ghLink="https://github.com/poker-data"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipes}
              isBlog={false}
              title="Recipes App"
              description="Aplicacion de recetas de cocina. Realizada con React, Css puro, Node, Express, Sqlite y Sequelize"
              ghLink="https://github.com/pablocalu/pi-food"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
