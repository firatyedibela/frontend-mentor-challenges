import React from 'react';
import './footer.scss';

const frontendMentorURL =
  'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK';
const gitHubURL = 'https://github.com/firatyedibela';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer--text">
        Challenge by{' '}
        <a href={frontendMentorURL} target="_blank">
          Frontend Mentor
        </a>{' '}
        Coded by{' '}
        <a href={gitHubURL} target="_blank">
          Fırat Yedibela
        </a>
      </p>
    </footer>
  );
}

export default Footer;
