import React from "react";
import { Card, CardBody } from "react-bootstrap";

const DescriptionCard = ({ cardtitle, cardcontent, cardstyles, cardicon }) => {

    return (
        <Card style={{...cardstyles, height: "auto"}} className="adminDescriptionCards">
            <div style={{ marginInline: "1rem"}}>
                <h4 style={{ fontFamily: "Segoe UI Light", fontSize: "20px", marginTop: "10px" }} className="card-title"> { cardtitle } {cardicon}</h4>
            </div>
            <CardBody> 
                <div className="adminDescriptionCardsBody">
                    <div className="card-text" style={{ fontSize: "35px"}}>
                        {cardcontent}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default DescriptionCard;