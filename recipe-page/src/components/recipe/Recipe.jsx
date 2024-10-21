import React from 'react';

import Ingredients from './ingredients/Ingredients';
import Instructions from './instructions/Instructions';
import Nutrition from './nutrition/Nutrition';
import Overview from './overview/Overview';

function Recipe(props) {
  return (
    <article>
      <img src={props.img} alt={'Image of a ' + props.name} />
      <section className="details-container">
        <section className="overview">
          <Overview
            title={props.title}
            description={props.description}
            preparationMinutes={props.preparationMinutes}
            cookingMinutes={props.cookingMinutes}
          />
        </section>
        <section>
          <Ingredients ingredients={props.ingredients} />
        </section>
        <hr />
        <section>
          <Instructions instructions={props.instructions} />
        </section>
        <hr />
        <section>
          <Nutrition nutrition={props.nutrition} />
        </section>
      </section>
    </article>
  );
}

export default Recipe;
