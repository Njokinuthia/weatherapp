import React, { useEffect, useState } from 'react';
import Card from "./Card"
import Header from "./Header"


const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


function Daily({ data, current }) {
  // console.log(data)
  console.log("this is now", current)
  const daily = data.map(day => {
    return <Card
    day={weekDays[day.index]}
      key={day.dt}
      dt={day.dt}
      icon={day.weather[0].icon}
      desc={day.weather[0].main}
      temp={day.temp.day}
    />
  })

  return (
    <div className="daily ">        
      
      <div className="border border-white today" >
        <div>
          <h4 className="dayName">Today</h4>

          {/* <h4>${window.moment(day.dt*1000).format('dddd')}</h4> */}
        </div>
        <div>    
          {/* <img src="http://openweathermap.org/img/wn/10d@2x.png"></img>    
        */}
      
          <p>{current.weather[0].description}</p>
          <p>{current.temp}°C</p>
        </div>
      </div>
      <div className="d-flex">{daily}</div>
    </div>

  )

}
export default Daily;