import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to Know <strong className="purple">Me</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              I’m <strong className="purple">Dharani Sree</strong>, a Computer
              Science and Engineering (Hons) student at Lovely Professional
              University. <br/> <br/>I'm passionate about{" "}
              <strong className="purple">problem-solving</strong>, full stack
              development, and building impactful tech solutions.
              <br />
              <br />
              I enjoy participating in hackathons, collaborating with teams, and
              developing scalable{" "}
              <strong className="purple">backend systems</strong> using Java and
              Spring.
              <br />
              <br />
              I'm currently focused on{" "}
              <strong className="purple">Java backend development</strong> and
              exploring <strong className="purple">cloud technologies</strong>.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
