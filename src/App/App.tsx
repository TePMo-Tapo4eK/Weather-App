import { useEffect, useState } from "react";
import axios from "axios";
import s from "./App.module.scss";

function App() {
  const [count, setCount] = useState({});
  const [weekDay, setWeekDay] = useState("");
  const [month, setMonth] = useState("");

  const key = "5a0960fb89b249703b9bed2168f8e3d3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Yaroslavl&appid=f79d67d9538bf79cc97a94b347320d2c&units=metric`;

  useEffect(() => {
    axios.get(url).then((data) => setCount(data.data));
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    setWeekDay(days[new Date().getDay()]);
  }, []);
  useEffect(() => {
    setMonth(months[new Date().getMonth()]);
  }, []);

  return (
    <div className={s.App}>
      <div className={s.Info}>
        <div className={s.Left}>
          {/* Температура Основная */}
          {count.main ? (
            <h4 className={s.temp}>{Math.floor(count.main.temp)}°C</h4>
          ) : null}

          {/* Температура Ощущается */}
          {count.main ? (
            <p className={s.feels}>{Math.floor(count.main.feels_like)}°C</p>
          ) : null}
        </div>

        <div className={s.Right}>
          <h2 className={s.name}>{count.name}</h2>
          <p className={s.weekday}>{weekDay}</p>
          <p className={s.date}>
            {" "}
            - {new Date().getDate()} {month}
          </p>
          {count.weather ? (
            <p className={s.weather}>
              {count.weather[0].main} - {count.weather[0].description}
            </p>
          ) : null}
        </div>
      </div>

      {/* 
      
      {count.main ? (
        <p className={s.press}>{count.main.pressure * 0.750062}</p>
      ) : null}
      {count.weather ? (
        <p className={s.weather}>{count.weather[0].main}</p>
      ) : null}
      {count.weather ? (
        <p className={s.weather_discription}>{count.weather[0].description}</p>
      ) : null}


       */}
    </div>
  );
}

export default App;
