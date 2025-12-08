import { useEffect, useState } from 'react'
import './Profile.css'
import type Post from '../../../models/Post'
import profileService from '../../../services/profile'

export default function Profile() {

    const [ posts, setPosts] = useState<Post[]>([])

    useEffect(() => {

        // (async () => {
        //     const posts = await profileService.getProfile()

        // })()
        profileService.getProfile()
            .then(setPosts)
            .catch(e => alert(e.message))
    }, [])

    return (
        <div className='Profile'>
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}