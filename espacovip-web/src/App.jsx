import './App.css'
import logo from './assets/logo.png';
import home from './assets/example.jpg';
import { IoMdInformationCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import CarouselIn from './components/carousel-in.jsx'
import CarouselOut from './components/carousel-out.jsx'
import { TbPhoto } from "react-icons/tb";

function App() {
  return (
    <div>

        <nav className='nav'> 
          <img className='logo-img' src={logo} alt="logo"/>
          <h1 className='logo-title'>ESPAÇO VIP</h1>
        </nav>

        <div className='main-container'>
          <img src={home}/>
          <h1>O LUGAR CERTO PARA O SEU EVENTO!</h1>
          <button>FALE CONOSCO</button>
        </div>

        <div className='aboutus-container'>
          <div className='aboutus-title'>
            <IoMdInformationCircle className='icon-store'/>
            <h1>SOBRE NÓS</h1>
          </div>
          <p className='aboutus-p'>Bem-vindo ao Espaço Vip. Oferecemos o cenário perfeito para seus eventos especiais. Com uma ampla área de lazer, nossa chácara possui piscina, churrasqueira, mesa de sinuca, parquinho e área interna, garantindo momentos inesquecíveis para você e seus convidados. Conte conosco para transformar seu evento em uma experiência única. 
          Ficamos localizados no setor de chácaras do Valparaíso.</p>
        </div>

        <div className='contactus-container'>
          <div className='card'>
            <IoLocationOutline className='icon-cards'/>
            <h1>LOCALIZAÇÃO</h1>
            <p>Acesse nossa localização pelo Google Maps</p>
            <button>GOOGLE MAPS</button>
          </div>
          <div className='card'>
            <FaInstagram className='icon-cards'/>
            <h1>INSTAGRAM</h1>
            <p>Nós acompanhe pelo nosso Instagram</p>
            <button>INSTAGRAM</button>
          </div>
          <div className='card'>
            <FaWhatsapp className='icon-cards'/>
            <h1>WHATSAPP</h1>
            <p>Clique para iniciar uma conversa conosco</p>
            <button>WHATSAPP</button>
          </div>
        </div>

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

