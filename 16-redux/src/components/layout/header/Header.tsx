import { NavLink } from 'react-router-dom'
import './Header.css'
import { useContext, useMemo } from 'react'
import AuthContext from '../../auth/auth/AuthContext'
import { jwtDecode } from 'jwt-decode'
import type User from '../../../models/User'
import { useUsername } from '../../../utils/utils'

export default function Header() {

    const { setJwt } = useContext(AuthContext)!

    const name = useUsername()

    function logout() {
        setJwt('')
    }

    return (
        <div className='Header'>
            <div>Logo</div>
            <nav>
                <NavLink to="/profile">profile</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/feed">feed</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/search">search</NavLink>
            </nav>
            <div>welcome {name} | <button onClick={logout}>logout</button></div>
        </div>
    )
}