import React, { useEffect, useState } from "react";
import "./profile.css";
import  user from '../../../assets/images/user.jpg';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
    const [userInformations, setUserInformation] = useState({}); // Initialiser avec un objet vide

useEffect(() => {
    const fetchUserInfos = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/users/list/details/${localStorage.getItem("uid")}`);
            if (response.status >= 200 && response.status <= 300) {
                const data = response.data;
                setUserInformation(data); // Pas besoin de JSON.parse()
            }
        } catch (error) {
            switch (error?.response.status) {
                case 500:
                    toast.error(error?.response.data.message);
                    break;
                case 401:
                    toast.error(error?.response.data.message);
                    break;
                case 403:
                    toast.error(error?.response.data.message);
                    break;
                case 404:
                    toast.error("Nous ne parvenons pas à joindre la ressource demandée");
                    break;
                default:
                    break;
            }
        }
    };

    fetchUserInfos();
}, []);
    return (
        <div className="container">
            <ToastContainer />
            <div className="row">
                        <div className="col-md-12">
                    <p className="text-end fw-bold">
                        <br />
                        <button className="btn btn-outline-primary">Modifier le profil</button>
                    </p>    
                    
                    <div className="row mb-4">
                
                        <div className="col-md-4">

                            <img src={user} alt="profilePic" className="img-fluid rounded mb-4"/>

                            <div className="details-section bg-light">
                                <h4 className="mb-4 fw-bold">Informations Personnelles</h4>
                            <div className="row mb-3">

                            <div className="col-md-4 details-label">Noms :</div>
                            <div className="col-md-8">{userInformations.first_name}</div>

                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Prénoms :</div>
                            <div className="col-md-8">{userInformations.last_name}</div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Age :</div>
                            <div className="col-md-8">{userInformations.old}</div>
                        </div>
    
                    </div>


                    <div className="details-section bg-light">

                        <h4 className="mb-4 fw-bold">Informations d'Identité</h4>

                <div className="row mb-3">
                    <div className="col-md-4 details-label">Numéro CNI :</div>
                    <div className="col-md-8">{userInformations.id_number}</div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4 details-label">Date Naissance :</div>
                    <div className="col-md-8">{userInformations.birth_date}</div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4 details-label">Sexe :</div>
                    <div className="col-md-8">{userInformations.gender}</div>
                </div>

            </div>


            </div>
                <div className="col-md-8">

                    <div className="details-section bg-light">

                        <h4 className="mb-4 fw-bold">Informations de Contact</h4>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Téléphone :</div>
                            <div className="col-md-8">{userInformations.contact}</div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Email :</div>
                            <div className="col-md-8">{userInformations.email}</div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Adresse :</div>
                            <div className="col-md-8">{userInformations.location}</div>
                        </div>

                    </div>

                    <div className="details-section bg-light">

                        <h4 className="mb-4 fw-bold">Informations de surété</h4>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">date d'inscription:</div>
                            <div className="col-md-8">{userInformations.date_creation}</div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 details-label">Nationalité:</div>
                            <div className="col-md-8">{userInformations.nationalite}</div>
                        </div>

                    </div>


                    <div className="text-center mt-4 ">
                        <a href="/travel-website/" className="btn btn-secondary w-100">Retour</a>
                    </div>

                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Profile;
