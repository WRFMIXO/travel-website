import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import BackToTop from "../components/DumbComponents/BackToTop";
import SignUpForm from "../components/SmartComponents/SignUpForm";

const SignUpPage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Inscription" toReach="#signUpForm" />
            <SignUpForm />
            <br />
            <br />
            <br />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default SignUpPage;