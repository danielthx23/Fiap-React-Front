import Produto from '../../models/Produto';
import './InteractiveCard.css';

interface InteractiveCardProps {
    dadosProduto: Produto;
}

function InteractiveCard({dadosProduto}: InteractiveCardProps) {
  return (
    <section className='card-interativo'>
        <h1>{dadosProduto.nome}</h1>
        <h2>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(dadosProduto.preco)}</h2>
        <p>{dadosProduto.descricao}</p>
        <button>Comprar</button>
    </section>
  )
}

export default InteractiveCard