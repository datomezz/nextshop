import React from "react";
import {
  Container,
} from "react-bootstrap";

import Header from "../header";
import Footer from "../footer";

export default function MainLayout ({children}) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}