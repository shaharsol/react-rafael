import { useContext, useMemo, useState } from 'react'
import './Footer.css'
import AuthContext from '../../auth/auth/AuthContext'
import { jwtDecode } from 'jwt-decode'
import type User from '../../../models/User'
import useUsername from '../../../hooks/use-username'

export default function Footer() {

    const name = useUsername()

    return (
        <div className='Footer'>
            <div>(c) Rafael </div>
            <div>hi again {name}</div>
            <div>Server: {import.meta.env.VITE_REST_SERVER_URL}</div>
        </div>
    )
}