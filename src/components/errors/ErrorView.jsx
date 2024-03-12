import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CommonRoadsErrorsComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        function redirectToDashboard() {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                window.location.assign("/travel-website/");
            }, 3000);
        }

        redirectToDashboard();
    }, [navigate]);

    return (
        <div className="row" id="errorContainer">
            <div className="col justify-content-center align-items-center text-center" id="errorColumn">
                <p className="mb-3">
                    <span style={{ color: "gray", fontWeight: "bold", fontFamily: "Segoe UI light", fontSize: "100px", letterSpacing: "1rem" }} className="errorspan">
                        404
                    </span>
                </p>

                <br />
                <br />
                <br />

                <p className="mb-3">
                    {isLoading ? 
                    "Redirection en cours ..." : "Vous serez redirigé dans quelques instants"
                    }
                </p>
            </div>
        </div>
    );
};

export default CommonRoadsErrorsComponent;