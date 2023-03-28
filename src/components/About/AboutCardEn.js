import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCardEn() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: 'justify' }}>
            Hi everyone, I am <span className="purple">Pablo Carro </span>
            from <span className="purple"> Arrecifes, Argentina.</span>
            <br />I am a Full Stack Developer.
            <br />
            As I am Argentinean, of course I speak Spanish😄 , but I also have
            an Advanced level of English (C2).
            <br />
            I am always learning, I love to investigate new technologies and
            test their limits.
            <br />
          </p>
          <p style={{ textAlign: 'justify' }}>
            I fell in love with programming and I am dedicating <span className="purple">my life </span> to it.
            As my main language I use <span className="purple">JavaScript </span>. 
            <br/>
            I am excited to create <span className="purple">Web Products </span>and <span className="purple">Technologies</span>.
            <br/>
            I like to apply my knowledge developing
            with modern libraries. In the front-end I usually use <span className="purple">React</span>, <span className="purple">Next</span>,
            and <span className="purple">Tailwind</span>, for the back-end I use <span className="purple">Node</span> and <span className="purple">Express</span>. As databases
            depends on the project I can choose relational or non-relational
            databases, either <span className="purple">MongoDB</span> or <span className="purple">PostgreSQL</span>.
            <br/>
            <br/>
            Some of my other qualities are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Team player
            </li>
            <li className="about-activity">
              <ImPointRight /> Excellent communication
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardEn;
