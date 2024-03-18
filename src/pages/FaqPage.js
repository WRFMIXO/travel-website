import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";

const FAQ = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Foire aux questions"/>
            <NewsletterSection />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default FAQ;