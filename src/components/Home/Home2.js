import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myavatar3.png";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineMail, // ✅ add this
} from "react-icons/ai";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Dharani Sree, a passionate programmer and aspiring backend developer.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Java, C++, and HTML/CSS. </b>
              </i>
              <br />
              <br />
              My field of interest lies in building efficient{" "}
              <i>
                <b className="purple">backend systems</b>
              </i>{" "}
              and crafting robust applications using{" "}
              <b className="purple">Spring Boot and MySQL</b>. I enjoy solving real-world problems through technology.
              <br />
              <br />
              Currently, I’m diving deeper into{" "}
              <i>
                <b className="purple">cloud technologies</b>
              </i>{" "}
              and enhancing my backend development skills.
              <br />
              <br />
              I love participating in hackathons and collaborating with teams to build impactful tech solutions.
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
                  href="https://github.com/Dharanisree2004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dharanisree2004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sreechinthamanics@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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
