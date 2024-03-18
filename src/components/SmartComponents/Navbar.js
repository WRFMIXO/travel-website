import React, { useState } from 'react';
import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import "../../assets/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState(""); 
    const [userImage, setUserImage] = useState(""); 

    // Fonction pour rediriger vers la page de connexion
    function redirectToLogin() {
        window.location.assign("/travel-website/login/");
    }

    // Fonction pour rediriger vers la page d'inscription
    function redirectToSignUp() {
        window.location.assign("/travel-website/register/");
    }

    // Fonction pour se déconnecter
    function logout() {
        // Effectuer toutes les actions nécessaires pour se déconnecter (par exemple, vider le token JWT, etc.)
        setIsLoggedIn(false); // Mettre à jour l'état pour indiquer que l'utilisateur est déconnecté
    }

    const userDisplay = (
        <div className="d-flex align-items-center">
            <span className="me-2">{username}</span>
            <Avatar src="chemin_vers_avatar" alt="Avatar" width={30} height={30} roundedCircle />
            {/* Remplacez "chemin_vers_avatar" par le chemin vers l'avatar de l'utilisateur */}
        </div>
    );

    return (
        <AppBar position="fixed" className='mynavbar' style={{ background: "#333"}}>
            <Toolbar>
                <Container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <i className='bi bi-browser-edge' style={{color: "mediumslateblue"}}></i>
                    </Typography>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{color: "mediumslateblue"}}></span>
                    </button>

                    <ul className='text-center' style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/"><i className='bi bi-house'></i> Accueil </NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/processes-page/"> <i className='bi bi-bar-chart-steps'></i>Procédure</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/services-page/"> <i className='bi bi-person-workspace'></i>Nos Services</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/team-page/"> <i className='bi bi-microsoft-teams'></i>Equipe</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/contacts-page/"> <i className='bi bi-headphones'></i>Contacts</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/travel-website/faq-page/"> <i className='bi bi-patch-question'></i>F A Q</NavLink>
                        </li>
                    </ul>
                    
                </Container>

                <Container>
                    <ul className='navbar-nav ms-auto' style={{ float: "right"}}>
                        {/* Affiche le nom d'utilisateur et l'avatar si l'utilisateur est connecté */}
                        {isLoggedIn ? userDisplay : (
                            <>
                                <Button className='navbuttons' size='sm' style={{background: "darkslategray", width: "100px", margin: "3px"}} onClick={redirectToLogin}>Se connecter</Button>
                                <Button className='navbuttons' size='sm' style={{background: "darkslateblue", width: "100px", margin: "3px"}} onClick={redirectToSignUp}>S'inscrire</Button>
                            </>
                        )}
                    </ul>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
