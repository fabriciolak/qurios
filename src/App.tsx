import { Button } from "./components/shared/Button"
import { Card } from "./components/shared/Card"
import { Header } from "./components/shared/header"
// import * as Home from "./styles/pages/home"
import styles from "./styles/pages/home.module.css"
// import * as HeroSection from "./styles/pages/hero-section"

// import CardHeroSection from './assets/cards-hero-section.svg'
// import CardGroupHeroSection from './assets/card-group-hero-section.svg'
// import PaperHeroSection from './assets/paper-hero-section.svg'
// import { Badge } from "./components/shared/Badge"

function App() {
  return (
    <>
      <Header />
      <div className={styles.container_home}>
        <div className={styles.grid_home}>
          <div className={styles.content_home}>
            <h1 className={styles.content_home_title}>Conheça os amigos de verdade com perguntas.</h1>
            <p className={styles.content_home_description}>Crie perguntas para descobrir os segredos obscuros de seus amigos. Fique atento e veja quem realmente conhece! Escolha entre várias categorias e se divirta a qualquer momento. É simples, é gratuito e a diversão é garantida!</p>
            <Button href="/" variant="primary" css={{
              width: '368px',
              height: '68px',
              borderRadius: '999px',
              fontSize: '1.5rem',
              lineHeight: '2rem',
            }}>Entrar</Button>
          </div>
                
          <div className={styles.container_background}>
            <div className={styles.container_background_left}>
              <Card type="friend" content="Qual a sua sala?" />
              <Card type="friend" content="Me conte uma piada engraçada" />
              <Card type="friend" content="Me fale um segredo que ninguém sabe" />
              <Card type="love" content="Quantas vezes você já me amou?" />
              <Card type="college" content="Qual a sua sala?" />
            </div>
            <div className={styles.container_background_right}>
              <Card type="college" content="Qual a sua sala?" />
              <Card type="family" content="você fica chateado quando..." />
              <Card type="college" content="Qual é a comida que você tem alergia?" />
              <Card type="stranger" content="Onde você mora?" />
              <Card type="college" content="Onde você mora?" />
            </div>
          </div>
        </div>
      </div>

      {/* 
      <HeroSection.Section>
        <HeroSection.Container>
          <HeroSection.Content>
            <Badge color="red-light">
              Pergunte o que quiser
            </Badge>
            <h2>Crie suas perguntas personalizadas</h2>
            <p>Crie suas próprias perguntas personalizadas em qualquer categoria e compartilhe com seus amigos.</p>
          </HeroSection.Content>

          <HeroSection.Content css={{
            backgroundColor: '$red-light',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px',
            position: 'relative'  
          }}>
            <img src={CardHeroSection} alt="Cards" style={{ width: '120%', height: 'auto', position: 'absolute' }} />
          </HeroSection.Content>
        </HeroSection.Container>
      </HeroSection.Section>

      <HeroSection.Section>
        <HeroSection.Container>
          <HeroSection.Content>
            <img src={CardGroupHeroSection} alt="Cards" />
          </HeroSection.Content>

          <HeroSection.Content>
            <Badge color="blue-light">
              Responda de forma divertida
            </Badge>
            <h2>Responda perguntas e descubra mais sobre seus amigos</h2>
            <p>Descubra mais sobre seus amigos respondendo perguntas divertidas e interessantes em diferentes categorias.</p>
          </HeroSection.Content>
        </HeroSection.Container>
      </HeroSection.Section>

      <HeroSection.Section>
        <HeroSection.Container>
          <HeroSection.Content>
            <Badge color="purple-light">
              Seus dados estão protegidos
            </Badge>
            <h2>Privacidade e segurança são nossas prioridades</h2>
            <p>Temos medidas de segurança e privacidade para garantir que seus dados e respostas permaneçam protegidos.</p>
          </HeroSection.Content>

          <HeroSection.Content>
            <img src={PaperHeroSection} alt="Cards" />
          </HeroSection.Content>
        </HeroSection.Container>
      </HeroSection.Section> 
      */}
    </>
  )
}

export default App
