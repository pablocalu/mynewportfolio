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
            <br /> Al ser Argentino, por supuesto que hablo Español😄 , pero tambien tengo un nivel Avanzado de Ingles (C2).
            <br />
            Siempre estoy aprendiendo, creo que es la clave.. Algunas de mis otras cualidades son..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugador de Equipo
            </li>
            <li className="about-activity">
              <ImPointRight /> Comunicacion
            </li>
            <li className="about-activity">
              <ImPointRight /> Solucion de problemas
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;