import React from 'react';
import styles from './nutrition.module.scss';

function Nutrition({ nutrition }) {
  return (
    <div className={styles.nutritionContainer}>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul>
        {nutrition.map((nutrient, idx) => {
          return (
            <>
              <li className={styles.nutrient} key={idx}>
                <span>{nutrient.name}</span>
                <span>
                  {nutrient.amount}
                  {nutrient.unit}
                </span>
              </li>
              <li>
                <hr />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Nutrition;
