import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import ModalReact from 'react-modal'
import { z } from 'zod'
import { Button } from './Button'
import styles from './Modal.module.css'
import Select from 'react-select'
import { api } from '../../services/api'

interface ModalQuestionProps {
  modalIsOpen: boolean
  closeModal(): void
}

const formQuestionSchemaValidation = z.object({
  title: z.string().min(5, {
    message: 'Tá muito curto! Mais detalhes, por favor! 🔍'
  }),
  type: z.object({ value: z.string(), label: z.string() }),
  content: z.string()
})

const selectOptions = [
  { value: "FRIEND", label: "Amizade" },
  { value: "LOVE", label: "Amor" },
  { value: "COLLEGE", label: "Estudante" },
  { value: "STRANGER", label: "Desconhecido" },
  { value: "FAMILY", label: "Família" }
];

type FormQuestionSchemaValidationType = z.infer<typeof formQuestionSchemaValidation>

export function Modal({ modalIsOpen, closeModal }: ModalQuestionProps) {
  const { handleSubmit, control, formState: { errors, isSubmitting }, register} = useForm<FormQuestionSchemaValidationType>({
    resolver: zodResolver(formQuestionSchemaValidation)
  })

  
  async function onCreateQuestion(data: FormQuestionSchemaValidationType) {
    try {
      await api.post('/question', {
        title: data.title,
        content: data.content,
        anonymous: false,
        type: data.type.value
      })

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <ModalReact
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '720px',
            height: '480px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }}
      >
        <form onSubmit={handleSubmit(onCreateQuestion)}>
          <div className={styles['close-area']}>
            <button onClick={closeModal} className={styles.close_button}><X /></button>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Pergunta</label>
            <input type="text" placeholder='Qual foi a última vez que...' {...register('title', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.title && <span>{errors.title.message}</span>}
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="type">Tipo</label>
            
            <Controller 
              name='type'
              control={control}
              render={({ field }) => (
                <Select 
                {...field}
                  id="id"
                  options={selectOptions}
                  className={styles.select} 
                />
              )}
            />

            <div className={styles.form_error_message}>
              {errors.content && <span>{errors.content.message}</span>}
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="sobre">Sobre</label>
            <input type="text" id="sobre" placeholder='Descreva sua pergunta' {...register('content', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.content && <span>{errors.content.message}</span>}
            </div>
          </div>


          <Button disabled={isSubmitting} width='full' type="submit">
            {isSubmitting ? <Loader /> : 'Enviar'}
          </Button>
        </form>
      </ModalReact>
    </div>
  )
}