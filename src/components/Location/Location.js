import React from 'react';

const Location = (props) => {
  return (
    <div className="panel">
      <h1>{props.location}</h1>
      <h3>{ props.currentDate }</h3>
    </div>
  );
}

export default Location;
