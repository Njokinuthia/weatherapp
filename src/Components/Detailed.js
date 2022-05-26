import React from "react";
import Header from "./Header"



function Detailed({ current }) {
  // console.log("current from detailed", current)
  const { pressure, humidity, temp, visibility, } = current
  const { description, icon } = current.weather[0]
  // console.log(description)


  return (
    <>
      <Header />     
      <div className="container border">
        <h4>Detailed Weather Information</h4>
        <div>
          <div className="flex">
            <img src={icon} alt="icon"></img>
            <p>{description}</p>
            <p>{temp}C</p>
          </div>
          <div className="flex">
            <p>Humidity: {humidity}</p>
            <p>Pressure: {pressure}</p>
            <p>visibility: {visibility}</p>
          </div>
        </div>
      </div>

    </>)

}

export default Detailed