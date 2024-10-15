import React from 'react';
import avatarJessica from '../assets/images/avatar-jessica.jpeg';
import Link from './Link';

function ProfileCard() {
  return (
    <div className="container card-container">
      <div className="card">
        <section className="img-container">
          <img src={avatarJessica} alt="Profile picture" />
        </section>
        <section className="info">
          <p className="name">Jessica Randall</p>
          <p className="location">London, United Kingdom</p>
        </section>
        <section className="bio">
          <p>"Front-end developer and avid reader."</p>
        </section>
        <section className="links">
          <Link url="https://github.com/firatyedibela">GitHub</Link>
          <Link url="https://www.frontendmentor.io/profile/firatyedibela">
            Frontend Mentor
          </Link>
          <Link url="https://www.linkedin.com">LinkedIn</Link>
          <Link url="https://www.x.com">Twitter</Link>
          <Link url="https://www.instagram.com">Instagram</Link>
        </section>
      </div>
    </div>
  );
}

export default ProfileCard;
