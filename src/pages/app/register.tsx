import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from '../../styles/pages/app/register.module.css'
import { z } from 'zod'
import { Button } from '../../components/shared/Button'
import { Loader } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const formSchemaValidation = z.object({
  name: z.string().min(1, { 
    message: 'O nome deve ter pelo menos 1 caractere'
   }).max(24, { message: "O nome não pode conter mais do que 24 caracteres." }),
  username: z.string().min(6, {
    message: 'O nome de usuário deve ter pelo menos 6 caracteres'
  }).max(16, {
    message: "O nome de usuário não pode conter mais do que 16 caracteres."
  }),
  email: z.string().email({
    message: 'E-mail inválido. Tente outro'
  }),
  password: z.string().refine((val) => val.length > 6, {
    message: 'A senha deve ter pelo menos 6 caracteres'
  })
})

type formSchemaValidationType = z.infer<typeof formSchemaValidation>

// const errorSchema = z.object({
//   message: z.string()
// })

// type errorSchemaType = z.infer<typeof errorSchema>

export function Register() {
  const { handleSubmit, formState: { errors, isSubmitting }, register, watch } = useForm<formSchemaValidationType>({
    resolver: zodResolver(formSchemaValidation)
  })

  const [emailCustomError, setEmailCustomError] = useState('')
  const [usernameCustomError, setUsernameCustomError] = useState('')

  const { signUp } = useAuth()
  const navigate = useNavigate()

  function handleCustomError(error: Error) {
    if (error.message === 'Email already exists.') {
      setEmailCustomError((val) => {
        return val === watch('email') ? '' : 'Este E-mail já está sendo utilizado por outro usuário. Tente outro'
      })
    } else {
      setEmailCustomError('')
    }

    if (error.message === 'Username with same username already exists') {
      setUsernameCustomError((val) => {
        return val === watch('email') ? '' : 'Este nome de usuário já está sendo utilizado. Tente outro'
      })
    } else {
      setUsernameCustomError('')
    }
  }

  async function onSignUp({ name, username, email, password }: formSchemaValidationType) {
    try {
      await signUp({ name, username, email, password })
      
      navigate('/questions')
    } catch (error) {
      if (error instanceof Error) {
        // const customError = errorSchema.parse({
        //   message: error.message
        // })

        handleCustomError(error)
      }
    }
  }

  return (
    <div className={styles['page-container']}>
      <section className={styles['left-container']}>
        <h2>Não perca as perguntas dos seus amigos! Inscreva-se agora!</h2>
      </section>
      <section className={styles.container}>
        <h1>Registre-se no Qurios</h1>
      
        <form onSubmit={handleSubmit(onSignUp)}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nome completo</label>
            <input type="text" placeholder='John Doe' {...register('name', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" placeholder='johndoe' {...register('username', { required: true })} />
            <div className={styles.form_error_message}>
              <span>
                {
                  errors.username 
                    ? errors.username.message
                    : usernameCustomError
                }
              </span>
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='qurios@example.com' {...register('email', { required: true })} />
            <div className={styles.form_error_message}>
              <span>
                {
                  errors.email 
                    ? errors.email.message
                    : emailCustomError
                }
              </span>
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="password">Senha</label>
            <input type="text" placeholder='Senha' {...register('password', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>

          <Button disabled={isSubmitting} width='full' type="submit">
            {isSubmitting ? <Loader /> : 'Enviar'}
          </Button>

          <div className={styles['form-group']}>
            <div className={styles.form_footer_message}>
              Tem uma conta? <Link to={`/app/login`}>Entre</Link>
            </div>
          </div>
        </form>
        
      </section>
    </div>
  )
}