import React from 'react';
import Time from "./Time"


function Header({city}) {
  

  return (
    <div className="container">
      <div className="flex border border-dark">
        <Time />
        <h3>{city}</h3>
      </div>

    </div>
  )

}
export default Header