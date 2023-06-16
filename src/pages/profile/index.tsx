import { Header } from "../../components/shared/header"
import { useAuth } from "../../hooks/useAuth"

export function Profile() {
  const { user } = useAuth()

  return (
    <>
      <Header />
      <h1>Profile</h1>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </>
  )
}