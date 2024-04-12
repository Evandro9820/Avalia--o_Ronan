import check from "../../assets/imagens/check.svg"
import parceiro from "../../assets/imagens/parceiro.svg"
import image from "../../assets/imagens/image.svg"
import "./Evento.css";

/**
 * Evento Component
 *
 * This component is responsible for displaying information about the event
 * and its parceiros
 */
function Evento() {
  return (
    <article id="event" className="eventoContainer">
      <header>
        <h2>O Evento</h2>
        <p>
          Evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,
          evento,evento,evento,evento,evento,evento,evento,evento,
        </p>
      </header>

      <aside className="eventoConteudo">
        {/* Image and List */}
        <picture>
          <img src={image} alt="Image" />
        </picture>

        <div>
          <ul className="list">
            {/* List of Event Benefits */}
            <li className="item">
              <img src={check} alt="check box marcado" />
              <span>
                evento,evento,evento,evento,evento,
              </span>
            </li>
            <li className="item">
              <img src={check} alt="check box marcado" />
              <span>
                evento,evento,evento,evento,evento,
              </span>
            </li>
            <li className="item">
              <img src={check} alt="check box marcado" />
              <span>
                evento,evento,evento,evento,evento,
              </span>
            </li>
            <li className="item">
              <img src={check} alt="check box marcado" />
              <span>
                evento,evento,evento,evento,evento,
              </span>
            </li>
          </ul>

          {/* Link to registration form */}
          <a href="ResgistrAR">Inscreva-se</a>
        </div>
      </aside>

      <aside className="parceiroContainer">
        <header>
          <h2>
            Nossas Parcerias
          </h2>
        </header>

        <ul className="listaParceiros">
          {/* List of Parceiros */}
          <li className="item">
            <picture>
              <img src={parceiro} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className="item">
            <picture>
              <img src={parceiro} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className="item">
            <picture>
              <img src={parceiro} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className="item">
            <picture>
              <img src={parceiro} alt="paceiro do IFPR" />
            </picture>
          </li>
        </ul>
      </aside>
    </article>
  )
}

export default Evento;