import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Correct import paths
import URLShortenerImg from "../../Assets/Projects/URLShortener.jpg";
import SudokuSolverImg from "../../Assets/Projects/sudoku-solver.gif";
import BookstoreImg from "../../Assets/Projects/bookstore.jpg";
import ByteBuddiesImg from "../../Assets/Projects/byte_buddies.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* URL Shortener Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="URL Shortener"
              description="Developed a URL shortener using Java 21 and Spring Boot, handling 500+ test cases with 100% accuracy. Designed REST APIs for shortening, redirection, and click tracking, and integrated MySQL for persistent storage. Containerized the application using Docker and implemented a CI/CD pipeline with Jenkins."
              ghLink="https://github.com/Dharanisree2004/UrlShortener.git"
              imgPath={URLShortenerImg}  // Corrected image path
            />
          </Col>
          
          {/* Bookstore API Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Bookstore API"
              description="Developed a REST API for managing books and user authentication (login and signup) using Spring Boot. It provides functionalities to add, update, and delete books, and includes secure authentication for users."
              ghLink="https://github.com/Dharanisree2004/BookstoreAPI.git"
              imgPath={BookstoreImg}  // Corrected image path
            />
          </Col>

          {/* Byte Buddies EdTech Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Byte Buddies EdTech Platform"
              description="Founded Byte Buddies, an edtech platform teaching coding and digital skills to kids. Received seed funding of 1 lakh rupees and presented the platform to a panel of faculty members, leading a team to create educational content."
              ghLink="https://github.com/Dharanisree2004/bytebuddies.git"
              imgPath={ByteBuddiesImg}  // Corrected image path
              showGithub={false}
            />
          </Col>

            {/* Sudoku Solver Project */}
            <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sudoku Solver with GUI"
              description="Developed a Sudoku solver with a Java-based GUI, achieving 100% accuracy. Implemented efficient algorithms to reduce solving time by 30%, with a user-friendly interface for seamless input and solution display."
              ghLink="https://github.com/Dharanisree2004/sudokusolver.git"
              imgPath={SudokuSolverImg}  // Corrected image path
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
