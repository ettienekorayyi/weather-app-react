import React from 'react';

const Temperature = ({ currentTemp }) => {
  
  return (
    <div className="panel">
      <div id="temperature-panel">
      </div>
      <div id="text-panel-temperature">
        <h1 id="temperature">{currentTemp}<span>&#176;</span>c</h1>
      </div>
    </div>
  );
}

export default Temperature;
