import { createContext } from "react"

interface AuthContextInterface {
    jwt: string
    setJwt(jwt: string): void
}

const AuthContext = createContext<AuthContextInterface | null>(null)
export default AuthContext