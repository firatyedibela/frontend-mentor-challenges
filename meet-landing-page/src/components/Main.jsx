import Number from './Number';
import womanVideocall from '../assets/desktop/image-woman-in-videocall.jpg';
import womenVideochat from '../assets/desktop/image-women-videochatting.jpg';
import menMeeting from '../assets/desktop/image-men-in-meeting.jpg';
import manTexting from '../assets/desktop/image-man-texting.jpg';

function Main() {
  return (
    <main className="main">
      <Number>01</Number>
      <section className="main__image-half">
        <img
          className="main__img"
          src={womanVideocall}
          alt="Woman on a video call at her desk"
        />
        <img
          className="main__img"
          src={womenVideochat}
          alt="Three women video chatting together"
        />
        <img
          className="main__img"
          src={menMeeting}
          alt="Two men in an online meeting"
        />
        <img
          className="main__img"
          src={manTexting}
          alt="Man smiling while texting on a sofa"
        />
      </section>
      <section className="main__text-half">
        <hgroup className="main__title-group">
          <p className="main__text-ribbon">Built for modern use</p>
          <h2 className="main__title">Smarter meetings, all in one place</h2>
        </hgroup>
        <p className="main__text-main">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </section>
    </main>
  );
}

export default Main;
