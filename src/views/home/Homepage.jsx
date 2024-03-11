import React from "react";
import SocialBar from "../../components/bars/SocialBar";
import WebsiteNavbar from "../../components/bars/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import AgencyPresentationSection from "../../components/agencyPresentation/AgencyPresentationSection";
import ServicePresentationSection from "../../components/services/ServicesPresentationSection";
import DestinationsCoveredSection from "../../components/destinations/DestinationPresentationSection";
import NewsletterSection from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import VisaInformationsMinimal from "../../components/visasInformations/VisaInfoMinimal";
import PartnersSection from "../../components/partners/Partners";
const Homepage = () => {

    return (
        <div className="container-fluid" style={{ width: "100%"}}>
            <div id="capture">
            <div className="row">
                <SocialBar />
            </div>

            <div className="row">
                <WebsiteNavbar />
            </div>

            <div className="row mb-4">
                <HeroSection />
            </div>

            <div className="row mb-4" style={{ margin: "8rem"}}>
                <AgencyPresentationSection />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <ServicePresentationSection />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <DestinationsCoveredSection />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <VisaInformationsMinimal />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <PartnersSection />
            </div>


            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <NewsletterSection />
            </div>

            <div className="row mb-4"  style={{ margin: "8rem"}}>
                <Footer />
            </div>
            </div>
        </div>
    );
};

export default Homepage;