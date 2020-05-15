import React from 'react';
import { WiDaySunny, WiCloud } from "react-icons/wi";

function Weather() {
  return (
    <div className="panel">
      <div id="weather-panel">
      </div>
      <div id="text-panel-weather">
        <h1 id="weather">Clouds</h1>
      </div>
      <div className="icons">
          <WiCloud className="fa-spin" />
        </div>
    </div>
  );
}

export default Weather;
