import image from "../../assets/images/image.svg"
import "./palestrantes.css"
import Card from "../../components/Cards/Card.jsx"

function Palestrantes(){
    return (
        <div id="palestrantes" className="palestrantesContainer">
          <header>
            <h1>Palestrantes</h1>
          </header>
    
          <section className="palestrantesConteudo">
          <Card
          image={image}
          titulo="Como esqueçer a Morena"
          conteudo="Não tem como, tudo o que restou foi apenas a solidão"
          />
  
    
        <Card
          image={image}
          titulo="Como esqueçer a Morena"
          conteudo="Não tem como, tudo o que restou foi apenas a solidão"
          />
          
          <Card
          image={image}
          titulo="Como esqueçer a Morena"
          conteudo="Não tem como, tudo o que restou foi apenas a solidão"
          />
          
          </section>
    
          <button>
            Cronogroma
          </button>
        </div>
      )
    }

export default Palestrantes;