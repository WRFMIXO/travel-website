import React from "react";
import SocialBar from "../../components/bars/SocialBar";
import WebsiteNavbar from "../../components/bars/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import ServicePresentationSection from "../../components/services/ServicesPresentationSection";
import NewsletterSection from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";


const ServicesView = () => {

    return(
        <div className="container-fluid" style={{ width: "100%"}}>
            <div className="row">
                <SocialBar />
            </div>

            <div className="row">
                <WebsiteNavbar />
            </div>

            <div className="row mb-4">
                <HeroSection />
            </div>

            <div className="row mb-4">
                <ServicePresentationSection />
            </div>
            
            <div className="row mb-4">
                <NewsletterSection />
            </div>

            <Footer />
        </div>    
    );
};

export default ServicesView;