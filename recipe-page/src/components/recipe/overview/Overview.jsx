import React from 'react';

function Overview({ title, description, preparationMinutes, cookingMinutes }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="prepTime">
        <h3>Preparation Time</h3>
        <ul>
          <li>
            <span>Total: </span>Approximately{' '}
            {preparationMinutes + cookingMinutes} minutes
          </li>
          <li>
            <span>Preparation: </span>
            {preparationMinutes} minutes
          </li>
          <li>
            <span>Cooking: </span>
            {cookingMinutes} minutes
          </li>
        </ul>
      </div>
    </>
  );
}

export default Overview;
