import React from 'react';

const WeatherDetails = ({ weatherDetail, image }) => {
  return (
    <div className="panel">
      <div id="weather-panel">
      </div>
      <div id="text-panel-weather">
        <h1 id="weather">{weatherDetail}</h1>
      </div>
      <div className="icons">
        <img src={image}/>
      </div>
    </div>
  );
}

export default WeatherDetails;
