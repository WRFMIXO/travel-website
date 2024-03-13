// VisaForm.js

import React, { useState } from 'react';
import HeroSection from '../hero/HeroSection';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button, FormControl } from 'react-bootstrap';


function VisaForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    university: '',
    course: ''
  });

  const countries = [
    'CAMEROUN',
    'MALI',
    'SENEGAL',
    "COTE D'IVOIRE",
    "GUINNEE CONAKRY",
    "REPUBLIQUE DEMOCRATIQUE DU CONGO",
    "TCHAD",
    "GABON",
    "REPUBLIQUE CENTRAFRICAINE",
  ];

  const studyPrograms = [
    'Licence 1',
    'Licence 2',
    'Licence 3',
    'Master 1',
    'Master 2',
    'Bachelor Degree',
    'Doctorat',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construire le message à envoyer par WhatsApp ou Gmail
    const message = `Demande de visa étudiant\nNom complet: ${formData.fullName}\nAdresse e-mail: ${formData.email}\nPays de résidence: ${formData.country}\nUniversité souhaitée: ${formData.university}\nProgramme d'études: ${formData.course}`;
    
    // Rediriger vers WhatsApp ou Gmail avec le message pré-rempli
    const gmailURL = `mailto:adresse@email.com?subject=Demande%20de%20visa%20étudiant&body=${encodeURIComponent(message)}`;
    
    // Choix de rediriger vers WhatsApp ou Gmail (à adapter selon tes besoins)
    window.location.href = gmailURL; // Redirection vers WhatsApp
    // window.location.href = gmailURL; // Redirection vers Gmail
  };

    // Fonction pour capturer et télécharger la page en PDF
    const downloadPDF = () => {
        const input = document.getElementById('capture'); // Identifiant du composant à capturer
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Taille A4 : 210 x 297 mm
            pdf.save('brochure.pdf'); // Nom du fichier PDF à télécharger
          });
      };

      
  return (
    <div className="container">
        <Button onClick={downloadPDF}>Télécharger la brochure</Button>
        <div id='capture'>
            <div className='row' style={{ padding: "1rem"}}>
                <div className='col'>
                <h2 className="text-center mb-4">Demande de Visa Étudiant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nom complet</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Adresse e-mail</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Pays de résidence</label>
          <FormControl 
            as="select"
            type='text'
            id="counrty"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className='form-select'
            defaultValue="def"
          >
            <option value="def">Choisissez un pays</option>
            {countries.map((country, index) => {
              return (
                <option key={index}>{country}</option>
              )
            })}
          </FormControl>
        </div>
        <div className="mb-3">
          <label htmlFor="university" className="form-label">Université souhaitée</label>
          <input type="text" className="form-control" id="university" name="university" value={formData.university} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Programme d'étude</label>
          <FormControl 
            as="select"
            type='text'
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            defaultValue="def"
            className='form-select'
          >
            <option value="def">Liste des programmes</option>
            {studyPrograms.map((program, index) => {
              return (
                <option key={index}>{program}</option>
              )
            })}
          </FormControl>
        </div>
        <button type="submit" className="btn btn-primary">Soumettre</button>
      </form>
                </div>

                <div className='col'>
                    <HeroSection />
                </div>
            </div>
        </div>
    </div>
  );
}

export default VisaForm;
