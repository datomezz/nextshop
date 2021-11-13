import React from "react";
import Link from "next/link";
import HeaderSearch from "./header-search";
import HeaderAction from "./header-action";
import styles from "./styles.module.scss";

//ICONS
import {
  faUserCircle,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Row className="my-3">
        <Col md={3}>
          <Link href="/" className={styles.logo}>NEXTJS STORE</Link>
        </Col>
        <Col md={5}>
          <HeaderSearch />
        </Col>
        <Col md={4} className="d-flex justify-content-end">
          <div style={{marginRight: "1rem"}}>
            <HeaderAction icon={faUserCircle} label={"Login"} />
          </div>
          <HeaderAction icon={faShoppingCart} label={"Cart"} type="cart" />
        </Col>
      </Row>
    </Container>
  )
}