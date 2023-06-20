import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Header } from "../../components/shared/header"
import { styled } from "../../styles"
import { Button } from "../../components/shared/Button"
import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'
import dayjsBrLocale from 'dayjs/locale/pt-br'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"

interface QuestionProps {
  created_at: string
  updated_at: string
  title: string
  content: string
  type: "FRIEND" | "LOVE" | "COLLEGE" | "STRANGER" | "FAMILY"
  user_id: string
  comments: {
    id: string
    created_at: string
    text: string
    user: {
      name: string
      username: string
    }
  }[]
}

const commentSchema = z.object({
  text: z.string().min(1, 'O mínimo necessário para publicar um comentário é de 1 caractere.')
})

export function ReplyPage() {
  const [question, setQuestion] = useState({} as QuestionProps)
  const [loading, setLoading] = useState(false)

  const { replyId } = useParams()
  const { user } = useAuth()

  const { handleSubmit, formState: { errors }, register } = useForm<{ text: string }>({
    resolver: zodResolver(commentSchema)
  })
  
  useEffect(() => {
    async function getQuestion () {
      await api.get(`question/${replyId}`).then(response => response.data).then(data => {
        setQuestion(data)
        setLoading(prev => !prev)
      })
    }

    getQuestion()
  }, [replyId])

  const userCanEdit = user.id === question.user_id

  async function handleSubmitComment(data: { text: string }) {
    await api.post(`question/${replyId}`, {
      text: data.text,
      user: user.id
    })

    window.location.reload()
  }

  dayjs.extend(relativeTimePlugin)
  dayjs.locale(dayjsBrLocale)

  return (
    <>
      <Header />

      <Container>
        <h2>Resposta para: {question.title}</h2>
        {userCanEdit ? <button>Editar</button> : ''}

        <ReplyBox onSubmit={handleSubmit(handleSubmitComment)}>
          <ReplyTextArea {...register('text')} />
          {errors.text && <span>{errors.text.message}</span>}
          <Button>Enviar</Button>
        </ReplyBox>

        {loading ? (
          <>
            <Comment className="skeleton skeleton-border">
              <CommentAuthor>
                <div style={{ width: '40px', marginLeft: '5px' }} className="skeleton skeleton-text"></div>
                <div style={{ width: '40px', marginLeft: '5px' }} className="skeleton skeleton-text"></div>
                <div style={{ width: '40px', marginLeft: '5px', marginBottom: '.25em' }} className="skeleton skeleton-text"></div>
              </CommentAuthor>
                
              <CommentContent>
                <div style={{ flexDirection: 'column' }} className="skeleton skeleton-text">
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text"></div>
                </div>
              </CommentContent>
            </Comment>
          </>
        ) : (
          <>
            {question.comments && question.comments.map((question) => (
              <Comment key={question.id}>
                <CommentAuthor>
                  {question.user.name}
                  <span>{question.user.username}</span>
                  <span>{dayjs(question.created_at).fromNow()}</span>
                </CommentAuthor>
                  
                <CommentContent>
                  {question.text}
                </CommentContent>
              </Comment>
            ))}
          </>
        )}

        
      </Container>
    </>
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  
  padding: '0 2rem',
})

const Comment = styled('div', {
  width: '100%',
  margin: '1rem auto',
  
  padding: '0 2rem',
  borderRadius: '8px',
  border: '1px solid $gray-light',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',

  fontFamily: '$segoeui',
  fontSize: '16px',
  fontWeight: '400',
})

const CommentAuthor = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1rem 0',

  fontFamily: '$segoeui',

  span: {
    marginLeft: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '$gray-dark'
  }
})

const CommentContent = styled('div', {
  width: '100%',
  minHeight: '90px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

const ReplyBox = styled('form', {
  width: '100%',
  maxWidth: '1280px',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid $gray-light',
  marginTop: '16px'
})

const ReplyTextArea = styled('textarea', {
  width: '100%',
  height: '200px',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid $gray-light',
  marginBottom: '16px'
})