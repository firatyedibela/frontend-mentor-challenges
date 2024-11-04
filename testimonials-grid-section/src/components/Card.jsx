import React from 'react';
import '../scss/_card.scss';

function Card(props) {
  return (
    <article className={`card card--${props.bgColor} card--${props.textColor}`}>
      <header className="card-header">
        <img src={props.img} alt={`A small profile picture of ${props.name}`} />
        <div className="personal-data">
          <h2 className="personal-data__name">{props.name}</h2>
          <span className="personal-data__status-label">
            {props.statusLabel}
          </span>
        </div>
      </header>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__text">&#8243; {props.text} &#8243;</p>
    </article>
  );
}

export default Card;