import React from 'react';

const Weather = ({ image, weather }) => {
  console.log(weather)
  return (
    <div className="panel">
      <div id="weather-panel">
      </div>
      <div id="text-panel-weather">
        <h1 id="weather">{weather}</h1>
      </div>
      <div className="icons">
        <img src={image}/>
      </div>
    </div>
  );
}

export default Weather;
