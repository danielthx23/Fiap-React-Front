import Produto from '../../models/Produto'
import InteractiveCard from '../InteractiveCard/InteractiveCard'
import './InteractiveCardList.css'

function InteractiveCardList() {
    const produto1: Produto = {
        nome: 'Notebook',
        preco: 2500.00,
        descricao: 'Notebook com 16GB de RAM e 512GB de SSD.'
    }

    const produto2: Produto = {
        nome: 'Smartphone',
        preco: 1200.00,
        descricao: 'Smartphone com câmera de 48MP e 128GB de armazenamento.'
    }

    const produto3: Produto = {
        nome: 'Fone de Ouvido',
        preco: 300.00,
        descricao: 'Fone de ouvido com cancelamento de ruído e conectividade Bluetooth.'
    }

    const produto4: Produto = {
        nome: 'Monitor 4K',
        preco: 1800.00,
        descricao: 'Monitor 27" 4K Ultra HD com suporte a HDR e taxa de atualização de 60Hz.'
    }

    const produto5: Produto = {
        nome: 'Teclado Mecânico',
        preco: 400.00,
        descricao: 'Teclado mecânico com switches RGB e retroiluminação personalizável.'
    }

    const listaProdutos: Produto[] = [produto1, produto2, produto3, produto4, produto5]
    return (
        <div className='lista-de-produtos'>
            <h1 className='lista-titulo'>Componente de card interativo e lista estática de produtos</h1>

            <div className='lista-produtos'>
                {listaProdutos.map((produto) => (
                    <InteractiveCard key={produto.nome} dadosProduto={produto}/>
                ))}
            </div>
        </div>
    )
}

export default InteractiveCardList