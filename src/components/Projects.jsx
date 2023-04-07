import ramaacreations from "../assets/img/ramaacreations.webp";
import "animate.css";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";
import github from "../assets/img/Github.svg";
import linkSvg from "../assets/img/link.svg";
import alibabaLink from "../assets/img/alibabacloud-icon.svg";
function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | Prakrati  | Projects</title>
        <meta name="description" content="Projects made by Chhatresh Khatri" />
      </Helmet>
      <section id="projects" className="project">
        <Container className="container">
          <h1>Projects</h1>
          <Row className="project-row project-1 align-items-center">
            
            <Col>
            <div className="project-content">

              <h2>YouTube Transcript Summarizer </h2>
              <h3>Enormous number of video recording are being created and shared on internet through out the day,so its really difficult to spend time
                on each video for longer time .So Summarizing Transcript of such video automatically helps to quickly look out for important pattern in video and helps in saving time and 
                turning the voice to text and generate Summarization.
                In this Project works with purpose with techiques for Summarization and video will get opportunity to have textual summarization
                with python API,REST API ,NLP,html, CSS,Javascript. </h3>
              <p> </p>
              <p><strong> </strong> </p>
              {/* <a target="_blank" href="https://www.alibabacloud.com/blog/project-showcase-%7C-ramaa-creations_598812" rel="noreferrer">Blog Link <img src={alibabaLink} alt="blog" /></a> */}
              {/* <a target="_blank" href="http://w-58018-23029-15377.4724382204.sites.hkalimatch01.shopali.net/" rel="noreferrer">Live Link<img src={linkSvg} alt="link" /></a> */}
            </div>
            </Col>
          </Row>
          <Row className="project-row project-1 align-items-center">
            
            <Col>
            <div className="project-content">
              <h2>Pattern Recognition of Iris Flower </h2>
              <h3>This Design Mainly consist of Iris Flower dataset and more accurately predict the species of iris flowerimage. </h3>
              <p>  </p>
              <p> <strong> </strong> </p>
              {/* <a target="_blank" href="https://www.alibabacloud.com/blog/project-showcase-%7C-ramaa-creations_598812" rel="noreferrer">Blog Link <img src={alibabaLink} alt="blog" /></a> */}
              {/* <a target="_blank" href="http://w-58018-23029-15377.4724382204.sites.hkalimatch01.shopali.net/" rel="noreferrer">Live Link<img src={linkSvg} alt="link" /></a> */}
            </div>
            </Col>
          </Row>
         
        </Container>
      </section>
    </HelmetProvider>
  );
}
export default Projects;