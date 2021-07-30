import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import leaf from "../../Assets/Projects/leaf.png";


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
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="Quality"
              description=""
              link="https://github.com/psathish"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={leaf}
              isBlog={false}
              title="Production"
              description=""
              link="https://github.com/psathish"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Attendance"
              description=""
              link="https://github.com/psathish"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
