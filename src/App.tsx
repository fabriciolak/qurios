import { Header } from "./components/shared/header"
import * as Home from "./styles/pages/home"

function App() {
  return (
    <>
      <Header />
      <Home.Container>
        <div className="center">
          <h1 className="title">Conheça os amigos de verdade com perguntas.</h1>
          <div className="footer">
            <p className="description">Crie perguntas para descobrir os segredos obscuros de seus amigos. Fique atento e veja quem realmente conhece! Escolha entre várias categorias e se divirta a qualquer momento. É simples, é gratuito e a diversão é garantida!</p>
            <button>Login</button>
          </div>
        </div>
      </Home.Container>
    </>
  )
}

export default App
