import React from 'react';

function Nutrition({ nutrition }) {
  return (
    <>
      <p></p>
      <ul>
        {nutrition.map((nutrient, idx) => {
          return (
            <>
              <li key={idx}>
                <span>{nutrient.name}</span>
                <span>
                  {nutrient.amount}
                  {nutrient.unit}
                </span>
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Nutrition;
