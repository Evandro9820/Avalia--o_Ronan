import "./footer.css";
import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"
function Footer (){
    return (
        <footer className="footerContainer">
          <section>
            <header>
              <h3>Mais Informações?</h3>
              <p>Acesse nossas redes socias</p>
            </header>
    
            <ul>
              <li>
                <a href="https://www.instagram.com/ifpr.campus.ivaipora/">
                  <img src={instagram} alt="Social media" width={39} height={39} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ifpr.campusivaipora/">
                  <img src={facebook} alt="Social media" width={39} height={39} />
                </a>
              </li>
            </ul>
          </section>
    
          <section>
            <p>
              <a href="Dark" target='_blank'>
                &copy;Evandro Cavalheiro de Araujo. Todos os Direitos Reservados
              </a>
            </p>
    
            <p>
              IFPR Campus Ivaipora - Rua Max Arthur Greipel, nº 505 - Parque Industrial, Ivaiporã - PR, 86870-000
            </p>
          </section>
        </footer>
      )
    }



export default  Footer;
