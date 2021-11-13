import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HeaderSearch() {
  return (
    <InputGroup as="form"> 
      <FormControl
        placeholder="Search Products..."
      />
      <Button variant="outline-success" id="button-addon2">
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  )
}