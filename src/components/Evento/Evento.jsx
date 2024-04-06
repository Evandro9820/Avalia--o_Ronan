import check from "../../assets/images/check.svg"
import parceiro from "../../assets/images/parceiro.svg"
import image from "../../assets/images/image.svg"
import "./Evento.css";

function Evento() {
  return (
    <article id="event" className="eventoContainer">
      <header>
        <h2>O Evento</h2>
        <p>
          Evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,evento,
        </p>
      </header>

      <aside className="eventoConteudo">
        <picture>
          <img src={image} alt="Image" />
        </picture>

        <div>
          <ul className="list">
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