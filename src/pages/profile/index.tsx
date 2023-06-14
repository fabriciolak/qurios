import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <h1>Profile</h1>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </>
  )
}