import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProcessesPage from "./pages/ProcessesPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import FAQ from "./pages/FaqPage";

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
                    <Route path="/travel-website" element={ <HomePage /> } />
                    <Route path="/travel-website/processes-page/" element={ <ProcessesPage /> } />
                    <Route path="/travel-website/services-page/" element={ <ServicesPage /> } />
                    <Route path="/travel-website/team-page/" element={ <TeamPage /> } />
                    <Route path="/travel-website/contacts-page/" element={ <ContactPage /> } />
                    <Route path="/travel-website/faq-page/" element={ <FAQ /> } />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default WebsiteRoutes;