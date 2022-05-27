import React from 'react'
import { NavLink, useHistory } from "react-router-dom"

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


function NavBar() {

  let history = useHistory ();

  return (
    <div>
      <NavLink to="/" exact
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
        onClick={() => history.push("/")}>Home
      </NavLink>
      <NavLink to="/detailed"
        style={linkStyles}
        onClick={() => history.push("/detailed")}>
        Detail
      </NavLink>
      <NavLink to="/todo"
        style={linkStyles}
        onClick={() => history.push("/todo")}>ToDo
      </NavLink>
    </div>
  )
}
export default NavBar