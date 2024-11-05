import React from 'react';
import '../scss/_card.scss';

function Card(props) {
  return (
    <article className={`card card--${props.bgColor} card--${props.textColor}`}>
      <header className="card-header">
        <img src={props.img} alt={`A small profile picture of ${props.name}`} />
        <div className="card__personal-data">
          <h2 className="card__name">{props.name}</h2>
          <span className="card__status-label">{props.statusLabel}</span>
        </div>
      </header>
      <blockquote className="card__quote">
        <p className="card__quote-title">{props.title}</p>
        <p className="card__quote-text">&#8243; {props.text} &#8243;</p>
      </blockquote>
    </article>
  );
}

export default Card;
