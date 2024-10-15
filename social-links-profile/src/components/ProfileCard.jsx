import React from 'react';
import avatarJessica from '../assets/images/avatar-jessica.jpeg';
import Button from './Button';

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
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
          <Button>LinkedIn</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
        </section>
      </div>
    </div>
  );
}

export default ProfileCard;
