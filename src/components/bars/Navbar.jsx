// Navbar.js

import React from 'react';
import "../../assets/styles/Navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function WebsiteNavbar() {
    const navigate = useNavigate();

    function redirectToLogin() {
        navigate("/travel-website/login/");
    }

    function redirectToSignUp() {
        navigate("/travel-website/register/");
    }
    return (
            <nav className="navbar navbar-expand-lg" id='website-navbar' >
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
                                <NavLink className="nav-link" activeClassName="active" to="/travel-website/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/travel-website/contact">Contact</NavLink>
                            </li>
                            {/* Ajoute d'autres liens vers les sections de ton site au besoin */}
                        </ul>

                        <ul className='navbar-nav ms-auto'>
                            <Button variant='primary' size='sm' style={{ margin: "3px"}} onClick={redirectToLogin}>Se connecter</Button>
                            <Button variant='success' size='sm' style={{ margin: "3px"}} onClick={redirectToSignUp}>S'inscrire</Button>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

export default WebsiteNavbar;
