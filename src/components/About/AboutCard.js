import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Ashabul Elaph Hilful</span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I did my undergraduation from United International University in CSE.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Install, configure, test and maintain operating systems, application software and system management tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous deployment and continuous integration (CI/CD) management.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Many of life's failures are people who did not realize how close they were to success when they gave up"{" "}
          </p>
          <footer className="blockquote-footer">Thomas Edison</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
