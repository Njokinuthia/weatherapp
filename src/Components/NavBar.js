import React from 'react'
import { Link,NavLink, useHistory, Router } from "react-router-dom"

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

  // let history = useHistory ();

  return (
    <div>
      <Link to="/todo"
        style={linkStyles}
        // onClick={() => history.push("/todo")}  
        >Login
      </Link>
      <Link to="/" 
        style={linkStyles}
        activeStyle={{ background: "darkblue" }}
        // onClick={() => history.push("/")}
        >Home
      </Link>
      <Link to="/detailed"
        style={linkStyles}
        // onClick={() => history.push("/detailed")}
        >
        Detail
      </Link>
      
    </div>

    // <div>
    //   <Link to="/">Home</Link>
    //   <Link to="/hello">Helo</Link>
    // </div>
  )
}
export default NavBar