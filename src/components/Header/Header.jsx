import "./Header.css";
import logo from "../../assets/icones/logo.svg"


const Header = () => {

    const navMenu = (
        <ul className="navMenu">
            <li className="item"><a href="#">Inicio</a></li>
            <li className="item"><a href="#">Evento</a></li>
            <li className="item"><a href="#">Palestrantes</a></li>
            <li className="item"><a href="#">Oficinas</a></li>
            <li className="item"><a href="#">Cronograma</a></li>
            <li className="item"><a href="#">Inscrição</a></li>
        </ul>
    )

    return (
        <header className="headerContainer">
            <nav className="navBar">
                <a href="#" className="logoIF">
                    <picture>
                        <img src={logo} alt="" />
                    </picture>
                    Instituto Federal do Paraná - Campus Ivaiporã
                </a>

                {navMenu}
            </nav>

        </header>
    )
}

export default Header;