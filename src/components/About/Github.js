import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import "../../style.css";


function Github() {
  const purple = "#c084f5";

  return (
    <Container fluid style={{ padding: "40px 0" }}>
      {/* Certifications */}
      <h2
        style={{
          paddingTop: "60px",
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          color: "#fff",
        }}
      >
        My <span style={{ color: purple }}>Certifications</span>
      </h2>

      <Row className="justify-content-center" style={{ paddingTop: "30px" }}>
        {[
          {
            title: "DSA by Hitbullseye",
            date: "July 2024",
            desc: "Mastered algorithm design and complexity analysis with hands-on problems.",
            link: "https://acrobat.adobe.com/id/urn:aaid:sc:ap:a10512e9-2481-4b83-9289-0f152ab4af44",
          },
          {
            title: "Prompt Engineering (Coursera)",
            date: "Feb 2024",
            desc: "Learned how to create efficient prompts and workflows with ChatGPT.",
            link: "https://coursera.org/share/256c9fb06e1afe511e8502fb645ba30b",
          },
        ].map((item, index) => (
          <Col key={index} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title style={{ color: purple, fontWeight: "bold" }}>
                  {item.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.date}
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "justify" }}>
                  {item.desc}
                </Card.Text>
                <Button variant="primary" href={item.link} target="_blank">
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Hackathons */}
      <h2
        style={{
          paddingTop: "60px",
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Cracked the Code: <span style={{ color: purple }}>Hackathons</span>
      </h2>

      <Row className="justify-content-center" style={{ paddingTop: "30px" }}>
        {[
          {
            title: "GFG Web-a-thon",
            desc: "Among top 25 from 200+ teams. Built a full-stack solution under time crunch.",
          },
          {
            title: "InnovateX Hackathon",
            desc: "Secured Top 10 spot. Created a construction management tool with live demo.",
          },
        ].map((item, index) => (
          <Col key={index} md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title style={{ color: purple, fontWeight: "bold" }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Github;
