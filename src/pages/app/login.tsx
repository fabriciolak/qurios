import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from '../../styles/pages/app/login.module.css'
import { z } from 'zod'
import { Button } from '../../components/shared/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { Loader } from 'lucide-react'

const formSchemaValidation = z.object({
  email: z.string().email({
    message: 'E-mail inválido. Tente outro'
  }),
  password: z.string().refine((val) => val.length > 6, {
    message: 'A senha deve ter pelo menos 6 caracteres'
  })
})

type formSchemaValidationType = z.infer<typeof formSchemaValidation>

export function Login() {
  const { handleSubmit, formState: { errors, isSubmitting, isValid }, register } = useForm<formSchemaValidationType>({
    resolver: zodResolver(formSchemaValidation)
  })

  const [invalidCredentials, setInvalidCredentials] = useState(false)

  const navigate = useNavigate()

  const { signIn } = useContext(AuthContext)

  async function onSignUp(data: formSchemaValidationType) {
    try {
      await signIn({ email: data.email, password: data.password })

      navigate('/profile')
    } catch (error) {
      if (error instanceof Error) {
        setInvalidCredentials(!!error.message)
      }
    }
  }

  return (
    <div className={styles['page-container']}>
      <section className={styles['left-container']}>
        <h1>Ola</h1>
      </section>
      <section className={styles.container}>
        <h1>Entre no Qurios</h1>
      
        <form onSubmit={handleSubmit(onSignUp)}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='qurios@example.com' {...register('email', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="password">Senha</label>
            <input type="text" placeholder='Senha' {...register('password', { required: true })} />
            <div className={styles.form_error_message}>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>

          <span className={styles['invalid-credentials']}>{invalidCredentials ? 'Desculpe, mas as credenciais fornecidas são inválidas.' : ''}</span>

          <Button disabled={!isValid} width='full' type="submit">
            {isSubmitting ? <Loader /> : 'Enviar'}
          </Button>

          <div className={styles['form-group']}>
            <div className={styles.form_footer_message}>
              Não tem uma conta? <Link to={`/app/register`}>Registre-se</Link>
            </div>
          </div>

        </form>
        
      </section>
    </div>
  )
}