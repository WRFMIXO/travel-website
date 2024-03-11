// SocialBar.js

import React from 'react';
import "../../assets/styles/SocialBar.css";

function SocialBar() {
    return (
        <div className="social-bar">
            <ul>
                <li className='social-link'><a href="lien_vers_facebook"><i className="bi bi-facebook"></i></a></li>
                <li className='social-link'><a href="lien_vers_twitter"><i className="bi bi-twitter"></i></a></li>
                <li className='social-link'><a href="lien_vers_instagram"><i className="bi bi-instagram"></i></a></li>
                {/* Ajoute d'autres réseaux sociaux au besoin */}
            </ul>
        </div>
    );
}

export default SocialBar;
