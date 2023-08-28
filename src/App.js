import './App.css';
import Header from './componentes/Header/header';
import Banner from './componentes/Banner/banner';
import Carrusel from './componentes/Carrusel/Componentes/Carrusel/carrusel';
import Footer from './componentes/Footer/footer';

import './assets/css/utilidades/variables.css'; 
import './assets/css/utilidades/reset.css'; 
import './assets/css/utilidades/normalize.css'; 
function App() {
  return (
    <div>
    <main>
      <Header />
      <Banner />
      <Carrusel />
    </main>

    <footer>
      <Footer/> 
    </footer>
  </div>
  );
}

export default App;
