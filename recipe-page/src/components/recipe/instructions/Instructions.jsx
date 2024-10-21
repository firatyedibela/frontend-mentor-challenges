import React from 'react';
import styles from './instructions.module.scss';

function Instructions({ instructions }) {
  return (
    <div className={styles.instructionsContainer}>
      <h2>Instructions</h2>
      <ul>
        {instructions.map((instruction, idx) => {
          return (
            <li key={idx}>
              <span className={styles.number}>{idx + 1}. </span>
              <div>
                <span>
                  <b>{instruction.task}</b>: {instruction.taskDescription}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Instructions;
