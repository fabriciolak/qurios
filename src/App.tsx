import { Card } from "./components/shared/Card"
import { Header } from "./components/shared/header"
import * as Home from "./styles/pages/home"

function App() {
  return (
    <>
      <Header />
      <Home.Container>
        <Home.Content>
          <h1 className="title">Conheça os amigos de verdade com perguntas.</h1>
          <div className="content-group">
            <p className="description">Crie perguntas para descobrir os segredos obscuros de seus amigos. Fique atento e veja quem realmente conhece! Escolha entre várias categorias e se divirta a qualquer momento. É simples, é gratuito e a diversão é garantida!</p>
            <button>Login</button>
          </div>
        </Home.Content>

        <Home.BackgroundImage>
          <div className="bk">
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
          </div>
          <div className="bl">
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
            <Card type="college" content="Qual a sua sala?" />
          </div>
        </Home.BackgroundImage>
      </Home.Container>
    </>
  )
}

export default App
