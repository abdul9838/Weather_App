import { useEffect } from "react";
import { useState } from "react";

// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=89bb37687774ebcb51e4dc6216d16c14`;

const Weather = () => {
  const [data, setData] = useState({
    cod: 200,
    message: "city non found",
    name: "delhi",
    main: {
      temp: 23,
      temp_min: 18,
      temp_max: 29,
      feels_like: 28,
      weather: [{ main: "Haze" }],
    },
  });
  const [city, setCity] = useState("delhi");
  const [kiki, setkty] = useState("delhi");

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=16d5493a564dd8d9a352c995bef3fe39`;
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [city]);
  const input = (event) => {
    event.preventDefault();
    setCity(event.target.name.value);
    event.target.name.value = "";
  };

  return (
    <div className="weather_data">
      <form onSubmit={input} action="">
        <input type="text" name="name" placeholder="Enter a city name" id="" />
        <button>Search</button>
      </form>
      {data.cod > 250 ? (
        <p>{data.message} enter a valid city name.</p>
      ) : (
        <div className="weatherDetail">
          <img src={`../image/${data.weather?.[0].main}.png`} alt="" />
          <h2>{data.name}</h2>
          <h1>{data.main.temp}</h1>
          <div className="type">
            <p>{data.weather?.[0].main}</p>
          </div>
          <p>Feels_like ~ {data.main.feels_like}</p>
          <div className="max_min">
            <div className="min">
              <p>min</p>
              <p>{data.main.temp_min}</p>
            </div>
            <div>
              <p>max</p>
              <p>{data.main.temp_max}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
