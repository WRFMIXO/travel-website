import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "../../views/home/Homepage";
import VisaDemands from "../../views/demands/VisaDemands";
import { Spinner } from "react-bootstrap";

const WebsiteRoutes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    })
    return (
        <BrowserRouter>
            {loading ? (
                <div className="appLoader">
                    <Spinner style={{ fontSize: "30px", padding: "7rem", borderRadius: "100%", color: "mediumpurple" }} />
                </div>
            ) : (
                <Routes>
                    <Route path="/travel-website" element={ <Homepage /> } />
                    <Route path="/travel-website/visa-demands/" element={ <VisaDemands /> } />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default WebsiteRoutes;