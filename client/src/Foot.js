import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class Foot extends React.Component {
render() {
return (
<Footer color="black" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Military News Info</h5>
      <p>
     Latest miilitary news sourced by Google Alerts.
      </p>
      </Col>
      {/* <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col> */}
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MilitaryInfo.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default Foot;