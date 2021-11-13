import React from "react";
import SideBarItem from "./sidebar-item";
import { ListGroup } from "react-bootstrap";
import { faBahai } from "@fortawesome/free-solid-svg-icons";

const dummyData = [
  {id : 1, link : "/dummy", icon : faBahai, label : "electronics"},
  {id : 2, link : "/dummy", icon : faBahai, label : "cars"},
  {id : 3, link : "/dummy", icon : faBahai, label : "houses"},
  {id : 4, link : "/dummy", icon : faBahai, label : "elevators"},
]

export default function SideBar() {
  return (
    <ListGroup>
      {
        dummyData.map(item => {
          return (
            <ListGroup.Item key={item.id}>
              <SideBarItem item={item} />
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}