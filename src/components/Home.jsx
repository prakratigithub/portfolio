import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import  headerImg from "../assets/img/WhatsApp Image 2023-01-23 at 22.16.38.jpg";

import { BoxArrowUpRight } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Socialicon from "./Socialicon";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>

    <section className="banner" id="home">
      <Helmet>
        <title>Portfolio | Prakrati Goyal</title>
      </Helmet>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="tagline">

                  <span className="tagline-text">Welcome to my Portfolio</span>
                  </div>
                  <h1>
                   {`Hello ! I'm Prakrati Goyal`}{" "}
                    </h1>
                    <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "Student",
                          "at",
                          "Mody University of Science and Technology",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: "natural",
                      }}
                    />
                    </h1>
                  <p>
                    I am Seeking to gain some experience in my existing skills , capabilities and knowledge to a professional role in a dynamic company that will fully utilise my talent and hard work and trusts me with challenges and responsibilities.
                  </p>                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={true}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={ isVisible ? "animate__animated animate__zoomIn img-header" : "img-header"}>
                  <img src={headerImg} alt="Header Img" className="header-img"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <div className="connect_withMe">
          <Button variant="primary" href="https://drive.google.com/file/d/18WIon5-60JVa3ATl6O0S_8iND1mJjiqF/view?usp=share_link" target="_blank" className="resume-button">
            <BoxArrowUpRight />&ensp;View Resume
          </Button>
          <p>Let's connect</p>
          <Socialicon />
        </div>
      </Container>
    </section>
    </HelmetProvider>
  );
}

export default Home;