import React , {useState , useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import '../App.css';
import Home from "./Home"
import Detailed from "./Detailed"

const apiKey = "6e8961d072710264f0ad7cfb9d01b809";

function App() {
  const [latLon, setLatLon] = useState(undefined); //{lat: 0, lon: 0}
  const [data, setData] = useState(null)
  let timezone, current, daily;

  useEffect(() => {
    if (latLon === undefined) return;
    const { lat, lon } = latLon;
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + apiKey + "&units={metric}")
      .then((resp) => resp.json())
      .then((weatherData) => {
        console.log(weatherData)        
        setData(weatherData)
      });
  }, [latLon]);

  useEffect(() => {
    let lat, lon;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        setLatLon({ lat, lon });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);

  console.log(data)
  if (data === null) {
    return
  }
  else {
    timezone = data.timezone
    current = data.current
    daily = data.daily

  }  

 
  return (
    
    <BrowserRouter>
      <Route>       
        <Home city={timezone} data={daily}  />
      </Route>
      <Route>
        <Detailed current={current}/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
