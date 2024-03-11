// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container" >
        <div className="row">
          <div className="col-md-4">
            <h5>A propos de nous</h5>
            <p>Informations sur l'entreprise</p>
            <div>
                <i className='bi bi-browser-edge'></i>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Nos Services</h5>
            <ul>
              <li>Demande de Visa</li>
              <li>Accompagnement</li>
              <li>Installation</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contactez-nous</h5>
            <p>Adresse de l'entreprise<br />Numéro de téléphone<br />Adresse e-mail</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <p>&copy; 2024 Nom de l'entreprise. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
