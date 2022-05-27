import React from 'react';
import Time from "./Time"


function Header({ city, icon }) {


  return (

    <div className="d-flex  justify-content-between">
      <Time />
      <div>
        <h3 className="city">{city}</h3>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon"></img>
      </div>
    </div>

  )

}
export default Header