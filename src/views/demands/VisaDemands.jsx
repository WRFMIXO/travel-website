import React from "react";
import SocialBar from "../../components/bars/SocialBar";
import WebsiteNavbar from "../../components/bars/Navbar";
import NewsletterSection from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import VisaForm from "../../components/forms/VisaEtudiantForm";
import HeroSection from "../../components/hero/HeroSection";


const VisaDemands = () => {

    return (
        <div className="container-fluid" style={{ width: "100%"}}>
            <div className="row">
                <SocialBar />
            </div>

            <div className="row">
                <WebsiteNavbar />
            </div>

            <div className="row mb-4">
                <HeroSection
                 />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <VisaForm />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <NewsletterSection />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <Footer />
            </div>
        </div>
    )
};

export default VisaDemands;