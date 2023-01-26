import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from '../../Assets/myself.png'
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              TE <span className="purple"> CUENTO </span> UN POCO DE MI
            </h1>
            <p className="home-about-body">
              Me enamore de la progamacion y le estoy dedicando mi vida a esto, creo que algo voy aprendiendo.. 🤷‍♂️
              <br />
              <br />Como mi principal lenguaje uso
              <i>
                <b className="purple"> Javascript</b>.
              </i>
              <br />
              <br />
              Me entusiasma poder crear &nbsp;
              <i>
                <b className="purple">Productos y Tecnologias Web</b>.
              </i>
              <br />
              <br />
              Cada vez que puedo, me gusta aplicar mis conocimientos desarrollando con 
              <i>
                <b className="purple">
                  {" "}
                  Librerias modernas</b> y <b className="purple">Frameworks de JavaScript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React </b>y <b className="purple">Redux para FrontEnd - Express, Node</b> y <b className="purple">Mongo para BackEnd</b>
              .</i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>Podes encontrarme en las siguientes redes sociales.</h3>
            <p>
              Sentite libre de <span className="purple">conectar </span>conmigo.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pablocalu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/pablitocarro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pablocarroit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pablo.carro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;