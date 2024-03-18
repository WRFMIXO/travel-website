import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import AgencyPresentationSection from "../components/SmartComponents/AboutEnterprise";
import ServicePresentationSection from "../components/SmartComponents/EnterpriseServices";
import DestinationsCoveredSection from "../components/SmartComponents/Destinations";
import Partners from "../components/SmartComponents/Partners";
import Numbers from "../components/SmartComponents/Numbers";
import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";

const HomePage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <AgencyPresentationSection />
            <ServicePresentationSection />
            <DestinationsCoveredSection />
            <Partners />
            <Numbers />
            <NewsletterSection />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default HomePage;