import React from 'react';
import './card.scss';

function Card({ border, title, description, logo }) {
  return (
    <article className={`card card--${border}`}>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <img className="card__logo" src={logo} alt="" />
    </article>
  );
}

export default Card;
