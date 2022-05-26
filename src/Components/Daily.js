import React, { useEffect, useState } from 'react';
import Card from "./Card"
import Header from "./Header"


const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


function Daily({ data }) {
  // console.log(data)
  const daily = data.map(day => {
    return <Card
      key={ day.dt}
      icon={day.weather[0].icon}
      desc={day.weather[0].main}
      temp={day.temp.day}
    />
  })

  return (
    <>
     
      <div className="container border flex">{daily}</div>
    </>
  )

}
export default Daily;