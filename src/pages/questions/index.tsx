import { useEffect, useState } from 'react'
import { HorizontalCard } from '../../components/shared/Card/HorizontalCard'
import { Header } from '../../components/shared/header'
import styles from '../../styles/pages/app/questions.module.css'
import { api } from '../../services/api'

interface QuestionProps {
  title: string
  slug: string
}

export function QuestionsPage() {
  const [questions, setQuestions] = useState<QuestionProps[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/question')
      setQuestions(data)
    }

    fetchData()
  }, [])

  return (
    <> 
      <Header />

      <section className={styles.container}>
        {questions.map((question) => (
          <HorizontalCard key={question.title} type='college' slug={question.slug} content={question.title} />
        ))}
      </section>
    </>
  )
}