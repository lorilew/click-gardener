import React, { useState } from 'react';

function DayCounter(props) {
  return (
    <div id={props.id} className="dayCounter card">
      <div className="container">

        <img src={(props.hour < 6 || props.hour > 18) ? "/moon.png": "/sun.png"} alt="image" />
        <p className="day">{props.day} days</p>
        <p className="hour">{props.hour}:00</p>
      </div>
    </div>
  );
}

export default DayCounter;
