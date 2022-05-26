import React from 'react';

function Card({ icon, desc, temp }) {

  return (
    <div >
      <h4>Mon</h4>
      <img alt="icon" src="http.openweather"></img>
      <p>{desc}</p>
      <p>{temp}°C</p>
    </div>
  )

}

export default Card;