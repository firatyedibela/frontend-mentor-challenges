import React from 'react';
import Recipe from './components/recipe/Recipe';
import './scss/main.scss';
import omelette from './data/omelette';

function App() {
  return (
    <div className="container">
      <main>
        <Recipe {...omelette}></Recipe>
      </main>
    </div>
  );
}

export default App;
