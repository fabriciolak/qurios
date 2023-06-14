import { useState } from 'react'
import styles from './accordion.module.css'

export function Accordion() {
  const [selected, setSelected] = useState<number | null>(null)

  function handleOpenFaq(faqNumber: number) {
    if (selected === faqNumber) {
      return setSelected(null)
    }

    setSelected(faqNumber)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {data.map((data, i) => (
            <div key={data.number} className={styles.accordion_item}>
              <div className={styles.accordion_title} onClick={() => handleOpenFaq(data.number-1)}>
                <h2>
                  <span>0{data.number}</span>
                  {data.label}
                </h2>
              </div>
              <div className={selected === i ? styles.show : styles.accordion_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris diam, rutrum id dui ullamcorper, malesuada imperdiet nisi. Fusce cursus nulla eget ipsum varius, et fermentum massa pretium.
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const data = [
  {number: 1, label:"Quantos amigos posso adicionar no app?"},
  {number: 2, label:"Posso criar minhas próprias perguntas?"},
  {number: 3, label:"É possível responder perguntas anonimamente?"},
  {number: 4, label:"Como faço para excluir uma pergunta que criei?"},
  {number: 5, label:"Posso compartilhar minhas respostas nas redes sociais?"},
  {number: 6, label:"Como faço para bloquear um usuário indesejado?"}
]