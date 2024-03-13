import React from "react";
import "../../../assets/styles/ClientSidebar.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ClientSidebar = () => {

    const navigate = useNavigate();

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Vérifier si le cookie correspond au nom recherché
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    let csrftoken = getCookie('csrftoken');
    
    const applicationLogout = async() => {
        try {
            const response = await axios.get("http://16.171.40.180:8000/users/logout/", {
                headers : {
                    'X-CSRFToken': csrftoken,
                }
            });
            if(response.status >= 200 && response.status <= 300) {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate("/travel-website/");
                }, 1000);
            }
        } catch (error) {
            switch (error?.response.status) {
                case 500:
                    toast.error("Nous avons commis une faute!", {position: "top-center", pauseOnHover: false})
                    break;
                case 403:
                    toast.error("You can't log out now " + error?.response.data.detail, {position: "top-center", pauseOnHover: false})
                    break;
                case 404:
                    toast.error("La ressource n'est pas trouvée!", {position: "top-center", pauseOnHover: false})
                    break;
                case 401:
                    toast.error(error?.response.data.message, {position: "top-center", pauseOnHover: false})
                    break;

                    default:
                        break;
            }
        }
    }

    return (
        <div class="container">
            <div class="sidebar">
                <h1>Mon Espace Personnel</h1>
                <hr />
                <br />
                <br />
                <br />
                <ul>
                    <li className="sidebarsLinks"><a href="/travel-website/myspace/dashboard/"><i className="bi bi-house-door-fill" style={{ marginRight: "15px"}}></i>Tableau de bord</a></li>
                    <br />
                    <li className="sidebarsLinks"><a href="/travel-website/myspace/profile/"><i className="bi bi-person-bounding-box" style={{ marginRight: "15px"}}></i>Mon Profil</a></li>
                    <br />
                    <li className="sidebarsLinks"><a href="/travel-website/myspace/requests/"><i className="bi bi-list-task" style={{ marginRight: "15px"}}></i>Mes Demandes</a></li>
                    <br />
                    <li className="sidebarsLinks"><a href="/travel-website/myspace/settings/"><i className="bi bi-sliders" style={{ marginRight: "15px"}}></i>Paramètres</a></li>
                    <br />
                    <li className="sidebarsLinks"><a href="/travel-website/myspace/wallet/"><i className="bi bi-wallet" style={{ marginRight: "15px"}}></i>Portefeuille</a></li>
                    <br />
                    <li className="sidebarsLinks"><a onClick={applicationLogout}><i className="bi bi-box-arrow-left" style={{ marginRight: "15px"}}></i>Déconnexion</a></li>
                </ul>
            </div>
        </div>

    );
};

export default ClientSidebar;