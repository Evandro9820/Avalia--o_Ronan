import image from "../../assets/imagens/image.svg"
import "./incricioes.css" 
/**
 * Componente Inscrições
 * 
 * Exibe formulário de inscrição para o evento
 * 
 * @returns JSX Element
 */
const Inscricoes = () => {
  return (
    <article id="registration" className="inscricoesContainer">
      {/* Header */}
      <header>
        <h2>Inscrições</h2>
      </header>
      {/* Card principal */}
      <div className="inscricoesCu">
        <picture>
          <img src={image} alt="Imagem" /> {/* Imagem ilustrativa */}
        </picture>
        <form>
          {/* Formulário */}
          <header>
            <h3>
              Faça sua Inscrições. <br />
              Não perca essa oportunidade
            </h3>
          </header>
          <input
            type="text"
            placeholder="Nome Completo"
            required
          />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="CPF" required />
          <button type="submit">Inscreva-se</button>
        </form>
      </div>
    </article>
  );
};

export default Inscricoes;