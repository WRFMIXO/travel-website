import React from "react";
import image1 from "../../../assets/images/eiffel-tower.jpg";
import { Button } from "react-bootstrap";
import DescriptionCard from "../cards/DescriptionCards";

const TableauDeBord = () => {

    return(
        <div className="container-fluid">
            <br />
            <div className="row mb-3" style={{ margin: "2rem"}}>
                <h5> Tableau de bord</h5>
                <div style={{ background: "white", padding: "10px", margin: "10px"}}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={image1} alt="paris" height={200} width={500}/>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <h5 style={{ position: "relative", marginTop: "2rem"}}> Evènements Réçents</h5>
                                </div>
                                <div className="col">
                                    <Button size="sm" style={{float: "right", position: "relative", marginTop: "2rem", marginRight: "-2rem"}}> Consulter </Button>
                                </div>
                            </div>
                            
                            <br />
                            <div className="row">
                                <ul>
                                    <li style={{ marginBottom: "10px"}}><i className="bi bi-calendar" style={{ marginRight: "15px"}}></i> 08 / 03/ 2024</li>
                                    <li><i className="bi bi-geo-alt" style={{ marginRight: "15px"}}></i> Paris Sorbone, 24 Rue des Oliviers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div style={{ background: "white", padding: "10px", margin: "10px"}}>
                    <div className="row">
                        <div className="col">
                            <h5 style={{ margin: "2rem"}}> Activités </h5>
                        </div>

                        <div className="col">
                            <Button size="sm" style={{float: "right", position: "relative", margin: "2rem"}}> Tous les détails </Button>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <ul style={{ display: "flex", justifyContent: "center"}}>
                            <li>
                                <DescriptionCard
                                    cardtitle="Demandes de visas"
                                    cardcontent="0"
                                    cardstyles={{
                                        fontSize: "15px",
                                        justifyContent: "center",
                                        width: "15rem",
                                        margin: "10px",
                                        borderLeft: "5px solid blue",
                                    }}
                                />
                            </li>

                            <li>
                                <DescriptionCard
                                    cardtitle="Documents Téléchargés"
                                    cardcontent="0"
                                    cardstyles={{
                                        fontSize: "15px",
                                        justifyContent: "center",
                                        width: "15rem",
                                        margin: "10px",
                                        borderLeft: "5px solid green",
                                    }}
                                />
                            </li>

                            <li>
                                <DescriptionCard
                                    cardtitle="Etapes réussies"
                                    cardcontent="0"
                                    cardstyles={{
                                        fontSize: "15px",
                                        justifyContent: "center",
                                        width: "15rem",
                                        margin: "10px",
                                        borderLeft: "5px solid red",
                                    }}
                                />
                            </li>

                            <li>
                                <DescriptionCard 
                                    cardtitle="Toutes mes demandes"
                                    cardcontent="0"
                                    cardstyles={{
                                        fontSize: "15px",
                                        justifyContent: "center",
                                        width: "15rem",
                                        margin: "10px",
                                        borderLeft: "5px solid purple",
                                    }}
                                />
                            </li>

                            <li>
                                <DescriptionCard
                                    cardtitle="Demandes Rejétées"
                                    cardcontent="0"
                                    cardstyles={{
                                        fontSize: "15px",
                                        justifyContent: "center",
                                        width: "15rem",
                                        margin: "10px",
                                        borderLeft: "5px solid yellowgreen",
                                    }}
                                />
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <a className="btn btn-primary" href="/travel-website/"> <i className="bi bi-arrow-left"></i> Revenir à l'espace visiteur </a>
        </div>
    );
};

export default TableauDeBord;