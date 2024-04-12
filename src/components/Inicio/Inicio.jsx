import "./Inicio.css"
import imagem from "../../assets/imagens/image.svg";
const Inicio = () => (
    <article id="inicio" className="inicioCont">
        <aside className="inicioConteudo">
            <header>
                <h1>Semana de Física e Tecnologia</h1>
                <p>Inscreva-se para participar</p>
            </header>

            <a href="inscrição">Inscreva-se</a>
        </aside>

        <picture>
            <img src={imagem} alt="imagem" />
        </picture>
    </article>
)

export default Inicio;