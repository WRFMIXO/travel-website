import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProcessesPage from "./pages/ProcessesPage";
import FAQ from "./pages/FaqPage";

const ApplicationRoutes = () =>  {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/travel-website/" element={ <HomePage /> } />
                <Route path="/travel-website/services/" element={ <ServicesPage /> } />
                <Route path="/travel-website/team/" element={ <TeamPage /> } />
                <Route path="/travel-website/contacts/" element={ <ContactPage /> } />
                <Route path="/travel-website/processes/" element={ <ProcessesPage /> } />
                <Route path="/travel-website/faq/" element={ <FAQ /> } />

            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;