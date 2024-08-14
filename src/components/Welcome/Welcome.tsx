import CardPratica from "../CardPratica/CardPratica"
import "./Welcome.css"

function Welcome() {
  return (
    <div className="container">
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000e12" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,170.7C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div className="container-text">
        <h1 className="titulo">Bem-vindo a minha prática de React!</h1>
        <h3 className="autor">Daniel Saburo Akiyama</h3>
        <h2 className="subtitulo">Esta prática consiste em: </h2>
      </div>
        <div className="lista-cards">
            <CardPratica imagem="https://imgs.search.brave.com/mOCx1bfRkfRFUb4ME2vOJDWNJZ6K0lkAuRM8eXTi4NQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn" nome="Componetização" descricao="Componentes básicos de listas, cards e displays de informações."/>
        </div>
    </div>
  )
}

export default Welcome