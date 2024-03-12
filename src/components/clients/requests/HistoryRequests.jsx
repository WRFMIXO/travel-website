import React, { useState } from "react";

const HistoryRequests = () => {
    const [allRequest] = useState([]);

    return (
        <div className="row">
            <div className="container">
                <div style={{ margin: "2rem", padding: "1rem"}}>
                    <div className="card bg-secondary text-light" style={{ margin: "0", padding: "5px"}}>
                        <h4>Historique</h4>

                        <ul>
                            {allRequest.length === 0 ? (
                                <li style={{ color: "orangered"}}> Vous n'avez encore aucune demande en cours...</li>
                            ) : (
                                allRequest.map((request, index) => {
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

export default HistoryRequests;