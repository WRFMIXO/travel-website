import React from "react";
import Navbar from "../components/SmartComponents/Navbar";
import HeroSection from "../components/SmartComponents/HeroSection";
import Footer from "../components/SmartComponents/Footer";
import BackToTop from "../components/DumbComponents/BackToTop";
import LoginForm from "../components/SmartComponents/LoginForm";

const LoginPage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection pageTitle="Connexion" toReach="#loginForm" />
            <LoginForm />
            <br />
            <br />
            <br />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default LoginPage;