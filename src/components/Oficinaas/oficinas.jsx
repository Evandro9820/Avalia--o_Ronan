import "./Oficinas.css";
import image from "../../assets/imagens/image.svg"
import setaDireita from "../../assets/icones/setadireitaAlt.svg"
import setaEsquerda from "../../assets/icones/setaesquerdaAlt.svg"
import Card from "../../components/Cards/Card.jsx"
/**
 * Componente Oficinas
 * 
 * Exibe informações sobre as oficinas do evento
 * 
 * @returns JSX Element
 */
const Oficinas = () => {
  return (
    <div id="palestrantes" className="oficinaContainer">
      {/* Header */}
      <header>
        <h1>Oficinas</h1>
      </header>
      {/* Conteúdo do componente */}
      <section className="oficinaConteudo">
        {/* Botão de retroceder */}
        <button id="retroceder">
          <img src={setaEsquerda} alt="" />
        </button>
        {/* Card principal */}
        <Card
          image={image}
          titulo="Prova do Ronan"
          conteudo="Eu to usando Props ebaaa, agora eu ganho nota ksskksksk, css é ruim"
        />
        {/* Card secundário */}
        <Card
          image={image}
          titulo="Como esqueçer a Morena"
          conteudo="Não tem como, tudo o que restou foi apenas a solidão"
        />
        {/* Botão deavançar */}
        <button>
          <img src={setaDireita} alt="" />
        </button>
      </section>
    </div>
  );
};


export default Oficinas;

