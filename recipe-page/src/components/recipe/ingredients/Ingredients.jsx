import React from 'react';
import styles from './ingredients.module.scss';

function Ingredients({ ingredients }) {
  return (
    <div className={styles.container}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, idx) => {
          return <li key={idx}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ingredients;
