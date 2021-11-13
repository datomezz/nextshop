import React from "react";
import { Row, Col } from "react-bootstrap";
import { SliderSales } from "../sliders";
import Product from "../product";

export default function SalesLayout() {
  return (
    <Row>
      <Col md={8}>
        <SliderSales />
      </Col>
      <Col md={4}>
        <Product />
      </Col>
    </Row>
  )
}