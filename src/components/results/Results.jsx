import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../assets/styles/Results.css";

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
    <div className=" py-5">
      <Container>
        <h2 className=" mb-4" style={{ fontSize: "45px", textAlign: "right", color: "blue",}}>Résultats et Témoignages</h2>
        <Row className="justify-content-center">
          {/* Success Rates */}
          <Col md={6} className="mb-4">
            <Row>
              {successRates.map((result, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Text>{result.country}: {result.successRate}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          {/* Testimonials */}
          <Col md={12} className="mb-4">
            <Row>
              {testimonials.map((testimonial, index) => (
                <Col key={index} md={6} className="mb-4">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <Card className="h-100">
                          <Card.Body>
                            <Card.Title>{testimonial.name}</Card.Title>
                            <Card.Text>"{testimonial.quote}"</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Card className="h-100">
                          <Card.Body>
                            <Card.Text>Votre témoignage</Card.Text>
                            <Form>
                              <Form.Group >
                                <Form.Label>Votre nom</Form.Label>
                                <Form.Control type="text" placeholder="Entrez votre nom" />
                              </Form.Group>
                              <Form.Group >
                                <Form.Label>Votre témoignage</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Entrez votre témoignage" />
                              </Form.Group>
                              <br />
                              <Button variant="primary" type="submit">Soumettre</Button>
                            </Form>
                          </Card.Body>
                        </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ResultsTestimonialsSection;
