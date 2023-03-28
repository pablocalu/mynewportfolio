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
            <br />Soy un Desarrollador Full Stack.
            <br />Al ser Argentino, por supuesto que hablo Español😄 , pero tambien tengo un nivel Avanzado de Ingles (C2).
            <br />
            Siempre estoy aprendiendo, me encanta aprender nuevas tecnologias y probar sus limites.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Me enamore de la programacion y le estoy dedicando <span className="purple">mi vida </span>a esto.
            <br/>
            Como lenguaje principal uso <span className="purple">JavaScript</span>. 
            <br/>
            Me encanta crear <span className="purple">Productos </span>y <span className="purple">Tecnologias Web</span>.
            <br/>
            Me gusta aplicar mis conocimientos desarrollando
            con librerias modernas. En el front-end usulamente uso <span className="purple">React</span>, <span className="purple">Next</span>,
            y <span className="purple">Tailwind</span>, para el back-end suelo usar <span className="purple">Node</span> y <span className="purple">Express</span>. Como bases de datos
            depende el proyecto puedo elegir entre relacionales y no relacionales
            como <span className="purple">MongoDB</span> o <span className="purple">PostgreSQL</span>.
            <br/>
            <br/>
            Algunas de mis otras cualidades son:
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