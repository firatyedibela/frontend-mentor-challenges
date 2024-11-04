import './scss/app.scss';
import Card from './components/Card';
import cardsData from './data/cardsData';

function App() {
  return (
    <main className="main container">
      <ul className="cards-list">
        {cardsData.map((data, idx) => (
          <li key={idx} className="cards-list__item">
            <Card {...data} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
