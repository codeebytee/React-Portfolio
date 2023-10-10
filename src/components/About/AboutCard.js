import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Jayant Singh </span>
            a passionate finance student from the vibrant landscapes of  <span className="purple"> Lucknow, India.</span>
            <br /> While my heart lies in the intricate world of finance, my mind is constantly captivated by the wonders of computer technology.
            <br />
            Blending the logic-driven realm of finance with the ever-evolving field of technology, I strive to integrate both worlds in ways that can lead to innovative solutions and possibilities.
            <br />
            <br />
            Coming from a country with a rich heritage and a burgeoning tech landscape, I firmly believe in harnessing the best of both to shape a promising and sustainable future."
            <br />
            <br />
             Apart from Financial Studies and Coding, I love
          </p>
         

 
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Work to make his plans your reality"{""}
          </p>
          <footer className="blockquote-footer">Jayant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
