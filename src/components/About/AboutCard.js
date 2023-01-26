import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy  <span className="purple">Pablo Carro </span>
            de <span className="purple"> Arrecifes, Argentina.</span>
            <br />Soy un Desarrollador Full Stack Jr.
            <br />
            <br />
            Ademas de codear, hay otras cosas que me gusta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Ajedrez
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar Video Juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Pasar tiempo con amigos
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;