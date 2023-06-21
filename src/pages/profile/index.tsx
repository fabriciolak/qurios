import { Header } from "../../components/shared/header"
import { useAuth } from "../../hooks/useAuth"
import { styled } from "../../styles"

export function Profile() {
  const { user } = useAuth()

  return (
    <>
      <Header />

      <Container>
        <h1>Perfil</h1>
        <p>{user.id}</p>
        <p>{user.email}</p>
        <ProfileName>
          {user.name}
        </ProfileName>
        <p>{user.username}</p>
      </Container>
    </>
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '720px',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',

  paddingBottom: '5rem'
})

const ProfileName = styled('div', {
  width: '100%',
  textAlign: 'center',
  fontSize: '1.5rem',
})