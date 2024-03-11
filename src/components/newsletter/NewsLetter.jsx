// NewsletterSection.js

import React from 'react';

function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Abonnez-vous à notre Newsletter</h2>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Entrez votre adresse e-mail" />
              </div>
              <button type="submit" className="btn btn-primary w-100">S'abonner</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
