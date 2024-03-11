// AgencyPresentationSection.js

import React from 'react';
import image1 from "../../assets/images/buffer-1143485_1920.jpg";

function AgencyPresentationSection() {
  return (
    <section className="agency-presentation-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 style={{ fontSize: "45px", textAlign: "justify"}}><span style={{color: "blue"}}> Global Travel</span><br /><span style={{ color: "orange"}}>Qui sommes-nous <i className='bi bi-question-lg'></i></span></h2>
            <br />
            <br />
            <p style={{fontFamily: "Segoe UI Light", fontSize: "17px"}}>
            En tant que spécialistes de l'assistance aux voyages, nous nous engageons à rendre votre expérience de voyage aussi fluide et sans tracas que possible. De la planification initiale de votre voyage à l'arrivée à votre destination, nous sommes là pour vous fournir les informations, les conseils et les services dont vous avez besoin pour vous assurer une entrée en douceur dans le pays de votre choix.
            </p>
            <p style={{fontFamily: "Segoe UI Light", fontSize: "17px"}}>
            Notre gamme de services comprend une assistance pour l'obtention de visas et de permis de séjour, des conseils sur les exigences en matière de santé et de sécurité, des recommandations sur les transports et l'hébergement, ainsi que des services de traduction et d'interprétation pour vous aider à communiquer efficacement dans un environnement étranger.
            </p>
            <p style={{fontFamily: "Segoe UI Light", fontSize: "17px"}}>
            Nous comprenons que chaque voyageur a des besoins uniques, c'est pourquoi nous travaillons en étroite collaboration avec vous pour élaborer un plan sur mesure qui répond à vos besoins spécifiques et à vos préférences personnelles. Notre objectif est de vous offrir une tranquillité d'esprit totale afin que vous puissiez vous concentrer sur l'essentiel : profiter pleinement de votre expérience de voyage.
            </p>
          </div>
          <div className="col-md-7">
            <br />
            <br />
            <img src={image1} alt="agence" className="img-fluid" style={{ marginLeft: "5rem", marginTop: "5rem"}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgencyPresentationSection;
