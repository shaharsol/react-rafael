import { useEffect, useState } from 'react'
import './Followers.css'
import type User from '../../../models/User'
import followersService from '../../../services/followers'
import Follow from '../follow/Follow'

export default function Followers() {

    const [ followers, setFollowers] = useState<User[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(e => alert(e.message))
    }, [])

    return (
        <div className='Followers'>
            <h2>They follow me:</h2>
            <div className='list'>
                {followers.map(f => <Follow key={f.id} user={f}/>)}
            </div>
        </div>
    )
}