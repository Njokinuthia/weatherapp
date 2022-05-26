import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
  display: "inline-block",
  border: "1px solid black",
  width: "80px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};


function Navigation() {

 
  return (
    <div>
     
      <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "darkblue" }}>Home</NavLink>
      <NavLink to="/detailed" style={linkStyles} >Detailed</NavLink>
      <NavLink to="/todo" style={linkStyles} >ToDo</NavLink>
    </div>
  )
}
export default Navigation