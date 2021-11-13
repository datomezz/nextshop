import SideBar from "../components/sidebar";
import {
  Row,
  Col
} from "react-bootstrap";

import { ProductLayout, SalesLayout } from "../components/layouts";

export default function IndexPage(){
  return (
    <>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <SalesLayout />
          <ProductLayout />
        </Col>
      </Row>
    </>
  )

}