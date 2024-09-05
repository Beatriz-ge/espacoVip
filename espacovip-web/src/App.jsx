import './App.css'
import logo from './assets/logo.png';
import Piscina1 from './assets/piscina/piscina7.jpeg';
import { IoMdInformationCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import CarouselIn from './components/carousel-in.jsx';
import CarouselOut from './components/carousel-out.jsx';
import Accordion from './components/accordion.jsx';
import { TbPhoto } from "react-icons/tb";

function App() {
  return (
    <div>
{/* Navbar */}
        <nav className='nav'> 
          <img className='logo-img' src={logo} alt="logo"/>
          <h1 className='logo-title'>ESPAÇO VIP</h1>
        </nav>

{/* Imagem principal */}
        <div className='main-container'>
          <img src={Piscina1}/>
          <h1>O LUGAR CERTO PARA O SEU EVENTO!</h1>
          <a href="https://wa.me/5561999591003?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20o%20Espaço%20de%20VIP" target="_blank">
            <button class="whatsapp-button">FALE CONOSCO</button>
          </a>
        </div>

{/* Texto sobre nós */}
        <div className='aboutus-container'>
          <div className='aboutus-title'>
            <IoMdInformationCircle className='icon-store'/>
            <h1>SOBRE NÓS</h1>
          </div>
          <p className='aboutus-p'>Bem-vindo ao Espaço Vip. Oferecemos o cenário perfeito para seus eventos especiais. Com uma ampla área de lazer, nossa chácara possui piscina, churrasqueira, mesa de sinuca, parquinho e área interna, garantindo momentos inesquecíveis para você e seus convidados. Conte conosco para transformar seu evento em uma experiência única. 
          Ficamos localizados no setor de chácaras do Valparaíso.</p>
        </div>

{/* Valores aluguel */}
        <div className='aboutus-container'>
          <div className='aboutus-title'>
            <IoMdPricetags className='icon-store'/>
            <h1>VALORES ALUGUEL</h1>
          </div>
          <Accordion/>
          
        </div>


{/* Cartões  */}
        <div className='contactus-container'>
          <div className='card'>
            <IoLocationOutline className='icon-cards'/>
            <h1>LOCALIZAÇÃO</h1>
            <p>Acesse nossa localização pelo Google Maps</p>
            <a href="https://maps.app.goo.gl/eiqWwFh5YL1aKZnQ6" target="_blank">
              <button class="maps-button">GOOGLE MAPS</button>
            </a>
          </div>
          <div className='card'>
            <FaInstagram className='icon-cards'/>
            <h1>INSTAGRAM</h1>
            <p>Nós acompanhe pelo nosso Instagram</p>
            <a href="https://www.instagram.com/eventos.espacovip/" target="_blank">
              <button class="instagram-button">INSTAGRAM</button>
            </a>
          </div>
          <div className='card'>
            <FaWhatsapp className='icon-cards'/>
            <h1>WHATSAPP</h1>
            <p>Clique para iniciar uma conversa conosco</p>
            <a href="https://wa.me/5561999591003?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20o%20Espaço%20de%20VIP" target="_blank">
              <button class="whatsapp-button">WHATSAPP</button>
            </a>
          </div>
        </div>

{/* Nosso espaço */}
        <div className='aboutus-container'>
          <div className='aboutus-title '>
            <TbPhoto className='icon-store'/>
            <h1>NOSSO ESPAÇO</h1>
          </div>

          <div className='photos-area'>
            <div className='photo-section'>
              <h2>ÁREA INTERNA</h2>
              <p>Conheça a nossa casa</p>
              <CarouselIn />
            </div>
            <div className='photo-section extern'>
              <h2>ÁREA EXTERNA</h2>
              <p>Conheça a nossa área de lazer</p>
              <CarouselOut />
            </div>
          </div>
        </div>
        
{/* Footer */}
        <footer>
          <div>
            <h1>ENDEREÇO</h1>
            <p>Rua Esperança Quadra 02 Chácara 06 - Valparaíso de Goiás</p>
          </div>
          <div>
            <h1>TELEFONE</h1>
            <p>61 99959-1003</p>
          </div>
        </footer>
    </div>
  )
}

export default App;

