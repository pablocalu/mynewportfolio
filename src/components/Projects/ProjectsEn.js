import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kinema from '../../Assets/Kinema.png'
import recipes from '../../Assets/recipesapp.png'
import poker from '../../Assets/poker3.png'
import casual from '../../Assets/casual1.png'
import uber from '../../Assets/uber.jpg'

function ProjectsEn() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
            Here are some of my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kinema}
              isBlog={false}
              title="Kinema"
              description="Streaming App for Movies and Series, with different types of users and different functionalities for each one. Made with React.js, Material-UI, Firebase, MongoDB, Express and Node."
              ghLink="https://github.com/PG-Movies-Group-1/Kinema-Project"
              demoLink="https://kinema-entertainment.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poker}
              isBlog={false}
              title="Poker Data"
              description="App to manage users and poker players, with real time statistics display. Made with React.js, Chakra-UI, MongoDB, Node, Express, Bcrypt, Toastify (internal use application, can not be shared deploy)."
              ghLink="https://github.com/poker-data"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casual}
              isBlog={false}
              title="Casual Ecommerce"
              description="Ecommerce made to implement Next.js. React, Tailwind and Next.js were used for front-end, NextAuth was used for user authorization and the keys were encrypted with bcrypt, Paypal was used as payment gateway, js-cookies was used for data persistence, react-toastify for notifications and MongoDB was used as database."
              ghLink="https://github.com/pablocalu/ecomm"
              demoLink="https://youtu.be/KOdyWBT8Rnc"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber Clon"
              description="Uber Clone with React Native. Use Tailwind CSS for styling, Google Distance Matrix API to calculate time and distance, Google Directions API for real navigation, Google Places API for real places, React Native Navigation to navigate between screens and React Native Elements to improve the design."
              ghLink="https://github.com/pablocalu/ubercloning"
              demoLink="https://youtu.be/gPK1h1bLM50"              
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipes}
              isBlog={false}
              title="Recipes App"
              description="Cooking recipes app. Made in Henry's BootCamp, consuming data from an API, and making its own database, front-end rendering, sorting and searching recipes. Made with React, pure Css, Node, Express, Sqlite and Sequelize."
              ghLink="https://github.com/pablocalu/pi-food"
              demoLink="https://youtu.be/HRRYGEXuLls"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsEn;