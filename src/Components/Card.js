import React from 'react';

function Card({ icon, desc, temp }) {

  return (
    <div >
      <h4>Mon</h4>
      {/* <h4>${window.moment(day.dt*1000).format('dddd')}</h4> */}
      <img alt="icon" src="http.openweather"></img>
      <p>{desc}</p>
      <p>{temp}°C</p>
    </div>
  )

}

export default Card;