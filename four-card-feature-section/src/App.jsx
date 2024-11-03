import React from 'react';
import './main.scss';
import { Header, Main, Footer, Card } from './components';
import cardData from './data/cardData';

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <ul className="card-list">
          {cardData.map((card, index) => (
            <li className="card-list__item" key={index}>
              <Card
                border={card.border}
                title={card.title}
                description={card.description}
                logo={card.logo}
              />
            </li>
          ))}
        </ul>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
