import "./Carrusel.css";

function Carrusel() {
  return (
    <section id="section" className="main__section__products">
      {/* Páginas Web para Profesiones */}
      <div>
        <div className="header_title_product">
          <h1 className="text_title_product">Páginas Web para Profesiones</h1>
          <a className="see_all_container" href="products.html">
            <h4>Ver todo</h4>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="products_container_section">
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-abogados.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-arquitectos.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-fitness.png"}
              alt="Imagen de Abogados"
            />
          </div>
        </div>
      </div>
      {/* Páginas Web para Hobbits */}
      <div>
        <div className="header_title_product">
          <h1 className="text_title_product">Páginas Web para Hobbits</h1>
          <a className="see_all_container" href="products.html">
            <h4>Ver todo</h4>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="products_container_section">
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-cocina.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-plantas.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-recetas.png"}
              alt="Imagen de Abogados"
            />
          </div>
        
          
        </div>
      </div>
      {/* Páginas Web Otras */}
      <div>
        <div className="header_title_product">
          <h1 className="text_title_product">Páginas Web Otras </h1>
          <a className="see_all_container" href="products.html">
            <h4>Ver todo</h4>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="products_container_section">
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-baby.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-diseno-mobiliarioPNG.png"}
              alt="Imagen de Abogados"
            />
          </div>
          <div className="product_container">
            <img
              className="img_product_item"
              src={process.env.PUBLIC_URL + "/img/web-modelos.png"}
              alt="Imagen de Abogados"
            />
          </div>
        
          
        </div>
      </div>
    </section>
  );
}

export default Carrusel;
