import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function useAuth() {
  const hook = useContext(AuthContext)

  return hook
}