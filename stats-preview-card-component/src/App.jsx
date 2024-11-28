import './styles/index.scss';
import cardImgMobile from './assets/images/image-header-mobile.jpg';
import cardImgDesktop from './assets/images/image-header-desktop.jpg';

function App() {
  return (
    <div className="container">
      <main className="main">
        <article className="card">
          <div className="card__img-half">
            <picture>
              <source media="(min-width: 1440px)" srcSet={cardImgDesktop} />
              <img
                src={cardImgMobile}
                alt="Three women working happily in an office"
              />
            </picture>
          </div>
          <div className="card__text-half">
            <p className="card__lead">
              Get <span>insights</span> that help your business grow.
            </p>
            <p className="card__description">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <ul className="card__stats-list">
              <li className="card__stat">
                10k+ <span>Compaines</span>
              </li>
              <li className="card__stat">
                314 <span>Templates</span>
              </li>
              <li className="card__stat">
                12M+ <span>Queries</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
