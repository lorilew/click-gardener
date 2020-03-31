import React, { useState } from 'react';

function FarmCard(props) {
  return (
    <div id={props.id} className="farmCard card">
      <div className="container">
        <img src="/agronomy.png" alt="image" />
        <p className="description">{props.description}</p>
        <p className="count">{props.count}</p>
        <button onClick={props.counter}>{props.btnLabel}</button>
      </div>
    </div>
  );
}

export default FarmCard;
