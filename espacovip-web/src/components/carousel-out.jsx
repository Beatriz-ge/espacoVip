import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/carousel.css';
import Churrasqueira1 from '../assets/area-externa/churrasqueira1.jpeg';
import Grama1 from '../assets/area-externa/grama1.jpeg';
import Grama2 from '../assets/area-externa/grama2.jpeg';
import Grama3 from '../assets/area-externa/grama3.jpeg';
import Grama4 from '../assets/area-externa/grama4.jpeg';
import Parquinho1 from '../assets/area-externa/parquinho1.jpeg';
import Parquinho2 from '../assets/area-externa/parquinho2.jpeg';
import Piscina3 from '../assets/piscina/piscina3.jpeg';
import Piscina5 from '../assets/piscina/piscina5.jpeg';

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
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="10"
              aria-label="Slide 11"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Grama4} className="d-block w-100" alt="Grama 5" />
              <div className="carousel-caption">
                <h5>Casa e piscina</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Churrasqueira1} className="d-block w-100" alt="Churrasqueira 1" />
              <div className="carousel-caption">
                <h5>Churrasqueira</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Grama3} className="d-block w-100" alt="Grama 3" />
              <div className="carousel-caption">
                <h5>Gramado</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Grama1} className="d-block w-100" alt="Grama 1" />
              <div className="carousel-caption">
                <h5>Piscina e casa</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Grama2} className="d-block w-100" alt="Grama 8" />
              <div className="carousel-caption">
                <h5>Casa</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Parquinho1} className="d-block w-100" alt="Parquinho 1" />
              <div className="carousel-caption">
                <h5>Parquinho</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Parquinho2} className="d-block w-100" alt="Parquinho 2" />
              <div className="carousel-caption">
                <h5>Parquinho</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Piscina3} className="d-block w-100" alt="Piscina 3" />
              <div className="carousel-caption">
                <h5>Piscina</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Piscina5} className="d-block w-100" alt="Piscina 5" />
              <div className="carousel-caption">
                <h5>Piscina</h5>
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
