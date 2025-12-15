import { useEffect, useState } from 'react'
import './Feed.css'
import type PostModel from '../../../models/Post'
import feedService from '../../../services/feed'
import Post from '../post/Post'

export default function Feed() {

    let [ posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        // IIFE immediately invoked function expression
        // (async () => {
        //     const posts = await profileService.getProfile()

        // })()
        feedService.getFeed()
            .then(setPosts)
            .catch(e => alert(e.message))
    }, [])
    
    return (
        <div className='Feed'>
             <ul>
                {posts.map(p => <Post 
                    key={p.id} 
                    post={p} 
                    readOnly={true}
                />)}
            </ul>
        </div>
    )
}