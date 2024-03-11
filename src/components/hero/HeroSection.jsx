// HeroSection.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/images/meersburg-3530443_1920.jpg";
import image2 from "../../assets/images/office-730681_1920.jpg";
import "../../assets/styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row">
          {/* Colonne pour le carrousel */}
          <div className="col-md-12">
            <Carousel className="w-100">
              <Carousel.Item>
                <div className="carousel-item-content">
                  <img
                    id='img'
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <div className="overlay"></div>
                  <div className="carousel-caption">
                    <h3>Titre de l'image 1</h3>
                    <p>Description de l'image 1</p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-content">
                  <img
                    id='img'
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                  />
                  <div className="overlay"></div>
                  <div className="carousel-caption">
                    <h3>Titre de l'image 2</h3>
                    <p>Description de l'image 2</p>
                  </div>
                </div>
              </Carousel.Item>
              {/* Ajoute d'autres éléments au besoin */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
