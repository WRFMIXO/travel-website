import React from "react";
import PendingRequests from "./PendingRequests";
import HistoryRequests from "./HistoryRequests";

const RequestsComponent = () => {

    return (
        <div className="row">
            <br />
            <h2 style={{ color: "blue"}}>Mes Demandes de Visa</h2>
            <div className="row">
                <div className="col-md-6">
                    <PendingRequests />
                    <a className="btn btn-primary" href="/travel-website/"> <i className="bi bi-arrow-left"></i> Revenir à l'espace visiteur </a>
                </div>

                <div className="col-md-6">
                    <HistoryRequests  />
                    
                </div>

            </div>
        </div>
    );
};

export default RequestsComponent;