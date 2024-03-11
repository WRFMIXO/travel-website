// DestinationsCoveredSection.js

import React from 'react';
import "../../assets/styles/DestinationPresentationSection.css";
import image1 from "../../assets/images/eiffel-tower.jpg";
import image2 from "../../assets/images/statue-of-liberty.jpg";
import image3 from "../../assets/images/japan.jpg";
import image4 from "../../assets/images/london.jpg";
import image5 from "../../assets/images/burj-khalifa.jpg";
import image6 from "../../assets/images/rome.jpg";

function DestinationsCoveredSection() {
  // Liste des destinations couvertes avec les images correspondantes
  const destinations = [
    { name: "Paris", image: image1 },
    { name: "New York", image: image2 },
    { name: "Tokyo", image: image3 },
    { name: "Londres", image: image4 },
    { name: "Dubai", image: image5 },
    { name: "Rome", image: image6 }
    // Ajoute d'autres destinations au besoin
  ];

  return (
    <section className="destinations-covered-section">
        <div className='background'>
        <div className="container">
        <br />
        <br />
        <h2 className="text" style={{ fontSize: "45px", textAlign: "justify"}}><span style={{ color: "crimson"}}>Canada</span><br /> <span style={{ color: "orange"}}>Angletterre</span>, <span style={{ color: "blue"}}>France</span> et Bien d'autres</h2>
        <p className='col-md-3' style={{ fontFamily: "Segoe UI Light", fontSize: "20px"}}> 
            <i>Nous offrons actuellement nos services pour des destinations dans chacun de ces pays</i>
        </p>
        <br />
        <br />
        <div className="row justify-content-center" style={{ marginTop: "3rem"}}>
          {destinations.map((destination, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card" id='destinationCard'>
                <img src={destination.image} className="card-img-top" alt={destination.name} style={{ height: "350px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
      
    </section>
  );
}

export default DestinationsCoveredSection;
