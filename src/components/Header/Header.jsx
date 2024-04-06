import "./Header.css";
import logo from "../../assets/icons/logo.svg"


function Header() {
  return (
    <header className="headerContainer">
        <nav className="navBar">
            <a href="#" className="logoIF">
                <picture>
                    <img src={logo} alt="" />
                </picture>
                Instituto Federal do Paraná - Campus Ivaiporã
            </a>

            <ul className="navMenu">
                <li className="item">
                    <a href="#">Inicio</a>
                </li>
                <li className="item">
                    <a href="#">Evento</a>
                </li>
                <li className="item">
                    <a href="#">Palestrantes</a>
                </li>
                <li className="item">
                    <a href="#">Oficinas</a>
                </li>
                <li className="item">
                   <a href="#">Cronograma</a>
                </li>
                <li className="item">
                    <a href="#">Inscrição</a>
                </li>

            </ul>
        </nav>

    </header>
  )
}

export default Header;