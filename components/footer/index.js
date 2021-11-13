import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <Container as={"footer"} fluid className={styles.footerLayoutFluid}>
      <Container>
        <Row>
          <Col md={3}>
            <ul className="p-0">
              <li className="h5">Header</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="p-0">
              <li className="h5">Header</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="p-0">
              <li className="h5">Header</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="p-0">
              <li className="h5">Header</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
              <li>Info</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}