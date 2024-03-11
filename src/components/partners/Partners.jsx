import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/Capture.PNG";
import image2 from "../../assets/images/Capture2.PNG";
import image3 from "../../assets/images/Capture3.PNG";
import "../../assets/styles/Partners.css";

const PartnersSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div>
      <div className="container">
        <h2 className="text" style={{ fontSize: "45px", textAlign: "justify"}}><span style={{ color: "crimson"}}>Quelques uns de nos partenaires ...</span></h2>
        <p className='col-md-3' style={{ fontFamily: "Segoe UI Light", fontSize: "20px"}}> 
            <i>Plongez dans notre réseau dynamique de partenaires qui enrichissent notre mission d'ouvrir les portes du monde. Avec des collaborations solides, nous façonnons ensemble des expériences uniques pour chaque voyageur. Explorez nos alliances stratégiques et découvrez comment elles renforcent notre engagement envers l'excellence dans le domaine des services de voyage</i>
        </p>
        <br />
        <br />
        <Slider {...settings}>
          <div className="slide">
            <img src={image1} alt="Partner 1" style={{ height: "200px"}}/>
          </div>

          <div className="slide">
            <img src={image2} alt="Partner 2" style={{ height: "200px"}}/>
          </div>

          <div className="slide">
            <img src={image3} alt="Partner 3" style={{ height: "200px"}}/>
          </div>
          {/* Ajoute d'autres partenaires ici */}
        </Slider>
      </div>
      <br />
      <br />
    </div>
  );
};

export default PartnersSection;
