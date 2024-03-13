import React from "react";
import SocialBar from "../../components/bars/SocialBar";
import WebsiteNavbar from "../../components/bars/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/forms/ContactForm";


const ContactView = () => {

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
                <ContactForm />
            </div>

            <Footer />
        </div>    
    );
};

export default ContactView;