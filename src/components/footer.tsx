"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer() {

  const externalLinks = {
    "github": {
      "bootstrap-logo": "bi bi-github",
      "url": "www.github.com/sgfanega"
    },
    "email": {
      "bootstrap-logo": "bi bi-envelope-fill",
      "url": "mailto: steve.fanega.ii@gmail.com"
    },
    "website": {
      "bootstrap-logo": "bi bi-globe",
      "url": "www.stevefanega.com"
    }
  }

  const ExternalLinksList = () => {
    const externalLinksList = [];
    const externalLinksArr = Object.entries(externalLinks);

    for (const [key, value] of externalLinksArr) {
      externalLinksList.push(<li className="list-group-item">
       <a href={value.url} className="fs-5 text-reset px-1 px-sm-3">
          <i className={value["bootstrap-logo"]}></i>
        </a> 
      </li>)
    }
    return externalLinksList;
  }

  return (
    <footer className="container-fluid">
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center border-bottom pt-3" xs={12}>
          <p className="fs-6 text-center mb-0">Connect With Me:</p>
          <ul className="d-flex flex-wrap external-links ">
            {
              <ExternalLinksList/>
            }
          </ul>
        </Col>
        <Col xs={12}>
          <p className="fs-6 text-center mb-0 py-4">© 2023 Copyright Steve Fanega II</p>
        </Col>
      </Row>
    </footer>
  )
}