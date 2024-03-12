import React, { useState } from "react";
import { Button } from "react-bootstrap";

const PendingRequests = () => {
    const [pendingRequests] = useState([]);

    return (
        <div className="row">
            
            <div className="container">
                <div style={{ margin: "2rem", padding: "1rem"}}>
                    <div className="row">
                        <h4>Suivi des demandes <Button variant="outline-primary"><i className="bi bi-plus"></i></Button></h4>

                        <ul>
                            {pendingRequests.length === 0 ? (
                                <li> Vous n'avez encore aucune demande en cours...</li>
                            ) : (
                                pendingRequests.map((request, index) => {
                                    return (
                                        <li key={index}>{request.title}</li>
                                    )
                                })
                            )}
                        </ul>
                    </div>               
                </div>
            </div>
        </div>
    );
};

export default PendingRequests;