import React from 'react';
import Time from "./Time"


function Header({ city, icon }) {


  return (

    <div className="d-flex  justify-content-between">
      <Time />
      <div>
        <h3 className="city">{city}</h3>
        <img src="" alt="icon"></img>
      </div>
    </div>

  )

}
export default Header