import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

const ApplicationRoutes = () =>  {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/travel-website/" element={ <HomePage /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;