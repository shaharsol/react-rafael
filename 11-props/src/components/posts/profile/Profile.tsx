import { useEffect, useState } from 'react'
import './Profile.css'
import type PostModel from '../../../models/Post'
import profileService from '../../../services/profile'
import Post from '../post/Post'

export default function Profile() {

    const [ posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        // IIFE immediately invoked function expression
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
                {posts.map(p => <Post key={p.id} post={p} />)}
            </ul>
        </div>
    )
}