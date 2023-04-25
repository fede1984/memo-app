import React, { FC } from 'react';
import './Card.module.scss';

type CardProps = {
  id: string;
  image: string;
  flipped: boolean;
  matched: boolean;
  handleClick: (id: string) => void;
};

const Card: FC<CardProps> = ({ id, image, flipped, matched, handleClick }) => {
  return (
    <div
      data-testid="card"
      className={`Card ${flipped ? 'Card--flipped' : ''} ${matched ? 'Card--matched' : ''}`}
      onClick={() => handleClick(id)}
      style={{
        cursor: matched ? 'not-allowed' : 'pointer',
        backgroundImage: matched ? 'none' : undefined,
        backgroundColor: matched ? '#444444' : 'white',
        opacity: matched ? 0.5 : 1,
      }}
    >
      { !flipped ? <div className="Card__front" data-testid="card-front">
        <img src={image} alt="Animal" className="Card__image" data-testid="card-image"/>
      </div>
      :
      <div className="Card__back" data-testid="card-back"></div>}
     
    </div>
  );
};

export default Card;

