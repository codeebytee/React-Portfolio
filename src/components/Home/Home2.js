import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
               
            <p className="home-about-body">
            At first glance, I might come off as a dedicated finance student, but delve a bit deeper and you'll find my fervor for languages like <b className="purple">JavaScript, Java, C++, and particularly the magic of ReactJS.</b>
              <br />
              <br />While I navigate the complex financial terrains, my toolkit isn't just limited to balance sheets and forecasts. I pride myself on my prowess in
              <i>
                <b className="purple"> SQL, my dexterity with Excel, and my knack for crafting detailed financial models. </b>
              </i>
              <br />
              <br />
              For me, the intersection of finance and technology isn't just a point of intrigue, but a playground where I love to innovate and create." &nbsp;
              
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jayant-singh-132005-js/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
