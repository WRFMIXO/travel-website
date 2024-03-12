import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const ResultsTestimonialsSection = () => {
  // Exemple de taux de réussite des visas par pays
  const successRates = [
    { country: "États-Unis", successRate: "97%" },
    { country: "Canada", successRate: "94%" },
    { country: "Australie", successRate: "92%" }
  ];

  // Exemple de témoignages
  const testimonials = [
    { name: "Marie D.", quote: "Grâce à leur expertise, j'ai pu obtenir mon visa rapidement et facilement. Je recommande vivement leurs services!" },
    { name: "Thomas B.", quote: "Leur équipe dévouée m'a accompagné à chaque étape de mon voyage. Un service exceptionnel!" }
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Résultats et Témoignages</h2>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <h4>Taux de réussite des visas par pays</h4>
                {successRates.map((result, index) => (
                  <p key={index}>{result.country}: {result.successRate}</p>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <h4>Témoignages</h4>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="mb-3">
                    <h5>{testimonial.name}</h5>
                    <p>"{testimonial.quote}"</p>
                  </div>
                ))}
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Votre nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrez votre nom" />
                  </Form.Group>
                  <Form.Group controlId="formTestimonial">
                    <Form.Label>Votre témoignage</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Entrez votre témoignage" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Soumettre</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResultsTestimonialsSection;
