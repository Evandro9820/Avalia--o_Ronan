import image from "../../assets/images/image.svg"  
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