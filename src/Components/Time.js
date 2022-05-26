import React , {useState , useEffect} from 'react';

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]


function Time() {
  // const[time , setTime] = useState({})
  const[day , setDay] = useState()
  const[date , setDate] = useState()
  const[month , setMonth] = useState()
  const[year , setYear] = useState()
  const[hour , setHour] = useState()
  const[minute , setMinute] = useState()
  const[amPm , setAmPm] = useState("")

  useEffect(()=>{
    const interval = setInterval(() => {
      let today = new Date();
      let day = today.getDay();
      let date = today.getDate();
      let month = today.getMonth()+1;
      let year = today.getFullYear();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let hourIn12Hour = hour<=13?hour%13:hour
      let amPm = hour>=12?"Pm":"Am"  

      // const determinedTime = {
      //   day:day,
      //   date:date,
      //   month:month,
      //   year:year,
      //   hour: hourIn12Hour,
      //   minute:minute,
      //   amPm:amPm
      // }
      // setTime([determinedTime])   

      setDay(day)
      setDate(date)
      setMonth(month)   
      setYear(year)
      setHour(hourIn12Hour)
      setMinute(minute)
      setAmPm(amPm)
    },1000);

    return () => clearInterval(interval);

  },[minute])
  
  // console.log("Minute is:" ,minute)
  
  return (
    <>     
      <div className="">
        <h3 className="">{hour}:{minute} <span className="">{amPm}</span></h3>
        <h3 className="">{weekDays[day]}, {date} {yearMonths[month]} {year}</h3>
      </div>
    </>

  )
}
export default Time;