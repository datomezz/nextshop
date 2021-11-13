import React from "react";
import Product from "../product";

import { Row, Col } from "react-bootstrap";

export default function ProductLayout() {
  return (
    <Row className="mt-4">
      {
        Array(10).fill({ img: "/product-1.jpg", title: "my product" }).map((item, idx) => {
          return (
            <Col key={idx} md={4} className="mb-3">
              <Product item={item} />
            </Col>
          )
        })
      }
    </Row>
  )
}