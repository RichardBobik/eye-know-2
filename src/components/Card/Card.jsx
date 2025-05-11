import React from 'react';
import './Card.css';

const Card = ({ data, isSpinning }) => {
  if (!data) return null;

  return (
    <div id="card" className={`card ${isSpinning ? 'spinning' : 'done'}`}>
      <div className="card-content">
        {data?.lines?.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
