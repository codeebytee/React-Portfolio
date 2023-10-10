import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TradingViewWidget from "../tickertape"
function Home() {
  return (
    <section>
      
      <Container fluid className="home-section" id="home">
      <div style={{paddingTop: 20}}>
      <TradingViewWidget />
      </div>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                HELLO {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JAYANT SINGH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo}
                alt="home pic"
                width={"500px"}
                height={"700px"}
              />
            </Col>
          </Row>
        </Container>
      
      <Home2 />
      </Container>
    </section>
  );
}

export default Home;
