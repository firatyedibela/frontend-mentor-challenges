import React from 'react';

import Ingredients from './ingredients/Ingredients';
import Instructions from './instructions/Instructions';
import Nutrition from './nutrition/Nutrition';
import Overview from './overview/Overview';

function Recipe(props) {
  return (
    <article>
      <section className="imgContainer">
        <img src={props.img} alt={'Image of a ' + props.name} />
      </section>
      <section className="detailsContainer">
        <section className="overview">
          <Overview
            title={props.title}
            description={props.description}
            preparationMinutes={props.preparationMinutes}
            cookingMinutes={props.cookingMinutes}
          />
        </section>
        <br />
        <section>
          <h2>Ingredients</h2>
          <Ingredients ingredients={props.ingredients} />
        </section>
        <br />
        <section>
          <h2>Instructions</h2>
          <Instructions instructions={props.instructions} />
        </section>
        <section>
          <h2>Nutrition</h2>
          <Nutrition nutrition={props.nutrition} />
        </section>
      </section>
    </article>
  );
}

export default Recipe;
