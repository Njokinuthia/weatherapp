import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
function Card({ icon, desc, temp ,dt }) {
  const dateToFormat = {dt}

  return (
    <div className="dailyCard border border-white" >
      <h4 className="dayName">Mon</h4>
      <Moment>{dateToFormat}</Moment>
      {/* <h4>${Moment(dt*1000).format('dddd')}</h4> */}
      
      <img alt="icon" src="http.openweather"></img>
      <p>{desc}</p>
      <p>{temp}°C</p>
    </div>
  )

}

export default Card;