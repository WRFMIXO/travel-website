import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../assets/styles/VisaInfoMinimal.css";

const VisaInformationsMinimal = () => {
  return (
    <Container fluid>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="text-center">
          <h2 style={{ fontSize: "45px", color: "crimson", textAlign: "left"}}>
            Obtenir Mon <span style={{color: "blue", fontSize: "75px"}}>Visa</span><br /> Ce qu'il faut
          </h2>
          <p style={{ fontFamily: "Segoe UI Light", fontSize: "20px" }}>
            Explorez les différents documents officiels qu'il vous faudra fournir selon votre destination souhaitée. Et lancez vous
          </p>
          <br />
          <br />
          <Row xs={1} md={1} className="justify-content-center">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Quelques documents requis pour une demande de visa :</Card.Title>
                  <ul>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Passeport valide<a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Formulaire de demande de visa dûment rempli <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Photo d'identité récente <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Preuve de moyens financiers suffisants pour la durée du séjour <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Lettre d'invitation (si nécessaire) <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Preuve de réservation d'hébergement <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Preuve de billet d'avion aller-retour <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Attestation d'assurance voyage <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                    <li className="elementMiniVisaInfo">
                      <Card>
                        <Card.Body>
                          Autres documents spécifiques selon le pays de destination <a href="/about_passport/"><i style={{ marginLeft: "1rem"}} className="bi bi-arrow-right"></i></a>
                        </Card.Body>
                      </Card>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default VisaInformationsMinimal;
