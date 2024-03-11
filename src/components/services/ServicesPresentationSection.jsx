// ServicePresentationSection.js

import React from 'react';
import "../../assets/styles/ServicesPresentationSection.css";
import { Link } from 'react-router-dom';

function ServicePresentationSection() {
  return (
    <section className="service-presentation-section">
      <div className="curve-background">
        <div className="container">
          <br />
          <br />
          <h2 className="text-center" style={{ fontSize: "45px", textAlign: "justify", color: "seagreen"}}>Nous agissons dans ...</h2>
          <br />
          <br />
          <div className="row justify-content-center" style={{ marginTop: "3rem"}}>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Des Demande de Visa <i className='bi bi-passport-fill' style={{ color: "blue"}}></i></h5>
                  <br />
                  <br />
                  <p className="card-text">Notre service de demande de visa vous offre une assistance complète dans le processus parfois complexe d'obtention de visas pour les destinations internationales. Que vous voyagiez pour les affaires, le tourisme ou d'autres raisons, notre équipe expérimentée vous guide à travers chaque étape du processus, depuis la collecte des documents nécessaires jusqu'à la soumission de votre demande aux autorités compétentes. Avec notre expertise et notre engagement envers la satisfaction du client, nous vous assurons une expérience sans tracas et une réponse rapide à votre demande de visa..</p>
                  <Link to="/service1" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> Voir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">L' Accompagnement <i className='bi bi-alexa' style={{ color: "blue"}}></i> </h5>
                  <br />
                  <br />
                  <p className="card-text">Notre service d'accompagnement vous offre une tranquillité d'esprit totale tout au long de votre voyage à l'étranger. Que vous soyez un voyageur individuel, une famille ou un groupe, notre équipe dévouée est là pour vous soutenir à chaque étape de votre parcours, en veillant à ce que vous vous sentiez en sécurité, à l'aise et bien informé à tout moment. De l'accueil à l'aéroport à l'organisation de visites guidées, de la résolution des problèmes imprévus à la fourniture d'informations locales précieuses, nous sommes là pour vous offrir une expérience de voyage inoubliable.</p>
                  <Link to="/service1" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> Voir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">L' Installation <i className='bi bi-bus-front' style={{ color: "blue"}}></i></h5>
                  <br />
                  <br />
                  <p className="card-text">Notre service d'installation vous offre une transition en douceur vers votre nouveau lieu de résidence à l'étranger. Que vous déménagiez pour le travail, les études ou d'autres raisons, notre équipe expérimentée vous aide à résoudre les défis logistiques et administratifs associés à un déménagement à l'étranger. De la recherche de logements et de l'organisation du transport à l'inscription aux services publics locaux et à l'orientation culturelle, nous sommes là pour vous aider à vous installer rapidement et confortablement dans votre nouvel environnement.</p>
                  <Link to="/service1" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> Voir plus
                  </Link>
                </div>
              </div>
            </div>
            {/* Ajoute d'autres cartes pour les services au besoin */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePresentationSection;
