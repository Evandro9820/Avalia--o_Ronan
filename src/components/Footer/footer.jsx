import "./footer.css";
import instagram from "../../assets/icones/instagram.svg"
import facebook from "../../assets/icones/facebook.svg"
/**
 * Component that renders the footer of the page
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  return (
    <footer className="footerContainer">
      {/* Footer container */}

      <section>
        {/* Social media links */}
        <header>
          <h3>Mais Informações?</h3>
          <p>Acesse nossas redes socias</p>
        </header>

        <ul>
          <li>
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/ifpr.campus.ivaipora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" width={39} height={39} />
            </a>
          </li>
          <li>
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/ifpr.campusivaipora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" width={39} height={39} />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <p>
          {/* Link to developer's page */}
          <a
            href="https://dark.dev.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            ©Evandro Cavalheiro de Araujo.
          </a>
        </p>

        <p>
          {/* Campus address */}
          IFPR Campus Ivaipora - Rua Max Arthur Greipel, nº 505 - Parque Industrial, Ivaiporã - PR,
          86870-000
        </p>
      </section>
    </footer>
  )
}




export default  Footer;
