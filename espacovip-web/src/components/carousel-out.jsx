import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/carousel.css';
import Piscina6 from '../assets/piscina/piscina6.jpeg';

function Carousel() {
  return (
    <div className='d-flex justify-content-around'>
      <div className='carousel-gap'>
        <div id="carouselExampleDark2" className="carousel carousel-dark slide carousel-container">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Piscina6} className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img  className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img  className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark2"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark2"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
