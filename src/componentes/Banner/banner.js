import React, { useState } from "react"; // Import the useState hook

import "./Banner.css";

function Banner() {
  const [backgroundImage] = useState("/img/fondo-pelicula.jpg");

  return (
    <section className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})` }}>
     {/*  <img
        className="background-image"
        src={process.env.PUBLIC_URL + "/img/fondo-pelicula.jpg"}
        alt="banner"
      /> */}
      <div className="banner-content">
        <div className="wrapper-content">
          <div className="wrapper-text">
            <h1 className="titleCategory">Web Profesionales </h1>
            <h1 className="SubtituleCategory">Servicios Web</h1>
            <h3 className="text-content">
              Desarrollo de páginas web con enfoque a los servicios Profesionales.
            </h3>
          </div>

          <div className="img-playerDiv">
            <img
              className="img-player"
              src={process.env.PUBLIC_URL + "/img/web-abogados.PNG"}
              alt="banner-player"
            />
          </div>
        </div>
      </div>
      <div className="linea-botton-banner1"></div>
    </section>
  
  );
}

export default Banner;
