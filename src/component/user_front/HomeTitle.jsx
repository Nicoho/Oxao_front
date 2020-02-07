import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import './HomeTitle.scss';

function HomeTitle() {
  return (
    <div className="HomeTitle">
      <h1 className="title">#BALANCE TA FRICHE</h1>
      <div className="goFriches">
        <Link to="/#balance">
          <button type="button" className="go">Je balance ma friche</button>
        </Link>
      </div>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div className="container-HomeTitle">
          <img src="images/Capture.jpg" alt="imgBefore" />
          <p className="legend">Avant réhabilitation</p>
        </div>
        <div>
          <img src="images/Capture1.jpg" alt="imgAfter" />
          <p className="legend">Après réhabilitation</p>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeTitle;
