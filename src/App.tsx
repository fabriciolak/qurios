import { Badge } from "./components/shared/Badge"
import { Button } from "./components/shared/Button"
import { Card } from "./components/shared/Card"
import { Header } from "./components/shared/header"
import styles from "./styles/pages/home.module.css"

import CardHeroSection from './assets/cards-hero-section.svg'
import CardGroupHeroSection from './assets/card-group-hero-section.svg'
import PaperHeroSection from './assets/paper-hero-section.svg'

import { Accordion } from "./components/shared/Accordion"
import { Link } from "react-router-dom"
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  return (
    <>
      <Header />

      <section className={styles.container_home}>
        <div className={styles.grid_home}>
          <div className={styles.content_home}>
            <h1 className={styles.content_home_title}>Conheça os amigos de verdade com perguntas.</h1>
            <p className={styles.content_home_description}>Crie perguntas para descobrir os segredos obscuros de seus amigos. Fique atento e veja quem realmente conhece! Escolha entre várias categorias e se divirta a qualquer momento. É simples, é gratuito e a diversão é garantida!</p>
            
            <Link to={`/app/login`}>
              <Button variant="primary" style={{
                width: '368px',
                height: '68px',
                borderRadius: '999px',
                fontSize: '1.5rem',
                lineHeight: '2rem',
              }}>Entrar</Button>
            </Link>
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
      </section>

      <section className={styles.container_custom_questions}>
        <div className={styles.container_cq_center}>
          <div className={styles.content_cq}>
            <Badge color="red-light">
              Pergunte o que quiser
            </Badge>
            <h2>Crie suas perguntas personalizadas</h2>
            <p>Crie suas próprias perguntas personalizadas em qualquer categoria e compartilhe com seus amigos.</p>
          </div>

          <div className={styles.content_cq_image}>
            <img src={CardHeroSection} alt="Card Hero" />
          </div>
        </div>
      </section>
      
      <section className={styles.container_answer_questions}>
        <div className={styles.container_pp_center}>
          <div className={styles.content_pp_image}>
            <img src={CardGroupHeroSection} alt="Card Hero" />
          </div>

          <div className={styles.content_pp}>
            <Badge color="blue-light">
              Responda de forma divertida
            </Badge>
            <h2>Responda perguntas e descubra mais sobre seus amigos</h2>
            <p>Descubra mais sobre seus amigos respondendo perguntas divertidas e interessantes em diferentes categorias.</p>
          </div>
        </div>
      </section>

      <section className={styles.container_privacy_policy}>
        <div className={styles.container_pp_center}>
          <div className={styles.content_pp}>
            <Badge color="purple-light">
              Seus dados estão protegidos
            </Badge>
            <h2>Privacidade e segurança são nossas prioridades</h2>
            <p>Temos medidas de segurança e privacidade para garantir que seus dados e respostas permaneçam protegidos.</p>
          </div>
      
          <div className={styles.content_pp_image}>
            <img src={PaperHeroSection} alt="Card Hero" />
          </div>
        </div>
      </section>

      <section className={styles.container_faq}>
        <div className={styles.container_faq_center}>
          <div className={styles.content_faq}>
            <h2>Perguntas frequentes</h2>
          </div>
      
          <div className={styles.content_faq_accordion}>
            <Accordion />
          </div>
        </div>
      </section>

      <footer>
        <div className={styles.container_footer}>
          <p className={styles.footer_brand}>QURIOS</p>
          <p className={styles.footer_message}>
            <span>© 2023 FABRICIOLAK. </span>
            Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
