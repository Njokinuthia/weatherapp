import React, { useEffect, useState } from 'react';
import Card from "./Card"
import Header from "./Header"


const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


function Daily({ data }) {
  console.log(data)

  const daily = data.map(day => {

    console.log(day.weather[0].icon)
    return <Card
    day={weekDays[day.index]}
      key={day.dt}
      dt={day.dt}
      icon={day.weather[0].icon}
      desc={day.weather[0].main}
      temp={day.temp.day}
    />
  })

  // const daily = data.forEach((day, idx) => {
  //   if (idx === 0) {
  //     return (
  //       <div className="" >
  //         <h4 className="">today</h4>
  //         <img alt="icon" src={`http://openweathermap.org/img/wn/ ${day.weather[0].icon} @2x.png`}></img>
  //         <p>{day.weather[0].desc}</p>
  //         <p>{day.temp.day}°C</p>
  //       </div>
  //     )

  //   }
  //   else {
  //     return <Card
  //       day={weekDays[day.index]}
  //       key={day.dt}
  //       dt={day.dt}
  //       icon={day.weather[0].icon}
  //       desc={day.weather[0].main}
  //       temp={day.temp.day}
  //     />
  //   }
  // })

  return (
    <div className="daily ">
      <div className="d-flex">{daily}</div>
    </div>

  )

}
export default Daily;