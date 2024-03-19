import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";

import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";
import Team from "../components/SmartComponents/Team";

const TeamPage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Equipe" toReach="#teamMembers" />
            <Team />
            <NewsletterSection />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default TeamPage;