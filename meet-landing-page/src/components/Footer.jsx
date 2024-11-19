import Number from './Number';

function Footer() {
  return (
    <footer className="footer">
      <Number>02</Number>
      <div className="footer__hero">
        <div className="footer__content">
          <h2 className="footer__title">Experience more together</h2>
          <p className="footer__text">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <div className="footer__btn-container">
            <a className="footer__btn btn btn--purple" href="">
              Download <span>v1.3</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
