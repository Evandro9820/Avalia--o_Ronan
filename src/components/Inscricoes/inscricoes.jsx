import image from "../../assets/images/image.svg"
import "./incricioes.css" 
function Inscricoes (){
    return (
        <article id="registration" className="inscricoesContainer">
          <header>
            <h2>
              Inscrições
            </h2>
          </header>
    
          <div className="inscricoesCu">
            <picture>
              <img src={image} alt="Image" />
            </picture>
    
            <form>
              <header>
                <h3>
                  Faça sua Inscrições. 
                  <br/>
                  Não perca essa oportunidade
                </h3>
              </header>
    
              <input type="text" placeholder="Nome Completo" required/>
              <input type="email" placeholder="Email" required/>
              <input type="text" placeholder="CPF"  required/>
              <button type="submit">Inscreva-se</button>
            </form>
          </div>
        </article>
      )
}

export default Inscricoes;