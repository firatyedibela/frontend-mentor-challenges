import './scss/app.scss';
import Card from './components/Card';
import cardsData from './data/cardsData';

function App() {
  return (
    <div class="container">
      <main className="main ">
        <ul className="cards-list">
          {cardsData.map((data, idx) => (
            <li key={idx} className="cards-list__item">
              <Card {...data} />
            </li>
          ))}
        </ul>
      </main>
      <footer className="footer">
        <p className="footer-text">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
            target="_blank"
          >
            Frontend Mentor
          </a>{' '}
          Coded by{' '}
          <a href="https://github.com/firatyedibela" target="_blank">
            Fırat Yedibela
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
