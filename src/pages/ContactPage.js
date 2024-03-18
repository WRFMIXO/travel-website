import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import NewsletterSection from "../components/SmartComponents/NewsLetter";
import BackToTop from "../components/DumbComponents/BackToTop";

const ContactPage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Contact"/>
            <NewsletterSection />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default ContactPage;