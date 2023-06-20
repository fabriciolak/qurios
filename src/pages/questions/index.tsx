import { useEffect, useState } from 'react'
import { HorizontalCard } from '../../components/shared/Card/HorizontalCard'
import { Header } from '../../components/shared/header'
import styles from '../../styles/pages/app/questions.module.css'
import { api } from '../../services/api'

interface QuestionProps {
  title: string
  type: "FAMILY" | "FRIEND" | "LOVE" | "COLLEGE" | "STRANGER"
  id: string
}

export function QuestionsPage() {
  const [questions, setQuestions] = useState<QuestionProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/question')
      setQuestions(data)
      setLoading(prev => {
        return !prev
      })
    }
    
    fetchData()
  }, [])

  return (
    <> 
      <Header />

      <section className={styles.container}>
        {loading ? (
          <>
            <HorizontalCard
              isLoading={loading}
              id=''
              type='COLLEGE'
              content=''
            />
            <HorizontalCard
              isLoading={loading}
              id=''
              type='COLLEGE'
              content=''
            />
            <HorizontalCard
              isLoading={loading}
              id=''
              type='COLLEGE'
              content=''
            />
          </>
        ) : (
          <>
            {questions.map((question) => (
              <HorizontalCard
                key={question.id}
                id={question.id}
                type={question.type}
                content={question.title}
              />
            ))}
          </>
        )}

      </section>
    </>
  )
}