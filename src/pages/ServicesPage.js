import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";

import ServicePresentationSection from "../components/SmartComponents/EnterpriseServices";

import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";

const ServicesPage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Services"/>
            <ServicePresentationSection />
            <NewsletterSection />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default ServicesPage;