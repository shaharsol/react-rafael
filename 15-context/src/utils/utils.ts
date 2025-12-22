import { jwtDecode } from "jwt-decode"
import { useContext, useMemo } from "react"
import type User from "../models/User"
import AuthContext from "../components/auth/auth/AuthContext"

export function useUsername() {
    const { jwt } = useContext(AuthContext)!
    const name = useMemo(() => {
        const { name } = jwtDecode<User>(jwt)
        return name
    }, [ jwt ])
    return name
}