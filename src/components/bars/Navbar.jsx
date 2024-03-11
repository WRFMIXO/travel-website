// Navbar.js

import React from 'react';
import "../../assets/styles/Navbar.css";
import { NavLink } from 'react-router-dom';

function WebsiteNavbar() {
    return (
            <nav className="navbar navbar-expand-lg" id='website-navbar' >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <i className='bi bi-browser-edge' style={{ color: "mediumpurple"}}></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/visa-demands/">Demandes de Visas</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                    </li>
                        {/* Ajoute d'autres liens vers les sections de ton site au besoin */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default WebsiteNavbar;
