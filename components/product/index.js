import React from "react";
import Image from "next/image";
import { Card, Button } from "react-bootstrap";

export default function Product({item}) {
  return (
    <Card>
      <div className="d-flex justify-content-center card-img-top">
        <Image width={150} height={150} alt="product" src={item?.img ? item.img : "/product-1.jpg"} />
      </div>
      <Card.Body>
        <Card.Title>{item?.title ? item.title : "My title"}</Card.Title>
        <Button variant="success">ADD TO CARD</Button>
      </Card.Body>
    </Card>
  );
}