import React from "react";
import "../../assets/styles/ContactForm.css";


const ContactForm = () => {

    return (

        <div class="container">
            
            <h2>Contactez-nous</h2>
            <form action="mailto:votre_email@example.com" method="post" enctype="text/plain">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required />

                <label for="email">Email :</label>
                <input type="text" id="email" name="email" required />

                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <input type="submit" value="Envoyer" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default ContactForm;