import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/carousel.css';
import Cozinha1 from '../assets/area-interna/cozinha1.jpeg';
import Cozinha2 from '../assets/area-interna/cozinha2.jpeg';
import Cozinha3 from '../assets/area-interna/cozinha3.jpeg';
import Cozinha4 from '../assets/area-interna/cozinha4.jpeg';
import Cozinha5 from '../assets/area-interna/cozinha5.jpeg';
import Quarto1 from '../assets/area-interna/quarto1.jpeg';
import Quarto2 from '../assets/area-interna/quarto2.jpeg';
import Quarto3 from '../assets/area-interna/quarto3.jpeg';
import Sala1 from '../assets/area-interna/sala1.jpeg';
import Sala2 from '../assets/area-interna/sala2.jpeg';
import Sala3 from '../assets/area-interna/sala3.jpeg';
import Sala4 from '../assets/area-interna/sala4.jpeg';
import Sala5 from '../assets/area-interna/sala5.jpeg';

function Carousel() {
  return (
    <div className='d-flex justify-content-around'>
      <div className='carousel-gap'>
        <div id="carouselExampleDark1" className="carousel carousel-dark slide carousel-container">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 0"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="2"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="4"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="5"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="6"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="7"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="8"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="9"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="10"
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="11"
              aria-label="Slide 11"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="12"
              aria-label="Slide 12"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="13"
              aria-label="Slide 13"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="14"
              aria-label="Slide 14"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="15"
              aria-label="Slide 15"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="16"
              aria-label="Slide 16"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="17"
              aria-label="Slide 17"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark1"
              data-bs-slide-to="18"
              aria-label="Slide 18"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Quarto1} className="d-block w-100" alt="Quarto 1" />
              <div className="carousel-caption">
                <h5>Quarto 1 (com suíte)</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Quarto2} className="d-block w-100" alt="Quarto 2" />
              <div className="carousel-caption">
                <h5>Quarto 2</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Quarto3} className="d-block w-100" alt="Quarto 3" />
              <div className="carousel-caption">
                <h5>Quarto 3</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cozinha1} className="d-block w-100" alt="Cozinha 4" />
              <div className="carousel-caption">
                <h5>Armários da cozinha</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cozinha2} className="d-block w-100" alt="Cozinha 6" />
              <div className="carousel-caption">
                <h5>Cozinha</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cozinha3} className="d-block w-100" alt="Cozinha 7" />
              <div className="carousel-caption">
                <h5>Sala de jantar</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cozinha4} className="d-block w-100" alt="Cozinha 9" />
              <div className="carousel-caption">
                <h5>Sala de jantar</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Cozinha5} className="d-block w-100" alt="Cozinha 1" />
              <div className="carousel-caption">
                <h5>Cozinha</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Sala1} className="d-block w-100" alt="Sala 1" />
              <div className="carousel-caption">
                <h5>Sala de estar</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Sala2} className="d-block w-100" alt="Sala 3" />
              <div className="carousel-caption">
                <h5>Sala de TV</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Sala3} className="d-block w-100" alt="Sala 5" />
              <div className="carousel-caption">
                <h5>Sala de TV</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Sala4} className="d-block w-100" alt="Sala 6" />
              <div className="carousel-caption">
                <h5>Sala de estar</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Sala5} className="d-block w-100" alt="Sala 7" />
              <div className="carousel-caption">
                <h5>Sala de TV</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark1"
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
