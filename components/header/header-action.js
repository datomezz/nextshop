import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeaderAction({icon, label, type = "default"}) {
  return (
    <Button variant="outline-success" className="d-flex justify-content-center align-items-center h-100">
      <FontAwesomeIcon icon={icon} />
      <span className="mx-2">{label}</span>
      {
        type === "cart" && <span>13</span>
      }
    </Button>
  )
}