import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Reliable, efficient delivery{' '}
        <span className="header__title--bold">Powered by Technology</span>
      </h1>
      <p className="header__description">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}

export default Header;
