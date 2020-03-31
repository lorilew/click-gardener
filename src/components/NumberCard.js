import React, { useState } from 'react';

function NumberCard(props) {
  return (
    <div id={props.id} className="numberCard card">
      <div className="container">
        <img src="/refund.png" alt="image" />
        <p className="title">{props.title}</p>
        <p className="amount">{props.amount}</p>
      </div>
    </div>
  );
}

export default NumberCard;
