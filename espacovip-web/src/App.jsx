import './App.css'
import logo from './assets/logo.png';
import home from './assets/example.jpg';
import { IoMdInformationCircle } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Carousel from './components/carousel'


function App() {
  return (
    <div>

        <nav className='nav'> 
          <img className='logo-img' src={logo} alt="logo"/>
          <h1 className='logo-title'>ESPAÇO VIP</h1>
        </nav>

        <div className='container'>
          <img src={home} alt="home"/>
          <h1>O LUGAR CERTO PARA O SEU EVENTO!</h1>
          <button>FALE CONOSCO</button>
        </div>

        <div className='aboutus-container'>
          <div className='aboutus'>
            <IoMdInformationCircle className='icon-store'/>
            <h1>SOBRE NÓS</h1>
          </div>
          <p className='aboutus-p'>Bem-vindo ao Espaço Vip. Oferecemos o cenário perfeito para seus eventos especiais. Com uma ampla área de lazer, nossa chácara possui piscina, churrasqueira, mesa de sinuca, parquinho e área interna, garantindo momentos inesquecíveis para você e seus convidados. Conte conosco para transformar seu evento em uma experiência única. 
          Ficamos localizados no setor de chácaras do Valparaíso.</p>
        </div>

        <div className='contactus'>
          <div className='location'>
            <IoLocationOutline className='icon-contact'/>
            <h1>LOCALIZAÇÃO</h1>
            <p>Acesse nossa localização pelo Google Maps</p>
            <button>GOOGLE MAPS</button>
          </div>
          <div className='insta'>
            <FaInstagram className='icon-contact'/>
            <h1>INSTAGRAM</h1>
            <p>Nós acompanhe pelo Instagram</p>
            <button>INSTAGRAM</button>
          </div>
          <div className='whatsapp'>
            <FaWhatsapp className='icon-contact'/>
            <h1>WHATSAPP</h1>
            <p>Clique para iniciar uma conversa conosco</p>
            <button>WHATSAPP</button>
          </div>
        </div>

        <div className='space'>
          <div className='intern-area'>
            <h1>ÁREA INTERNA</h1>
            <p>Conheça a nossa casa</p>
            <Carousel />

          </div>

        </div>

    </div>
  )
}

export default App;

