import React, { useEffect, useState } from "react";
import "../../assets/styles/ClientSidebar.css";
import ClientSidebar from "../../components/clients/sidebar/ClientSidebar";
import { Spinner } from "react-bootstrap";
import TableauDeBord from "../../components/clients/dashboard/TableauDeBord";


const CustomerSpaceViewDashboard = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    })
    return (
        <div style={{ height: "100vh"}}>
            <div className="row mb-4" style={{ padding: "0", margin: "0"}}>
            <ClientSidebar />

                <div className="content">
                        {loading ? (
                            <div className="spinner-div">
                                <Spinner className="roadSpinner" />
                            </div>
                        ) : (
                            <TableauDeBord />
                        )}
                    </div>
            </div>
        </div>
    );
};

export default CustomerSpaceViewDashboard;