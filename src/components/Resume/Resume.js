import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
//import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={""} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Work Experience</h3>
            <Resumecontent
              title="SENIOR SOFTWARE ENGINEER [Qgol Infosystems Pvt Ltd]"
              date="Sep 2011 - Present"
              content={["I have been Working in this firm since 2011 as a Software Engineer. This Company basically product based.They have developed & marketing two different Products which very useful for in search of Quality analysis.I am involved myself in the product developement & bug fixing."]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Freelance]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MCA [GTM College, Vellore] "
              date="2004 - 2007"
              content={["Precentage: 70%"]}
            />
            <Resumecontent
              title="B.sc Botany [Madura College, Madurai] "
              date="2004 - 2007"
              content={["Precentage: 72%"]}
            />
            <Resumecontent
              title="12TH BOARD [TMHSS,Madurai]"
              date="2003 - 2004"
              content={["Precentage: 77%"]}
            />
            <Resumecontent
              title="10TH BOARD [TMHSS,Madurai] "
              date="2001 - 2012"
              content={["Precentage: 89%"]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={""} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
