import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Socialicon from "./Socialicon";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center name-copyright">
          <Col sm={true}>
            <div className="nameGradient"><span> Prakrati Goyal</span></div>
            <p>&copy; 2023 Copyright by Prakrati Goyal</p>
          </Col>
          <Col sm={true} className="text-center text-sm-end">
            <Socialicon />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;