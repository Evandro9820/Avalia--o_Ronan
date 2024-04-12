import image from "../../assets/imagens/image.svg"  
function Cards(props) {
    return (
      <div className="conteudo">
        <img src={props.image} alt="Imagem" />
        <div>
          <header>{props.titulo}</header>
          <p>{props.conteudo}</p>
          <span>Ler Mais </span>
        </div>
      </div>
    );
  }

  export default Cards;

  /* Isso daqui é uma props do card para o conteudo  */