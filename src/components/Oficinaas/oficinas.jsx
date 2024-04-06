import "./Oficinas.css";
import image from "../../assets/images/image.svg"
import setaDireita from "../../assets/icons/setadireitaAlt.svg"
import setaEsquerda from "../../assets/icons/setaesquerdaAlt.svg"
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
            
          
            <div id="conteudo"className="conteudo">
              <img src={image} alt="Imagem" />
              <div>
                <header>Como esqueçer a Morena</header>
                <p>Não tem como, tudo o que restou foi apenas a solidão</p>
                <span>Ler mais </span>
              </div>
            </div>
    
            <div className="conteudo">
              <img src={image} alt="Imagem" />
              <div>
                <header>Como comprar um monza</header>
                <p>Como que alinha isso, que locura meu deus </p>
                <span>Ler mais </span>
              </div>
            </div>
           
            <button >
             <img src={setaDireita} alt="" />
          </button>
            
          </section>
    
        </div>
        
      )
  
}

export default Oficinas;

