import React from 'react';

function CelebrityCard({ celebrity, isFlipped, onCardClick }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={celebrity.image} alt="Celebrity" />
        </div>
        <div className="card-back">
          <p className="celebrity-name">{celebrity.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CelebrityCard;