import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
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
import { Trash } from "lucide-react"
import Modal from 'react-modal'

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

const updateSchema = z.object({
  title: z.string().trim().refine(val => val.trim().length > 0, {
    message: 'Este campo não pode ficar em branco.'
  }),
  content: z.string().trim().refine(val => val.trim().length > 0, {
    message: 'Este campo não pode ficar em branco.',
  })
})

dayjs.extend(relativeTimePlugin)
dayjs.locale(dayjsBrLocale)

export function ReplyPage() {
  const [question, setQuestion] = useState({} as QuestionProps)
  const [loading, setLoading] = useState(true)
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState<boolean>(false)
  const [modalUpdateIsOpen, setModaUpdateIsOpen] = useState<boolean>(false)
  const [publicationNameAlreadyExists, setPublicationNameAlreadyExists] = useState<boolean>(false)

  const navigate = useNavigate()

  const { replyId } = useParams()
  const { user } = useAuth()

  const { handleSubmit, formState: { errors }, register } = useForm<{ text: string }>({
    resolver: zodResolver(commentSchema)
  })

  const { handleSubmit: handleSubmitUpdateQuestion, formState: { errors: errorsSecondForm }, register: registerSecondForm } = useForm<{ title: string, content: string }>({
    resolver: zodResolver(updateSchema)
  })
  
  useEffect(() => {
    async function getQuestion () {
      await api.get(`question/${replyId}`).then(response => response.data).then(data => {
        setLoading(false)
        setQuestion(data)
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

  async function handleDeleteQuestion() {
    await api.delete('question', {
      data: {
        question_id: replyId
      }
    }).then(() => {
      navigate('/questions')
    })
  }
  
  async function handleUpdateQuestion(data: { title: string, content: string }) {
    try {
      await api.put(`question/${replyId}`, {
        title: data.title,
        content: data.content
      }) 
      
      setModaUpdateIsOpen(false)
      window.location.reload()
    } catch (error) {
      if (error instanceof Error) {
        setPublicationNameAlreadyExists(!!error.message)
      }
    }

  }

  console.log(question.content)

  return (
    <>
      <Header />

      <Container>
        <ReplyHeader>
          <h2>Resposta para: {question.title}</h2>
          {userCanEdit ? (
            <div>
              <Button onClick={() => setModaUpdateIsOpen(true)}>Editar</Button>
              <Button variant="destructive" onClick={() => setModalDeleteIsOpen(true)}>
                <Trash size={24} />
              </Button>
            </div>
          ) : ''}
          
          <Modal
            isOpen={modalDeleteIsOpen}
            onRequestClose={() => setModalDeleteIsOpen(prev => !prev)}
            style={{
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '480px',
                height: '148px',
                borderRadius: '16px'
              }
            }}
          >
            <ModalHeader>
              <span>Tem certeza que deseja deletar?</span>
            </ModalHeader>

            <ModalFooter>
              <Button variant="tertiary" onClick={() => setModalDeleteIsOpen(prev => !prev)}>Cancelar</Button>

              <Button variant="destructive" onClick={handleDeleteQuestion}>
                Excluir
              </Button>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={modalUpdateIsOpen}
            onRequestClose={() => setModaUpdateIsOpen(prev => !prev)}
            id="update-modal"
            style={{
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '480px',
                height: '340px',
                borderRadius: '16px'
              }
            }}
          >
            <ModalHeader>
              <span>Insira os dados a ser atualizado</span>
            </ModalHeader>


            
              <ModalContent>
                <form onSubmit={handleSubmitUpdateQuestion(handleUpdateQuestion)}>
                  <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <InputModal type="text" id="title" placeholder='Novo título...' {...registerSecondForm('title', { required: { message: 'Este campo é obrigatório para atualizar uma questão', value: true } })} />
                    <div>
                      {errorsSecondForm.title && <span className="error-message">{errorsSecondForm.title.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="content">Conteúdo</label>
                    <InputModal type="text" id="content" placeholder='Novo título...' {...registerSecondForm('content', { required: { message: 'Este campo é obrigatório para atualizar uma questão', value: true } })} />
                    <div>
                      {errorsSecondForm.content && <span className="error-message">{errorsSecondForm.content.message}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div>
                      {publicationNameAlreadyExists && <span className="error-message">Desculpe, mas uma publicação com esse título já existe. Tente outro</span>}
                    </div>
                  </div>

                  <ModalFooter>
                    <Button variant="tertiary" onClick={() => setModaUpdateIsOpen(prev => !prev)} >Cancelar</Button>
                    <Button>Atualizar</Button>
                  </ModalFooter>

                </form>
              </ModalContent>

          </Modal>
        </ReplyHeader>

        <ReplyBox onSubmit={handleSubmit(handleSubmitComment)}>
          <ReplyContent>{question.content}</ReplyContent>

          <ReplyTextArea {...register('text')} />
          {errors.text && <span>{errors.text.message}</span>}
          <Button>Responder</Button>
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
            {question && question.comments.map((question) => (
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

const ReplyHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  'div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '16px'
  }
})

const ModalHeader = styled('div', {
  width: '100%',
  fontFamily: '$roboto',
  fontSize: '1.5rem',
  fontWeight: '700',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginBottom: '32px',
})

const ModalContent = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '16px',

  '.form-group label': {
    width: '100%',
    fontFamily: 'var(--fonts-segoeui)',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '26px',
    marginBottom: '12px',
  
    color: 'var(--colors-text)',
  },

  '.form-group .error-message': {
    display: 'block',
    height: '24px',
    fontFamily: '$roboto',
    fontSize: '12px',
    margin: '8px 0',
  }
})

const ModalFooter = styled('div', {
  height: '56px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '16px',
})

const InputModal = styled('input', {
  width: '100%',
  height: '40px',

  border: '2px solid $gray-light',
  padding: '8px 12px',
  fontSize: '14px',
  margin: '8px 0',
  borderRadius: '8px',
  outline: 'none',
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
  padding: '0 2rem',
  borderRadius: '8px',
  border: '1px solid $gray-light',
  marginTop: '16px'
})

const ReplyContent = styled('div', {
  width: '100%',
  padding: '1.5rem 0'
})

const ReplyTextArea = styled('textarea', {
  width: '100%',
  height: '200px',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid $gray-light',
  marginBottom: '16px'
})