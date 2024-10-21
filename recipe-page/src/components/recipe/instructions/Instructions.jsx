import React from 'react';
import styles from './instructions.module.scss';

function Instructions({ instructions }) {
  return (
    <ul>
      {instructions.map((instruction, idx) => {
        return (
          <li key={idx} className={styles.instructionContainer}>
            <span className="number">{idx + 1}. </span>
            <div>
              <span className="task">{instruction.task}: </span>
              <span className="instruction">{instruction.taskDescription}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Instructions;
