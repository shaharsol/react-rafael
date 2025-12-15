import { useEffect, useState } from 'react'
import './Following.css'
import type User from '../../../models/User'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'

export default function Following () {

    const [ following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(e => alert(e.message))
    }, [])

    function unfollow(id: string) {
        setFollowing(following.filter(f => f.id !== id))
    }

    return (
        <div className='Following'>
            <h2>I am following:</h2>
            <div className='list'>
                {following.map(f => <Follow 
                    key={f.id} 
                    user={f}
                    isFollowing={true}
                    unfollow={unfollow}
                />)}
            </div>
        </div>
    )
}
