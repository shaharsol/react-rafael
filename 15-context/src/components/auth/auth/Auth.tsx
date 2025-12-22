import { useState, type PropsWithChildren } from "react";
import AuthContext from "./AuthContext";

export default function Auth(props: PropsWithChildren) {

    const { children } = props

    const [jwt, setJwt] = useState<string>(localStorage.getItem('jwt') || '')

    function newJwt(jwt: string) {
        setJwt(jwt)
        localStorage.setItem('jwt', jwt)
    }

    return (
        <AuthContext.Provider value={ { jwt, setJwt: newJwt } }>
            {children}
        </AuthContext.Provider>
    )
}