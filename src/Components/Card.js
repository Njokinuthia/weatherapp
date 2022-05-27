import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
function Card({ icon, desc, temp, dt }) {
  const dateToFormat = { dt }

  return (
    <div className="dailyCard border border-white" >
      <h4 className="dayName">{<Moment>{dateToFormat}</Moment>}</h4>

      <img alt="icon" src="http://openweathermap.org/img/wn/10d@2x.png"></img>
      <p>{desc}</p>
      <p>{temp}°C</p>
    </div>
  )

}

export default Card;