import React from 'react';
import meetLogo from '../assets/logo.svg';
import heroImage from '../assets/tablet/image-hero.png';
import heroLeft from '../assets/desktop/image-hero-left.png';
import heroRight from '../assets/desktop/image-hero-right.png';

function Header() {
  return (
    <header className="header ">
      <div className="header__logo-section">
        <img className="header__logo" src={meetLogo} alt="Meet logo" />
      </div>
      <div className="header__hero-section">
        <div className="header__hero-img-half">
          <img
            className="header__hero-img img-tablet"
            src={heroImage}
            alt="A hero picture containing profile pictures of several persons"
          />
        </div>
        <img
          className="header__hero-img-left img-desktop"
          src={heroLeft}
          alt="A hero picture containing profile pictures of several persons"
        />
        <div className="header__hero-text-half">
          <h1 className="header__hero-title">Group Chat for Everyone</h1>
          <p className="header__hero-description">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="header__button-group">
            <a className="header__btn btn btn--blue " href="">
              Download <span>v1.3</span>
            </a>
            <a className="header__btn btn btn--purple" href="">
              What is it?
            </a>
          </div>
        </div>
        <img
          className="header__hero-img-right img-desktop"
          src={heroRight}
          alt="A hero picture containing profile pictures of several persons"
        />
      </div>
    </header>
  );
}

export default Header;
