import "./Oficinas.css";
import image from "../../assets/images/image.svg"
import setaDireita from "../../assets/icons/setadireitaAlt.svg"
import setaEsquerda from "../../assets/icons/setaesquerdaAlt.svg"
import Card from "../../components/Cards/Card.jsx"
function Oficinas() {
  return (
    <div id="palestrantes" className="oficinaContainer">
          <header>
            <h1>Oficinas</h1>
          </header>
    
          <section className="oficinaConteudo">
            <button id="retroceder">
             <img src={setaEsquerda} alt="" />
          </button>
            
          
          <Card
          image={image}
          titulo="Prova do Ronan"
          conteudo="Eu to usando Props ebaaa, agora eu ganho nota ksskksksk, css é ruim"
          />
    
        <Card
          image={image}
          titulo="Como esqueçer a Morena"
          conteudo="Não tem como, tudo o que restou foi apenas a solidão"
          />
           
            <button >
             <img src={setaDireita} alt="" />
          </button>
            
          </section>
    
        </div>
        
      )
  
}

export default Oficinas;

