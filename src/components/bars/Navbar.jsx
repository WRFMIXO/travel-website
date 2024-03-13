import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

function WebsiteNavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour vérifier si l'utilisateur est connecté
    const [username, setUsername] = useState(''); // État pour stocker le nom d'utilisateur
    const navigate = useNavigate();

    // Fonction pour rediriger vers la page de connexion
    function redirectToLogin() {
        navigate("/travel-website/login/");
    }

    // Fonction pour rediriger vers la page d'inscription
    function redirectToSignUp() {
        navigate("/travel-website/register/");
    }

    // Fonction pour se déconnecter
    function logout() {
        // Effectuer toutes les actions nécessaires pour se déconnecter (par exemple, vider le token JWT, etc.)
        setIsLoggedIn(false); // Mettre à jour l'état pour indiquer que l'utilisateur est déconnecté
    }

    // Affiche le nom d'utilisateur et un avatar si l'utilisateur est connecté
    const userDisplay = (
        <div className="d-flex align-items-center">
            <span className="me-2">{username}</span>
            <Image src="chemin_vers_avatar" alt="Avatar" width={30} height={30} roundedCircle />
            {/* Remplacez "chemin_vers_avatar" par le chemin vers l'avatar de l'utilisateur */}
        </div>
    );

    return (
        <nav className="navbar navbar-expand-lg" id='website-navbar'>
            <div className="container">
                <a className="navbar-brand" href="/travel-website/">
                    <i className='bi bi-browser-edge' style={{ color: "mediumpurple"}}></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/travel-website/">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/travel-website/visa-demands/">Demandes de Visas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/travel-website/services/">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/travel-website/contacts/">Contact</NavLink>
                        </li>
                        {/* Ajoute d'autres liens vers les sections de ton site au besoin */}
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        {/* Affiche le nom d'utilisateur et l'avatar si l'utilisateur est connecté */}
                        {isLoggedIn ? userDisplay : (
                            <>
                                <Button variant='primary' size='sm' style={{ margin: "3px"}} onClick={redirectToLogin}>Se connecter</Button>
                                <Button variant='success' size='sm' style={{ margin: "3px"}} onClick={redirectToSignUp}>S'inscrire</Button>
                            </>
                        )}
                    </ul>
                    
                </div>
                {/* Affiche le bouton de déconnexion si l'utilisateur est connecté */}
                {isLoggedIn && <Button variant='danger' size='sm' style={{ marginLeft: "120px"}} onClick={logout}>Déconnexion</Button>}
            </div>
        </nav>
    );
}

export default WebsiteNavbar;
