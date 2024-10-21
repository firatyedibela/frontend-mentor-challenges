import React from 'react';
import styles from './overview.module.scss';

function Overview({ title, description, preparationMinutes, cookingMinutes }) {
  return (
    <div className={styles.overview}>
      <div className={styles.generalInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.prepTime}>
        <h2>Preparation Time</h2>
        <ul>
          <li>
            <span>
              <b>Total:</b> Approximately {preparationMinutes + cookingMinutes}{' '}
              minutes
            </span>
          </li>
          <li>
            <span>
              <b>Preparation:</b> {preparationMinutes} minutes
            </span>
          </li>
          <li>
            <span>
              <b>Cooking:</b> {cookingMinutes} minutes
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;
