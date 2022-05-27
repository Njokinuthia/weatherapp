import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


function Card({ icon, desc, temp, dt }) {
  const dateToFormat = { dt }

  // console.group("my icon code:" ,icon)

  return (
    <div className="dailyCard border border-white" >
      {/* <p>${Moment(dateToFormat * 1000).format('ddd')}</p> */}
      {/* <h4>day</h4> */}
      <img alt="icon" src={`https://openweathermap.org/img/wn/10d@2x.png`}></img>


      <p>{desc}</p>
      <p>{temp}°C</p>
    </div>
  )

}

export default Card;