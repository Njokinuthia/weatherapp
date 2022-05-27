import React from 'react';
import Time from "./Time"


function Header({ city, icon }) {


  return (

    <div className="d-flex  justify-content-between">
      <Time />
      <div>
        <h3 className="city">{city}</h3>
        {/* <img src={`http://openweathermap.org/img/wn/ ${icon} @2x.png`} alt="icon"></img> */}
        <img alt="icon" src={`https://openweathermap.org/img/wn/10d@2x.png`}></img>

      </div>
    </div>

  )

}
export default Header