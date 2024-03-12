import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "../../views/home/Homepage";
import VisaDemands from "../../views/demands/VisaDemands";
import { Spinner } from "react-bootstrap";
import LoginView from "../../views/Login/LoginView";
import CustomerSpaceViewDashboard from "../../views/customerspace/CustomerSpace";
import CustomerSpaceViewProfile from "../../views/customerspace/CustomerSpaceProfile";
import CustomerSpaceViewRequests from "../../views/customerspace/CustomerSpaceRequests";
import NavigationErrorView from "../../views/error/AppErrorView";

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
                    <Route path="*" element={ <NavigationErrorView /> } />
                    <Route path="/travel-website" element={ <Homepage /> } />
                    <Route path="/travel-website/visa-demands/" element={ <VisaDemands /> } />
                    <Route path="/travel-website/login/" element={ <LoginView /> } />
                    <Route path="/travel-website/myspace/dashboard/" element={ <CustomerSpaceViewDashboard /> } />
                    <Route path="/travel-website/myspace/profile/" element={ <CustomerSpaceViewProfile /> } />
                    <Route path="/travel-website/myspace/requests/" element={ <CustomerSpaceViewRequests /> } />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default WebsiteRoutes;