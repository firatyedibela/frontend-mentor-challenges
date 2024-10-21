import React from 'react';

function Ingredients({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => {
        return <li key={idx}>{ingredient}</li>;
      })}
    </ul>
  );
}

export default Ingredients;
