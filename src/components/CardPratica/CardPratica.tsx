import './CardPratica.css'

interface CardPraticaProps {
    imagem: string,
    nome: string,
    descricao: string
}

function CardPratica({imagem, nome, descricao}: CardPraticaProps) {
  return (
    <div className="card-pratica">
        <img src={imagem} alt="Imagem relacionada a pratica" />
        <h1>{nome}</h1>
        <h2>{descricao}</h2>
    </div>
  )
}

export default CardPratica