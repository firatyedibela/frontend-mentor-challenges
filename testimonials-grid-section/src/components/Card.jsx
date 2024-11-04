import React from 'react';
import '../scss/_card.scss';

function Card(props) {
  return (
    <article className={`card card--${props.class}`}>
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
      <p className="card__text">{props.text}</p>
    </article>
  );
}

export default Card;
