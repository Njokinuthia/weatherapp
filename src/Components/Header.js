import React from 'react';
import Time from "./Time"


function Header({city}) {
  

  return (
    
      <div className="d-flex  justify-content-between">
        <Time />
        <h3 className="city">{city}</h3>
      </div>
    
  )

}
export default Header